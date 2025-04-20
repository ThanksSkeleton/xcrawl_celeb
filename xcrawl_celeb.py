import csv
import json
import os
import time
from typing import Dict
from celeb_db import DatabaseLoader
from celebrity_info import CelebrityInfo  
from csv_loader import load_csv
from tmdb_api import tmdb_api 

import json

def export_json_js(data, json_path, js_path):
    """
    Export data to both a JSON file and a JavaScript module with a top-level variable assignment.

    :param data: The data to export (e.g., list of dicts).
    :param json_path: Path to output the raw JSON file (e.g., 'cards.json').
    :param js_path: Path to output the JS file with a variable assignment (e.g., 'cards.js').
    """
    try:
        with open(json_path, 'w', encoding='utf-8') as json_file:
            json.dump(data, json_file, indent=4, ensure_ascii=False)
        print(f"JSON exported to {json_path}")

        with open(js_path, 'w', encoding='utf-8') as js_file:
            js_file.write("const cardData = ")
            json.dump(list(data.values()), js_file, indent=4, ensure_ascii=False)
            js_file.write(";\n")
        print(f"JS exported to {js_path}")

    except Exception as e:
        print(f"Export failed: {e}")

def main():
    # Initialize database loader
    db_loader = DatabaseLoader("celebrity_db.json")

    # Step 1: Load names from all CSVs in the current directory
    names = load_csv(".")  # Default to the current directory
    
    api_key = os.getenv("TMDB_API_KEY")
    api: tmdb_api = tmdb_api(api_key)

    # Step 2: Process each name
    for name in names:
        try:
            print(f"Processing {name}...")  # Added console statement

            if db_loader.name_exists(name):
                print(f"Skipping {name}, already in database.")
                continue

            # Step 3: Query TMDb API
            api_response = api.get_celeb_info(name)
            if not api_response:
                db_loader.log_failed_lookup(name, "No API response")
                continue

            # Step 5: Add to database
            db_loader.add_entry(api_response)

        except Exception as e:
            print(f"Error processing {name}: {e}")

        # Add a 1-second delay between API calls
        time.sleep(1)

    # Step 6: Save database
    db_loader.save_database()

    # Step 7: Export JSON for printing
    export_json_js(db_loader.database, "cards.json", "cards.js")

if __name__ == "__main__":
    main()

import csv
import json
import os
import time
from celeb_db import DatabaseLoader
from celebrity_info import CelebrityInfo  
from csv_loader import load_csv
from tmdb_api import tmdb_api 

def export_json(data, file_path):
    """
    Export data to a JSON file.
    """
    try:
        with open(file_path, 'w', encoding='utf-8') as json_file:
            json.dump(data, json_file, indent=4, ensure_ascii=False)
        print(f"Data successfully exported to {file_path}.")
    except Exception as e:
        print(f"Failed to export data to {file_path}: {e}")

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
    export_json(db_loader.database, "cards.json")

if __name__ == "__main__":
    main()

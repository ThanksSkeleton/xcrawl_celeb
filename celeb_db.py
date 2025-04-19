import json
from dataclasses import asdict

from celebrity_info import CelebrityInfo  # Updated import

class DatabaseLoader:
    def __init__(self, db_path):
        """
        Initialize the DatabaseLoader with the path to the JSON database file.
        """
        self.db_path = db_path
        self.database = self._load_database()

    def _load_database(self):
        """
        Load the database from the JSON file. If the file does not exist, return an empty dictionary.
        """
        try:
            with open(self.db_path, 'r') as db_file:
                return json.load(db_file)
        except FileNotFoundError:
            return {}

    def save_database(self):
        """
        Save the current state of the database back to the JSON file.
        """
        with open(self.db_path, 'w') as db_file:
            json.dump(self.database, db_file, indent=4)

    def add_entry(self, celebrity_info: CelebrityInfo):
        """
        Add a new celebrity entry to the database if it does not already exist.
        """
        if celebrity_info.tmdb_id not in self.database:
            self.database[celebrity_info.tmdb_id] = asdict(celebrity_info)
        else:
            print(f"Duplicate entry skipped: {celebrity_info.name}")

    def log_failed_lookup(self, name, reason):
        """
        Log a failed lookup to a separate log file.
        """
        with open('failed_lookups.log', 'a') as log_file:
            log_file.write(f"{name}: {reason}\n")

    def name_exists(self, name):
        """
        Check if a celebrity with the given name already exists in the database.
        """
        return any(entry['name'] == name for entry in self.database.values())

import os
import csv
from typing import List

def load_csv(directory: str = ".") -> List[str]:
    """
    Load all CSV files from the given directory (default: current directory),
    skip the first row (header), and return a list of names from column #1.
    """
    names = []
    try:
        for filename in os.listdir(directory):
            if filename.endswith(".csv"):
                file_path = os.path.join(directory, filename)
                with open(file_path, 'r', encoding='utf-8') as csv_file:
                    reader = csv.reader(csv_file)
                    next(reader, None)  # Skip the header row
                    for row in reader:
                        if row and len(row) > 0:  # Ensure the row is not empty
                            names.append(row[0])  # Keep only column #1
    except Exception as e:
        print(f"Error loading CSVs from directory {directory}: {e}")
    return names

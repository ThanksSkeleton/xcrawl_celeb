import json
import requests
from PIL import Image
from io import BytesIO

# Load the JSON file
with open('/home/chris/xcrawl_celeb/cards.json', 'r') as file:
    data = json.load(file)

# Initialize variables for dimension ratio calculations
dimension_ratios = []

# Iterate through each celebrity and fetch image dimensions
for celeb_id, celeb_info in data.items():
    name = celeb_info.get("name")
    headshot_url = celeb_info.get("headshot")
    
    try:
        # Fetch the image
        response = requests.get(headshot_url)
        response.raise_for_status()  # Raise an error for bad responses
        
        # Open the image and get dimensions
        image = Image.open(BytesIO(response.content))
        width, height = image.size
        
        # Calculate the dimension ratio and store it
        ratio = width / height
        dimension_ratios.append(ratio)
        
        # Print the dimensions
        print(f"{name}: {width}x{height} (Ratio: {ratio:.2f})")
    except Exception as e:
        print(f"Error fetching dimensions for {name}: {e}")

# Calculate and print the minimum, average, and maximum dimension ratios
if dimension_ratios:
    min_ratio = min(dimension_ratios)
    max_ratio = max(dimension_ratios)
    avg_ratio = sum(dimension_ratios) / len(dimension_ratios)
    
    print("\nDimension Ratios:")
    print(f"Minimum Ratio: {min_ratio:.2f}")
    print(f"Average Ratio: {avg_ratio:.2f}")
    print(f"Maximum Ratio: {max_ratio:.2f}")
else:
    print("\nNo valid dimension ratios calculated.")

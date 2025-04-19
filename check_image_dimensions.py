import json
import requests
from PIL import Image
from io import BytesIO

# Load the JSON file
with open('/home/chris/xcrawl_celeb/cards.json', 'r') as file:
    data = json.load(file)

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
        
        # Print the dimensions
        print(f"{name}: {width}x{height}")
    except Exception as e:
        print(f"Error fetching dimensions for {name}: {e}")

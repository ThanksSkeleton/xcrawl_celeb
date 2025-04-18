import pytest
import os
from dotenv import load_dotenv
from tmdb_api import tmdb_api, CelebrityInfo

# Load environment variables from .env file
load_dotenv()

def test_get_celeb_info():
    # Get the TMDB API key from the environment
    api_key = os.getenv("TMDB_API_KEY")
    assert api_key, "TMDB_API_KEY is not set in the environment."

    api = tmdb_api(api_key)

    # Query for "Tom Hanks"
    result = api.get_celeb_info("Tom Hanks")

    print("Results")
    # Dump the CelebrityInfo object to the console
    print(result)

    # Validate the result is an instance of CelebrityInfo
    assert isinstance(result, CelebrityInfo)

    # Validate the fields of the result
    assert result.tmdb_id > 0
    assert result.name == "Tom Hanks"
    assert result.gender in ["MALE", "FEMALE", "OTHER"]
    assert result.headshot.startswith("http")
    assert isinstance(result.credits, list)
    assert len(result.credits) <= 3
    assert all(isinstance(credit, str) for credit in result.credits)

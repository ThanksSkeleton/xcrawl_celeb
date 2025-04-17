import os
import pytest
from dotenv import load_dotenv
from src.raw_api import RawAPI
from src.filter_api import FilterAPI

@pytest.fixture(scope="module")
def filter_api():
    # Load environment variables from .env
    load_dotenv()
    api_key = os.getenv("TMDB_API_KEY")
    if not api_key:
        raise EnvironmentError("TMDB_API_KEY not found in .env file.")
    
    # Initialize RawAPI and FilterAPI
    raw_api = RawAPI(api_key=api_key)
    return FilterAPI(raw_api=raw_api)

def test_get_celeb_info(filter_api):
    # Test the entire flow with the input name "Tom Hanks"
    name = "Tom Hanks"
    result = filter_api.get_celeb_info(name=name)
    
    # Assert the structure of the result
    assert "tmdb_id" in result
    assert "name" in result
    assert "gender" in result
    assert "headshot" in result
    assert "credits" in result
    assert isinstance(result["credits"], list)
    assert len(result["credits"]) > 0

    # Print the result for manual verification
    print(result)

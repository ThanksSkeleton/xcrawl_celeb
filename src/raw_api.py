from themoviedb import TMDb
from themoviedb.schemas import People
from themoviedb.utils import as_dataclass

class RawAPI:
    def __init__(self, api_key: str):
        self.tmdb = TMDb(api_key)

    def people(self, query: str, page: int = 1, include_adult: bool = False) -> People:
        """
        Search for people using the TMDB API.

        Args:
            query (str): The name of the person to search for.
            page (int): The page of results to retrieve.
            include_adult (bool): Whether to include adult content in the results.

        Returns:
            People: A dataclass containing the search results.
        """
        data = self.tmdb.request("search/person", query=query, page=page, include_adult=include_adult)
        return as_dataclass(People, data)

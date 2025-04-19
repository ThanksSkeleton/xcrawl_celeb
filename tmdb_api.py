from themoviedb import TMDb  # type: ignore
from themoviedb.schemas import People, Person, PartialMedia  # type: ignore
from typing import List, Dict, Any

from celebrity_info import CelebrityInfo

class tmdb_api:
    def __init__(self, api_key: str):
        self.tmdb = TMDb()
        self.tmdb.key = api_key  # Set the API key using the appropriate property

    def get_celeb_info(self, name: str) -> CelebrityInfo:
        # Search for people by name
        people: People = self.tmdb.search().people(query=name)
        if not people or not people.results:
            raise ValueError("No celebrities found.")

        # Find the most popular person
        most_popular_person: Person = max(people.results, key=lambda p: p.popularity)

        # Sort credits by popularity and limit to top 3
        top_credits: List[PartialMedia] = sorted(most_popular_person.known_for, key=lambda c: c.popularity, reverse=True)[:3]

        # Format the output
        formatted_credits: List[str] = [
            f"{credit.title or credit.name} ({credit.release_date.year if credit.release_date else 'N/A'})"
            for credit in top_credits
        ]
        gender_map = {1: "FEMALE", 2: "MALE"}
        return CelebrityInfo(
            tmdb_id=most_popular_person.id,
            name=most_popular_person.name,
            gender=gender_map.get(most_popular_person.gender, "OTHER"),
            headshot=most_popular_person.profile_url(),
            credits=formatted_credits,
        )
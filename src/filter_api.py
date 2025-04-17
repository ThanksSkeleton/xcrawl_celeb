from typing import List, Dict, Any
from .raw_api import RawAPI  # Assuming RawAPI is implemented in raw_api.py
from .tmdb_schemas import PartialPerson, CastMovie, CastTV  # Assuming these are defined in tmdb_schemas.py

class FilterAPI:
    def __init__(self, raw_api: RawAPI):
        self.raw_api = raw_api

    def get_celeb_info(self, name: str) -> Dict[str, Any]:
        # Fetch raw data from the Raw API
        people = self.raw_api.people(query=name)
        if not people or not people.results:
            raise ValueError("No celebrities found.")

        # Filter for cast members only and sort by popularity
        cast_members = [
            person for person in people.results
            if person.known_for_department == "Acting" and person.known_for
        ]
        if not cast_members:
            raise ValueError("No cast members found.")

        # Select the most popular person
        most_popular_person = max(cast_members, key=lambda p: p.popularity)

        # Ensure the person has at least one movie or TV credit
        credits = [
            media for media in most_popular_person.known_for
            if isinstance(media, (CastMovie, CastTV))
        ]
        if not credits:
            raise ValueError("No acting credits found for the selected person.")

        # Sort credits by popularity and limit to top 3
        top_credits = sorted(credits, key=lambda c: c.popularity, reverse=True)[:3]

        # Format the output
        formatted_credits = [
            f"{credit.title or credit.name} ({credit.release_date.year if credit.release_date else 'N/A'})"
            for credit in top_credits
        ]
        gender_map = {1: "MALE", 2: "FEMALE"}
        return {
            "tmdb_id": most_popular_person.id,
            "name": most_popular_person.name,
            "gender": gender_map.get(most_popular_person.gender, "OTHER"),
            "headshot": most_popular_person.profile_url(),
            "credits": formatted_credits,
        }

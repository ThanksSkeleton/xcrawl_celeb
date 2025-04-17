# API DESIGN

We will make two parts of our API layer that interacts with TMDB:

1. Raw API - Gathers the raw structs 
2. Filter API - Filters the raw structs down to the specific data

Filter API will wrap the Raw API. So filter takes a name and returns the Filter API Output described below.

## Raw API Input:
- `name`: The name of the person to search for. This is PROBABLY a string in the format "First Last" (e.g., "Tom Hanks") but perhaps a single name like "Sting".

## Raw API - TMDB API Data Types:

What follows is the full injection of the TMDB API Data types:

##############

@dataclass
class PartialPerson:
    id: Optional[int] = None
    profile_path: Optional[str] = None
    adult: Optional[bool] = None
    known_for: Optional[List[PartialMedia]] = None
    known_for_department: Optional[str] = None
    gender: Optional[int] = None ### DECODE: 0 Unspecified, 1 MALE 2 FEMALE 3 NONBINARY
    name: Optional[str] = None
    original_name: Optional[str] = None
    popularity: Optional[float] = None
    media_type: MediaType = MediaType.person

    def __str__(self) -> str:
        return self.name or self.original_name or ""

    def profile_url(self, size: SizeType = SizeType.original) -> Optional[str]:
        return f"https://image.tmdb.org/t/p/{size.value}{self.profile_path}" if self.profile_path else None


@dataclass
class Person(PartialPerson):
    birthday: Optional[date] = None
    deathday: Optional[date] = None
    also_known_as: Optional[List[str]] = None
    biography: Optional[str] = None
    place_of_birth: Optional[str] = None
    imdb_id: Optional[str] = None
    homepage: Optional[str] = None
    external_ids: Optional[ExternalIDs] = None
    images: Optional[Images] = None
    combined_credits: Optional[CreditsCombined] = None
    movie_credits: Optional[CreditsMovie] = None
    tv_credits: Optional[CreditsTV] = None
    tagged_images: Optional[TaggedImages] = None
    translations: Optional[Translations] = None
	
@dataclass
class Role:
    credit_id: Optional[str] = None
    character: Optional[str] = None
    episode_count: Optional[int] = None


@dataclass
class Job:
    credit_id: Optional[str] = None
    job: Optional[str] = None
    episode_count: Optional[int] = None


@dataclass
class Cast:
    id: Optional[int] = None
    adult: Optional[bool] = None
    gender: Optional[int] = None
    known_for_department: Optional[str] = None
    name: Optional[str] = None
    original_name: Optional[str] = None
    popularity: Optional[float] = None
    profile_path: Optional[str] = None
    cast_id: Optional[int] = None
    character: Optional[str] = None
    credit_id: Optional[str] = None
    order: Optional[int] = None
    total_episode_count: Optional[int] = None
    roles: Optional[List[Role]] = None

    def __str__(self) -> str:
        return self.name or self.original_name or ""

    def profile_url(self, size: SizeType = SizeType.original) -> Optional[str]:
        return f"https://image.tmdb.org/t/p/{size.value}{self.profile_path}" if self.profile_path else None


@dataclass
class Crew:
    id: Optional[int] = None
    adult: Optional[bool] = None
    gender: Optional[int] = None
    known_for_department: Optional[str] = None
    name: Optional[str] = None
    original_name: Optional[str] = None
    popularity: Optional[float] = None
    profile_path: Optional[str] = None
    credit_id: Optional[str] = None
    department: Optional[str] = None
    job: Optional[str] = None
    total_episode_count: Optional[int] = None
    jobs: Optional[List[Job]] = None
    order: Optional[int] = None

    def __str__(self) -> str:
        return self.name or self.original_name or ""

    def profile_url(self, size: SizeType = SizeType.original) -> Optional[str]:
        return f"https://image.tmdb.org/t/p/{size.value}{self.profile_path}" if self.profile_path else None


@dataclass
class GuestStars:
    id: Optional[int] = None
    character_name: Optional[str] = None
    credit_id: Optional[str] = None
    order: Optional[int] = None
    adult: Optional[bool] = None
    gender: Optional[int] = None
    known_for_department: Optional[str] = None
    name: Optional[str] = None
    original_name: Optional[str] = None
    popularity: Optional[float] = None
    profile_path: Optional[str] = None


@dataclass
class Credits:
    id: Optional[int] = None
    cast: Optional[List[Cast]] = None
    crew: Optional[List[Crew]] = None
    guest_stars: Optional[List[GuestStars]] = None


@dataclass
class CastMovie:
    id: Optional[int] = None
    character: Optional[str] = None
    credit_id: Optional[str] = None
    release_date: Optional[date] = None
    vote_count: Optional[int] = None
    video: Optional[bool] = None
    adult: Optional[bool] = None
    vote_average: Optional[float] = None
    title: Optional[str] = None
    genre_ids: Optional[List[int]] = None
    original_language: Optional[str] = None
    original_title: Optional[str] = None
    popularity: Optional[float] = None
    backdrop_path: Optional[str] = None
    overview: Optional[str] = None
    poster_path: Optional[str] = None
    order: Optional[int] = None

    def __str__(self) -> str:
        return self.title or ""

    def backdrop_url(self, size: SizeType = SizeType.original) -> Optional[str]:
        return f"https://image.tmdb.org/t/p/{size.value}{self.backdrop_path}" if self.backdrop_path else None

    def poster_url(self, size: SizeType = SizeType.original) -> Optional[str]:
        return f"https://image.tmdb.org/t/p/{size.value}{self.poster_path}" if self.poster_path else None


@dataclass
class CrewMovie:
    id: Optional[int] = None
    department: Optional[str] = None
    original_language: Optional[str] = None
    original_title: Optional[str] = None
    job: Optional[str] = None
    overview: Optional[str] = None
    vote_count: Optional[int] = None
    video: Optional[bool] = None
    poster_path: Optional[str] = None
    backdrop_path: Optional[str] = None
    title: Optional[str] = None
    popularity: Optional[float] = None
    genre_ids: Optional[List[int]] = None
    vote_average: Optional[float] = None
    adult: Optional[bool] = None
    release_date: Optional[date] = None
    credit_id: Optional[str] = None
    order: Optional[int] = None

    def __str__(self) -> str:
        return self.title or ""

    def backdrop_url(self, size: SizeType = SizeType.original) -> Optional[str]:
        return f"https://image.tmdb.org/t/p/{size.value}{self.backdrop_path}" if self.backdrop_path else None

    def poster_url(self, size: SizeType = SizeType.original) -> Optional[str]:
        return f"https://image.tmdb.org/t/p/{size.value}{self.poster_path}" if self.poster_path else None


@dataclass
class CreditsMovie:
    id: Optional[int] = None
    cast: Optional[List[CastMovie]] = None
    crew: Optional[List[CrewMovie]] = None


@dataclass
class CastTV:
    id: Optional[int] = None
    credit_id: Optional[str] = None
    original_name: Optional[str] = None
    genre_ids: Optional[List[int]] = None
    character: Optional[str] = None
    name: Optional[str] = None
    poster_path: Optional[str] = None
    vote_count: Optional[int] = None
    vote_average: Optional[float] = None
    popularity: Optional[float] = None
    episode_count: Optional[int] = None
    original_language: Optional[str] = None
    adult: Optional[bool] = None
    first_air_date: Optional[date] = None
    backdrop_path: Optional[str] = None
    overview: Optional[str] = None
    origin_country: Optional[List[str]] = None
    order: Optional[int] = None

    def __str__(self) -> str:
        return self.name or self.original_name or ""

    def backdrop_url(self, size: SizeType = SizeType.original) -> Optional[str]:
        return f"https://image.tmdb.org/t/p/{size.value}{self.backdrop_path}" if self.backdrop_path else None

    def poster_url(self, size: SizeType = SizeType.original) -> Optional[str]:
        return f"https://image.tmdb.org/t/p/{size.value}{self.poster_path}" if self.poster_path else None


@dataclass
class CrewTV:
    id: Optional[int] = None
    department: Optional[str] = None
    original_language: Optional[str] = None
    episode_count: Optional[int] = None
    job: Optional[str] = None
    overview: Optional[str] = None
    origin_country: Optional[List[str]] = None
    original_name: Optional[str] = None
    genre_ids: Optional[List[int]] = None
    name: Optional[str] = None
    first_air_date: Optional[date] = None
    backdrop_path: Optional[str] = None
    popularity: Optional[float] = None
    adult: Optional[bool] = None
    vote_count: Optional[int] = None
    vote_average: Optional[float] = None
    poster_path: Optional[str] = None
    credit_id: Optional[str] = None
    order: Optional[int] = None

    def __str__(self) -> str:
        return self.name or self.original_name or ""

    def backdrop_url(self, size: SizeType = SizeType.original) -> Optional[str]:
        return f"https://image.tmdb.org/t/p/{size.value}{self.backdrop_path}" if self.backdrop_path else None

    def poster_url(self, size: SizeType = SizeType.original) -> Optional[str]:
        return f"https://image.tmdb.org/t/p/{size.value}{self.poster_path}" if self.poster_path else None


@dataclass
class CreditsTV:
    id: Optional[int] = None
    cast: Optional[List[CastTV]] = None
    crew: Optional[List[CrewTV]] = None


@dataclass
class CastCombined(CastMovie, CastTV):
    media_type: Optional[MediaType] = None


@dataclass
class CrewCombined(CrewMovie, CrewTV):
    media_type: Optional[MediaType] = None

###############

### RAW API - TMDB API 

use this api, it should be all we need.

def people(self, query: str, *, page: int = 1, include_adult: bool = False) -> schemas.People:
    """Search for people.

    See more: https://developers.themoviedb.org/3/search/search-people
    """
    data = self.request("search/person", query=query, page=page, include_adult=include_adult)
    return utils.as_dataclass(schemas.People, data)

## Filter API Requirements:

If no celebs are found, the API should throw an error.
We are looking for celebs that are in movies or TV, but part of the cast only (not crew).
If multiple celebs are returned, the API should select the one with the higher popularity.
The celeb in question must have appeared in at least one movie or tv show as an actor (if not, throw an error).
At most 3 movies or shows should be listed. If there are more than 3, the 3 with the highest popularity should be selected.

## Filter API Output:

- `tmdb_id`: TMDB ID of the person
- `name`: Canonical name of the person (probably FN/LN but not guaranteed)
- `gender`: MALE, FEMALE, or OTHER
- `headshot`: URL of the person's headshot
- `credits`: List of movies and or shows the person is known 

Credits are formatted as follows: 
"Title (Year)"

Example:

```json
{
  "tmdb_id": 123456,
  "name": "Tom Hanks",
  "headshot": "https://image.tmdb.org/t/p/original/path/to/headshot.jpg",
  "credits": [
    "Movie Title (2023)",
    "TV Show Title (2022)",
    "Another Movie Title (2021)"
  ]
}
```
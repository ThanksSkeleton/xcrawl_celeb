from dataclasses import dataclass
from typing import List

@dataclass
class CelebrityInfo:
    tmdb_id: int
    name: str
    gender: str
    headshot: str
    credits: List[str]

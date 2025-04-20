# XCrawl Celebrity Card Generator - MVP Task List

This project generates distinctive celebrity cards to support offline TTRPG play in XCrawl. Output is physical cards, printed and cut by the user. No interactive web application is in scope for the MVP.

# Workflow Summary:
1. Generate a csv of celebrity names using ChatGPT.
2. Load the csv into a database.
3. Identify the TMDb ID and gender for each name using the TMDb API.
4. Fetch a list of known-for movies and tv credits for each celebrity.
5. Fetch a list of headshot URLs for each celebrity.
6. Save the database of celebrities to a JSON file + JS File.
7. Open the review interface, which loads from the JS file and allows the user to select the best headshot for each celebrity.
8. Save the headshot selection to another JSON file.
9. The card printing interface loads the base JSON file and the headshot selection file, and generates a printable HTML page.
10. The user prints the HTML page and cuts out the cards.

---

## Phase 0: Content Generation (Pre-Pipeline)

### 1. ChatGPT Celebrity Prompt Protocol
- Design reusable prompt templates for ChatGPT to generate lists of celebrities.
- Core idea: Chris provides a category or archetype, and ChatGPT returns a list of ~10 names.
- Output format: First Name, Last Name per line, suitable for CSV export.

### 2. Brainstorm Celebrity Categories
- Chris creates a large list of categories or archetypes to be used with the prompt protocol.
- Examples:
  - Iconic 90s Action Stars
  - Actors With Intense Faces
  - Musicians Who Act
  - Comedians With Big Energy
  - Silent Film Era

---

## Phase 1: CSV Ingestion and Enrichment

### 3. CSV Input – FN/LN Only
- Input format is a CSV of names only. No gender or metadata.

### 4. CSV Loader
- Reads CSV rows and prepares names for processing.


@dataclass
class CelebrityInfo:
    tmdb_id: int
    name: str
    gender: str
    headshots: List[str]
    credits: List[str]

### 5. Database Loader + Logic
- Loads a flat JSON database of already-processed celebrities.
- Skips duplicates by TMDb ID.
- Logs failed lookups with reason.

---

## Phase 2: TMDb API Enrichment

### 6. TMDb API Calls
tmdb.search().people(query=name) - id, gender, "most known for" credits 
tmdb.people(id).images - list of photos urls

### 7. Add API Output to DB
- Stores processed data keyed by TMDb ID.

### 8. Dump Valid Records for Printing
- Exports display-ready JSON (`cards.json`), filtered for successful lookups only.

---

## Phase 3: Photo Review

### 9. Review Interface - HTML Page
- Loads the JSON file and displays headshots for review.
- User selects the best headshot for each celebrity.
- After all selections, saves the choices to a separate JSON file.

---

## Phase 4: Output Rendering and Printing

### 10. HTML and CSS Layout for Cards
- Create a static HTML template and stylesheet for laying out each card.
- Print-optimized using `@media print` rules.
- Designed for physical formats like A4 or 3x5 cards.

### 11. JavaScript to Populate HTML from JSON
- Load JS file output and inject content into the card template.
- Used only for static population before printing.
- No interactivity or spinning logic required.

### 12. Physical Output
- User prints the generated HTML page(s) and cuts the cards for physical play.
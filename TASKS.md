# XCrawl Celebrity Card Generator - MVP Task List

This project generates distinctive celebrity cards to support offline TTRPG play in XCrawl. Output is physical cards, printed and cut by the user. No interactive web application is in scope for the MVP.

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

### 5. Database Loader + Logic
- Loads a flat JSON database of already-processed celebrities.
- Skips duplicates by TMDb ID.
- Logs failed lookups with reason.

---

## Phase 2: TMDb API Enrichment

### 6. TMDb API Calls
- Queries TMDb for each unresolved name.
- Retrieves:
  - Canonical name
  - TMDb person ID
  - Known-for movie list
  - Headshot path
  - Also-known-as aliases

### 7. Add API Output to DB
- Stores processed data keyed by TMDb ID.

### 8. Manual Review of API Output (TBD)
- For any ambiguous entries returned by TMDb (multiple name matches, movie choices, headshots), prompt the user to review and select the correct data.
- Output is the cleaned, verified selection to be used in final card generation.
- Implementation method (e.g., local UI, CLI interface, or semi-automated GPT chat loop) is to be determined after investigation.

---

## Phase 3: JSON Export

### 9. Dump Valid Records for Printing
- Exports display-ready JSON (`cards.json`), filtered for successful lookups only.

### 10. Dump Full DB for Debugging
- Exports raw full DB state, including failures, skipped entries, and unresolved names.

---

## Phase 4: Optional Image Enhancement

### 11. Download Headshot Images (Optional)
- Download headshots via URLs provided by TMDb API.

### 12. Manipulate Images for Laser Printer Output (Optional)
- Convert to grayscale
- Apply CLAHE
- Sharpening
- Gamma correction

---

## Phase 5: Output Rendering and Printing

### 13. HTML and CSS Layout for Cards
- Create a static HTML template and stylesheet for laying out each card.
- Print-optimized using `@media print` rules.
- Designed for physical formats like A4 or 3x5 cards.

### 14. JavaScript to Populate HTML from JSON
- Load JSON output and inject content into the card template.
- Used only for static population before printing.
- No interactivity or spinning logic required.

### 15. Physical Output
- User prints the generated HTML page(s) and cuts the cards for physical play.
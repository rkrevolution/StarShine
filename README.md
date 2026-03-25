# StarShine

**When I'm preparing for a behavioral interview**, I want to **practice recalling my STAR stories from memory** so that I can **deliver them confidently without reading from notes.**

StarShine is a free, open-source flashcard app built for exactly this. Paste your stories in, practice on the go, and walk into your interview ready.

## What problems does it solve?

- **"I have a huge doc of STAR stories but I can't memorize them"** — Flashcard mode forces active recall instead of passive reading
- **"I want to practice on my phone between meetings"** — Mobile-first, works offline, add to home screen
- **"I don't want to type stories one by one into a flashcard app"** — Paste a markdown file and you're done
- **"I need to test myself, not just review"** — Quiz mode shows the Situation and makes you recall the rest

## Features

- **Flashcards** — Tap to progressively reveal Situation, Task, Action, Result
- **Quiz Mode** — See the Situation, recall the rest before checking
- **Progress Tracking** — See how many stories you've reviewed vs remaining
- **Import from Markdown** — Paste a markdown file to bulk-add stories
- **Add/Edit/Delete** — Full CRUD for managing your stories
- **Export/Import JSON** — Move stories between devices
- **Mobile-first** — Bottom nav on mobile, top nav on desktop
- **Works offline** — No server, no accounts, no dependencies
- **Zero setup** — Single HTML file, no build tools, no frameworks

## Getting Started

1. Open the app
2. Choose **Try with sample stories** to explore, or **Import my stories** to add your own
3. Tap any story to start practicing
4. Switch between Flashcard and Quiz modes

## Markdown Import Format

```markdown
## Story Title | Company Name
S: What was the situation?
T: What was your task?
A: What actions did you take?
R: What was the result?

## Another Story | Another Company
S: ...
T: ...
A: ...
R: ...
```

## How It Works

- Single `index.html` file — no build step, no dependencies
- Stories stored in browser localStorage
- Dark theme, responsive design
- Swipe support on mobile

## Deploy Your Own

**GitHub Pages (recommended):**
1. Fork this repo
2. Go to Settings → Pages → Source: `main` branch, root `/`
3. Your site is live at `https://<username>.github.io/StarShine/`

**Or just open the file locally:**
```bash
open index.html
```

## Dev/Testing

Add URL params for quick testing:
- `?reset` — Clear all data, show welcome screen
- `?screen=home` — Jump to story list
- `?screen=practice` — Jump to practice view
- `?screen=manage` — Jump to manage screen
- `?screen=import` — Jump to import screen

## Files

```
StarShine/
  index.html            # The entire app
  apple-touch-icon.png  # Star icon for iOS home screen
  README.md             # This file
```

## License

MIT

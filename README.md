# ⚡ Unidex

> **Fast, customizable college & course comparison tracker. Add any university, compare fees & specializations, filter options, and export structured notes to Markdown.**

Unidex is a zero-bloat, local-first web application designed to help students, applicants, and researchers benchmark universities, tuition fees, eligibility requirements, and specializations side-by-side with zero clutter.

---

## ✨ Features

* **📊 Side-by-Side Comparison Matrix** — Compare multiple universities across Indian & international tuition fees, semester breakdowns, registration charges, delivery modes, eligibility criteria, and deadlines.
* **🎓 Master Specializations Directory** — Track specialized program branches (Generative AI, Cyber Security, Data Science, FinTech, Blockchain, Software Engineering) with individual semester fees, industry partner badges (e.g. Paytm, HCLTech), and direct portal links.
* **🔍 Instant Filter & Sorter** — Filter by delivery mode (*On-Campus*, *Online*, *Specializations*), select universities, and sort fees from lowest to highest with one click.
* **🤖 AI Skill & One-Click Import** — Add any university in seconds. Use the included [`SKILL.md`](SKILL.md) prompt with any AI (ChatGPT, Claude, Gemini, Antigravity) to research official portals, and paste the generated JSON into the **"Import JSON"** modal.
* **🌙 Warm, Eye-Friendly Dark Theme** — Features a curated warm charcoal palette designed for long research sessions without harsh glare or blue light.
* **📝 Markdown Note Export** — Export all your research notes and comparison tables into a clean `.md` document ready for Obsidian, Notion, or personal notes.
* **💾 Local-First & 100% Private** — Runs entirely in the browser using HTML, Vanilla CSS, and JavaScript. Zero external database or backend required; all custom data persists in your browser's `localStorage`.

---

## 🚀 Quick Start

1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/unidex.git
   cd unidex
   ```
2. Open `index.html` in any modern web browser:
   * Double-click `index.html`, OR
   * Serve with any local server:
     ```bash
     npx serve .
     # or
     python -m http.server 8000
     ```

---

## 🤖 Adding Any University via AI Skill

You don't need to manually type in semester fee tables. Unidex includes a dedicated AI extraction prompt:

1. In Unidex, click **"Import JSON"** in the top navigation bar.
2. Click **"📋 Copy AI Skill Prompt"** (or view [`SKILL.md`](SKILL.md)).
3. Paste the prompt to ChatGPT, Claude, Gemini, or Antigravity along with the name or link of any university you want to add.
4. The AI will crawl the university website and return clean JSON.
5. Paste the JSON into the Unidex Import box and click **"Import to Unidex"**. It will immediately appear across all views!

---

## 🛠️ Tech Stack

* **Structure:** Semantic HTML5
* **Styling:** Custom Vanilla CSS with CSS custom properties (design tokens), smooth micro-transitions, responsive layouts, and accessible contrast ratios.
* **Logic:** Vanilla JavaScript (ES6+), local-first state management, real-time search & filter engine.

---

## 📄 License

MIT License &copy; 2026 Unidex

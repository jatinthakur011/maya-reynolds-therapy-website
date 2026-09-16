# Dr. Maya Reynolds — Homepage Redesign

Built with Next.js 16 (App Router) + Tailwind CSS v4, cloned from the layout/structure of
conejovalleycounseling.com/home and re-themed + re-written for Dr. Maya Reynolds, PsyD
(fictional Santa Monica therapist profile).

## 1. Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 2. Swap in real images (do this before submitting)

All images currently point to generated placeholder SVGs in `/public/images/` so the site
renders correctly. Replace each file below with a real photo of the **same filename** (keep
`.jpg` — just update the `<img src>` extension in the matching component if you rename):

| File | What it should be | Source |
|---|---|---|
| `maya-headshot.svg` → `hero-portrait` | Dr. Reynolds's headshot | From her profile doc |
| `office-1.svg`, `office-2.svg`, `office-3.svg` | Her actual office photos | Google Drive folder linked in her profile doc |
| `hero-secondary.svg`, `intro-photo.svg`, `cta-photo.svg` | Calm Santa Monica / coastal imagery | Unsplash (free license), search "Santa Monica coast" or "calm ocean" |
| `how-i-work.svg` | A calm, uncluttered room / reading nook | Unsplash, search "minimal reading nook natural light" |
| `help-adults.svg` (used 3x) | Generic calm/reflective imagery — consider 3 *different* photos, one per focus-area card, rather than repeating one | Unsplash |

Update the `src` paths in `components/Hero.tsx`, `Intro.tsx`, `HowIHelp.tsx`, `HowIWork.tsx`,
`Services.tsx` (if you add images there), `Office.tsx`, and `CTASection.tsx` to match your
final filenames.

**Also update:**
- The placeholder email `hello@mayareynoldstherapy.com` in `CTASection.tsx` and `Footer.tsx` if
  a real contact address is preferred.
- The office address in `Office.tsx` / `Footer.tsx` — the source profile document has it as
  "123th Street 45 W, Santa Monica, CA 90401", which looks like a typo in the original doc. Used
  as-is; correct it if you have the intended real address.

## 3. Deploy to Vercel

```bash
npm install -g vercel   # if not already installed
vercel
```

Follow the prompts (link/create a project, accept defaults). Vercel will give you a live URL.
Alternatively: push this repo to GitHub, then import it at vercel.com/new.

## 4. Push to GitHub

```bash
git init
git add .
git commit -m "Homepage redesign for Dr. Maya Reynolds"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

(Make sure `node_modules` stays out of the repo — `.gitignore` already excludes it.)

## Structure

```
app/
  layout.tsx       — root layout, fonts, metadata
  page.tsx          — assembles all sections
  globals.css        — design tokens (colors, fonts)
components/
  Header.tsx          — nav + CTA
  Hero.tsx            — H1, subhead, primary CTA
  Intro.tsx            — "you're functional on the outside..." section
  HowIHelp.tsx          — 3 focus-area cards (anxiety, trauma, burnout)
  Expertise.tsx          — area-of-focus tag list
  HowIWork.tsx             — therapeutic approach narrative
  Services.tsx              — the 3 required SEO service cards
  Office.tsx                 — NEW "Our Office" section (Part 3 of assignment)
  CTASection.tsx               — final consult CTA
  Footer.tsx                    — contact + nav
public/images/                   — placeholder images, see table above
```

## Design tokens

- Colors: forest `#2F4538`, sand `#EDE6D8`, cream `#FAF8F4`, ochre `#B9824F`
- Type: Fraunces (display/headlines) + Inter (body)

## Note for the video walkthrough

Since the assignment scores communication at 30%, budget real prep time for the 5-minute Loom:
walk through desktop first, then resize/show mobile, explain the "Our Office" section and why it
builds trust, and narrate in plain language (no "Tailwind," "component," "props" — talk about
what the *client* sees and why it helps her).

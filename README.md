# Dr. Maya Reynolds, PsyD — Website Redesign

A homepage redesign for a fictional therapist profile, built as a front-end development assignment. The project clones the layout and structure of an existing counseling website, then rebuilds it with a new visual identity, original copy, and a new section — using a therapist profile document as the single source of truth for all content.

**Live site:** [add your Vercel link here]
**Original site cloned:** [conejovalleycounseling.com/home](https://www.conejovalleycounseling.com/home)

---

## About this project

Dr. Maya Reynolds, PsyD is a fictional Santa Monica therapist created for this exercise. Every piece of copy on this site — headlines, service descriptions, the About section, the Office section — is written from her profile document, not generated generically. The goal was to produce something that reads like it was actually written for her practice, not a template with her name dropped in.

## What's inside

- **Structure:** cloned from the reference site's section order, layout, and responsive grid
- **Theme:** a warm, grounded palette (deep forest green, warm sand, ochre accent) with Fraunces + Inter typography — built to feel calm and trustworthy rather than clinical
- **Copy:** all headlines, service descriptions, and the About section rewritten from Dr. Reynolds's profile, with local SEO keywords (Santa Monica, anxiety therapy, trauma-informed counseling, burnout therapy) worked in naturally
- **New section:** an **"Our Office"** section — not present in the original template — built around her real practice photos and office description, since the profile emphasized how much the physical space matters to clients
- **Images:** real photos throughout (headshot, office space, supporting imagery), no generic stock filler

## Tech stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [Tailwind CSS](https://tailwindcss.com/) v4
- TypeScript
- Deployed on [Vercel](https://vercel.com/)

## Project structure

\```
app/
  layout.tsx        — root layout, metadata, fonts
  page.tsx           — assembles all homepage sections
  globals.css         — design tokens (colors, typography)
components/
  Header.tsx            — navigation + primary CTA
  Hero.tsx                — H1, subhead, hero imagery
  Intro.tsx                 — "you're functional on the outside..." section
  HowIHelp.tsx                — three focus-area cards (anxiety, trauma, burnout)
  Expertise.tsx                 — area-of-focus tag list
  HowIWork.tsx                    — therapeutic approach section
  Services.tsx                      — three SEO-optimized service cards
  Office.tsx                          — new "Our Office" section
  CTASection.tsx                        — closing call-to-action
  Footer.tsx                              — contact details + nav
public/images/                              — all site imagery
\```

## Running locally

\```bash
npm install
npm run dev
\```

Then open [http://localhost:3000](http://localhost:3000).

## Building for production

\```bash
npm run build
npm run start
\```

## Design notes

| Token | Value | Use |
|---|---|---|
| Forest | `#2F4538` | Primary — headers, dark sections, buttons |
| Sand | `#EDE6D8` | Secondary — alternating section backgrounds |
| Cream | `#FAF8F4` | Base background |
| Ochre | `#B9824F` | Accent — primary CTAs, highlights |
| Fraunces | — | Display/headline typeface |
| Inter | — | Body typeface |

The palette and type pairing were chosen to feel warm and human rather than clinical or corporate — appropriate for a therapy practice built around trust and safety.

## Notes

- Dr. Maya Reynolds is a fictional profile used solely for this exercise; the site is not a real, operating business.
- The office address as listed in the source profile document ("123th Street 45 W, Santa Monica, CA 90401") is reproduced as-is from the original source material.

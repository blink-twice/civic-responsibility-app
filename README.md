# Civic Responsibility App

A lightweight civic routing and learning app that helps people figure out **which public authority to approach for a real-world problem** in an Indian city.

The project currently starts with **Mumbai-focused scenarios**, but the product is designed so the same model can later be extended to other cities.

## What the app is trying to solve

People often know they have a public problem, but not **which part of government actually owns it**.

A resident may be unsure whether to approach:

- a ward corporator,
- a municipal ward office,
- the police,
- an MLA,
- an MP,
- the District Collector,
- a state department,
- or a central agency such as UIDAI, Passport Seva, Indian Railways, or an electricity provider.

The app is built around a simple idea:

> Many civic problems are not just hard to solve — they are first **misrouted**.

This project helps reduce that confusion.

## Current product structure

The app currently has three main user-facing experiences.

### 1. Advisor

The Advisor is now a **search-first issue picker**.

Users can:

- search for a concrete issue,
- browse a few broad issue shortcuts,
- pick the closest matching scenario,
- and see:
  - the best first authority,
  - a likely escalation path,
  - a short explanation,
  - and one or more suggested next-step links.

The Advisor also supports deep-linking from the quiz so users can jump directly into the relevant scenario.

### 2. Quiz

The Quiz is designed as a short civic reasoning exercise rather than a school-style civics test.

Current quiz behavior:

- each attempt uses a fixed random subset of questions,
- the question order is randomized,
- answer options are written to reflect common real-world confusion,
- feedback after each answer explains who to approach and why,
- users can jump from a question to the Advisor,
- quiz progress is preserved during the browser session.

### 3. Learn

The Learn page explains the structure of public responsibility in a clearer, less overwhelming way.

It includes:

- role-based explainers,
- governance layers,
- escalation ladders,
- and a Mermaid-based governance diagram route for a more structural visual view.

## Current scenario coverage

The app already includes scenario data across multiple layers of government, not just municipal issues.

### Municipal / city-level examples

- Garbage collection and sanitation
- Roads and potholes
- Streetlights
- Water supply
- Drains and flooding
- Parks and public spaces
- Public health nuisance issues
- Illegal construction and building permissions
- Municipal schools
- Municipal dispensaries

### State / service-layer examples

- Police and law-and-order complaints
- Electricity faults and billing disputes
- Bus and metro access issues
- Ration card and PDS issues
- Welfare and pension issues
- State-run hospital and ambulance issues

### Central / specialised examples

- Aadhaar correction problems
- PAN correction problems
- Passport delays
- Railway-related issues
- MP escalation for central-agency-linked public issues

### District / larger administrative examples

- Flood compensation and district-level relief
- Land acquisition and compensation pathways
- Collector-led escalation contexts
- MP / MPLADS-related public asset pathways

## Current data model

The app is intentionally content-driven.

### Scenario shape

A scenario currently contains fields like:

- `id`
- `city`
- `layer`
- `category`
- `subcategory`
- `scenarioText`
- `primaryAuthority`
- `secondaryAuthority`
- `explanation`
- `actionLinks`

This structure is used by both the Advisor and the Quiz.

### Quiz question shape

A quiz question currently contains:

- `id`
- `scenarioId`
- `question`
- `options`
- `correctIndex`
- `explanation`

The key linkage is that each quiz question points to a scenario through `scenarioId`.

## Current UX direction

The app has moved away from the default Next.js scaffold and toward a clearer light-theme civic tool.

### What has already changed

- Cleaner page-level layout and navigation
- Better contrast and safer default text styling
- More differentiated colors across quiz and advisor surfaces
- Search-first Advisor instead of heavy dropdown-only interaction
- Deep-linking from quiz answers into advisor scenarios
- Session-preserved quiz flow
- Smaller, more focused fallback guidance in the Advisor

### What is still improving

- More robust mobile testing across local and deployed environments
- More scenario coverage in thin categories
- Better fallback logic for issues not yet listed
- More polished homepage storytelling and onboarding
- Potential future alias/tag support for smarter search suggestions

## Tech stack

The current app uses:

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel for deployment

## Current project structure

The exact filenames may shift across branches, but the working structure is roughly:

```text
app/
  layout.tsx
  page.tsx
  advisor/page.tsx
  quiz/page.tsx
  learn/page.tsx
  mermaid/page.tsx

data/
  scenarios.ts
  quizQuestions.ts

components/
  MermaidRenderer.tsx
```

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open locally in a browser:

```text
http://localhost:3000
```

## Testing on another device on the same network

If you want to open the app on a phone or another device on your local network, the most reliable pattern is to bind the Next.js dev server to all interfaces.

Use:

```bash
npm run dev -- --hostname 0.0.0.0
```

Then open:

```text
http://YOUR_LOCAL_IP:3000
```

Common things to check if the header loads but page content does not:

- The dev server is only bound to `localhost` instead of `0.0.0.0`.
- The phone and laptop are not actually on the same network.
- A runtime error is occurring on the client and only the shell/header is rendering.
- The browser on the phone has cached an older broken bundle.
- The app is relying on features or files that changed without the local dev server rebuilding cleanly.

In practice, a Vercel deployment often works better than cross-device local testing because the assets are served from a stable remote environment, but a deployment will **not** fix a real client-side runtime error in your React code. If the page shell loads and the content does not, always check the browser console and terminal logs first.

## Deployment

This app is intended to be deployed on Vercel.

Typical workflow:

1. Commit local changes.
2. Push to GitHub.
3. Let Vercel build and deploy from the connected repository.

Repository:

- [blink-twice/civic-responsibility-app](https://github.com/blink-twice/civic-responsibility-app)

## Recommended next improvements

### Content and coverage

- Add more scenarios where similar-looking issues belong to different authorities
- Add more thin-category issue types with distinct escalation paths
- Add a fallback or “not listed” strategy without making the app feel generic

### Search and guidance

- Add alias keywords per scenario to improve search
- Add “did you mean” suggestions for common issue wording
- Add optional issue tags for better grouping without exposing governance jargon to users

### UI and UX

- Continue tightening mobile layout and density
- Add subtle empty-state guidance in Advisor search
- Add lightweight icons only where they improve scanning
- Consider screenshots or micro-illustrations for onboarding

### Product depth

- Expand beyond Mumbai
- Add source methodology notes for scenarios
- Add issue coverage status by city
- Add a changelog or release notes section

## Product philosophy

The strongest version of this app is not the one with the most features.

It is the one that:

- helps users start with the right authority,
- makes escalation clearer,
- teaches the difference between overlapping layers of government,
- and stays easy to edit as the content grows.

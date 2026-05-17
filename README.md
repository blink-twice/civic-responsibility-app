# Civic Responsibility App

<<<<<<< HEAD
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
=======
A lightweight civic learning and routing app that helps people figure out **which public office to approach for a real-world problem** in an Indian city, starting with Mumbai as the first city implementation.

The project combines three related goals:

- Help a resident or small business identify the most relevant public authority for a specific problem.
- Teach users how responsibilities are split across municipal, district, state, and central actors.
- Show that everyday civic confusion is often a governance problem, not just an information problem.

## What the app does

The app currently has three main experiences:

### 1. Advisor
Users select a city, a category, and a subcategory, and the app returns:

- the most relevant **primary authority** to approach first,
- a **secondary authority** or escalation path,
- a short explanation of why that authority is appropriate, and
- links to relevant complaint portals, help lines, or official information.

This is designed to answer questions like:

- “My lane has not had garbage collection for 3 days — who do I go to?”
- “The local police station is not cooperating — what next?”
- “My Aadhaar correction is stuck — is this even a municipal issue?”

### 2. Quiz
The quiz tests whether people can correctly identify who handles a given issue.

It is not meant to be a school-style civics exam. The purpose is to surface a common urban problem: many people do not know whether a matter belongs to a ward councillor, municipal official, MLA, police, Collector, MP, or a specialised agency.

### 3. Learn
The Learn page explains how different offices fit together, what each one generally handles, and how escalation works when the first office does not respond.

It now includes:

- role-by-role explanations,
- a governance layers visual,
- escalation ladder blocks for common domains, and
- an optional Mermaid diagram page for a more structural visual map.

## Current scope

The app is currently structured around **Mumbai-focused civic scenarios**, but the model is designed so it can later be extended city by city.

The current data covers two broad kinds of issues.

### Municipal issues
These are issues usually handled by the municipal corporation and ward-level machinery, such as:

- garbage and sanitation,
- local roads and potholes,
- drains and flooding,
- streetlights,
- water supply,
- parks and public spaces,
- unauthorised local construction,
- municipal schools and dispensaries.

### Non-municipal issues
These are issues that residents often experience daily but that are actually handled by state, district, or central agencies, such as:

- police and public safety,
- electricity supply and billing,
- buses, metro, and railways,
- ration and welfare schemes,
- state-run hospitals,
- Aadhaar, PAN, and passports,
- district-level flood relief and land acquisition,
- MP-linked escalation and MPLADS-type local development works.

## Key public actors currently reflected in the content

The project now distinguishes between several kinds of actors instead of treating “government” as a single bucket.

### Municipal / city layer

- Ward corporator / councillor
- Ward officials and department staff
- Zonal / senior municipal officials
- Municipal commissioner
- Mayor

### District layer

- District Collector / District Magistrate
- Land acquisition / revenue officers (where relevant)

### State layer

- MLA
- Police station and police hierarchy
- Electricity DISCOM and grievance mechanisms
- State transport undertakings / metro agencies
- Food and Civil Supplies / ration offices
- Welfare and social justice offices
- State hospitals and health administration
- MLC (where relevant to explain state legislative structure)

### Central layer

- Member of Parliament (MP)
- Indian Railways
- NHAI / national highways bodies
- UIDAI
- PAN / Income Tax channels
- Passport Seva / Ministry of External Affairs
- Central grievance systems where relevant

## Why this app exists

In practice, many urban problems are misrouted because people use the wrong mental model.

For example:

- a resident may go to an MLA for a ward-level garbage issue,
- someone may expect the municipal corporation to fix an electricity billing dispute,
- a passport or Aadhaar issue may be treated like a local government issue,
- a district-wide flood compensation issue may not obviously point to the District Collector.

The app is meant to reduce this confusion while also making visible the layered nature of Indian urban governance.

## Tech stack

The app is built as a small Next.js application and is currently designed to remain simple and data-driven.

### Core stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Vercel for deployment

## Project structure

This is the working mental model of the codebase as it stands now.

```text
app/
  page.tsx                # Home page
  advisor/page.tsx        # Advisor UI
  quiz/page.tsx           # Quiz UI
  learn/page.tsx          # Learn page
  mermaid/page.tsx        # Optional dedicated Mermaid diagram page
  layout.tsx              # App shell / navigation / metadata

data/
  scenarios.ts            # Scenario dataset used by the Advisor
  quizQuestions.ts        # Quiz dataset used by the Quiz page

components/
  MermaidRenderer.tsx     # Client-side Mermaid renderer (if enabled)

docs/
  governance-map.md       # Optional Mermaid documentation file
```

Depending on the exact branch or local state of the project, filenames may differ slightly, but the core idea is the same: the app is primarily driven by **content files** rather than complex business logic.

## Data model

The app has been intentionally designed so that much of the product can evolve by editing content rather than rewriting UI code.

### Scenario shape

A scenario generally contains:

- `id`
- `city`
>>>>>>> 753c060b3a6f7f706480c328ffe3774045eea9bc
- `category`
- `subcategory`
- `scenarioText`
- `primaryAuthority`
- `secondaryAuthority`
- `explanation`
- `actionLinks`

<<<<<<< HEAD
This structure is used by both the Advisor and the Quiz.

### Quiz question shape

A quiz question currently contains:
=======
This makes it possible to expand coverage simply by adding more scenario objects.

### Quiz question shape

A quiz question generally contains:
>>>>>>> 753c060b3a6f7f706480c328ffe3774045eea9bc

- `id`
- `scenarioId`
- `question`
- `options`
- `correctIndex`
- `explanation`

<<<<<<< HEAD
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
=======
This lets the quiz grow alongside the scenario dataset.

## Product design approach

A few design principles shape the current version.

### 1. Content-first, not workflow-heavy
The app is intentionally lightweight. Many improvements can be made by editing data and copy rather than adding new state machines, dashboards, or backend infrastructure.

### 2. Practical civics, not textbook civics
The goal is not to explain government in the abstract. It is to help someone with a concrete situation know where to start and how to escalate.

### 3. Learning through contrast
A lot of the educational value comes from comparing similar-looking issues that belong to different authorities.

Examples:

- potholes on a local lane vs a national highway,
- a municipal dispensary vs a state-run hospital,
- a ward-level water issue vs a district-wide disaster compensation issue,
- a local civic complaint vs a central identity-document problem.

### 4. Randomness in the quiz is intentional
The quiz should not feel like a neat civics chapter. A mixed question order can help surface how uncertain people are when authorities are interleaved in realistic ways.

### 5. Visual simplification matters
Large governance diagrams are useful for documentation, but public-facing content works better when broken into simple visual layers and escalation ladders.

## Current UX elements

The app now includes or is set up to include:

- a cleaner visual design than the default scaffold,
- clearer text contrast and safer default typography,
- governance layer blocks on the Learn page,
- escalation ladder cards for common problem domains,
- a dedicated Mermaid page for structural diagrams, reachable by URL,
- optional links from Learn to the Mermaid view.

## How to run locally
>>>>>>> 753c060b3a6f7f706480c328ffe3774045eea9bc

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

<<<<<<< HEAD
Open locally in a browser:
=======
Open the app in your browser:
>>>>>>> 753c060b3a6f7f706480c328ffe3774045eea9bc

```text
http://localhost:3000
```

<<<<<<< HEAD
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
=======
If the Mermaid page is enabled, it should be available at:

```text
http://localhost:3000/mermaid
```

## How to deploy

This project is set up to work well with Vercel.

A simple workflow is:

1. Commit changes locally.
2. Push to GitHub.
3. Let Vercel deploy automatically from the connected repository.

Repository:

- [blink-twice/civic-responsibility-app](https://github.com/blink-twice/civic-responsibility-app)

## How to extend the project

There are several obvious next steps.

### Content expansion

- Add more Mumbai scenarios.
- Add more non-municipal and edge-case scenarios.
- Add more quiz questions that mirror real-world confusion.
- Expand Learn content for escalation and jurisdiction.

### Geographic expansion

- Add additional cities while reusing the same scenario structure.
- Mark where responsibilities differ by state law or local governance arrangements.

### Product improvements

- Add a `layer` field such as Municipal / District / State / Central.
- Filter quiz modes by layer or by issue type.
- Create a results breakdown showing where users are most confused.
- Add “see full pathway” jumps from quiz answers into the Advisor.

### Design improvements

- Turn the Mermaid governance map into a polished static SVG.
- Improve mobile layout of dense learning content.
- Add icons or visual markers for each government layer.

## Limitations

The app is an educational routing aid, not a legal advice tool or a substitute for official government guidance.

A few important caveats:

- Jurisdiction is often shared or messy in real life.
- Different states and cities may distribute powers differently.
- Escalation paths are practical heuristics, not guarantees.
- Real success often depends on both formal complaint systems and political follow-up.

## Development philosophy

The strongest version of this project is probably not the one with the most features.

It is the one that:

- gives users a clearer mental model of public responsibility,
- routes them toward the most plausible first authority,
- explains escalation without overwhelming them,
- and remains easy to update as the content matures.

## Suggested future README additions

As the project evolves, this README could later include:

- screenshots,
- a short demo GIF,
- a contribution guide,
- a source methodology note for how scenarios are researched,
- city coverage status,
- and a changelog.
>>>>>>> 753c060b3a6f7f706480c328ffe3774045eea9bc

# Civic Responsibility App

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
- `category`
- `subcategory`
- `scenarioText`
- `primaryAuthority`
- `secondaryAuthority`
- `explanation`
- `actionLinks`

This makes it possible to expand coverage simply by adding more scenario objects.

### Quiz question shape

A quiz question generally contains:

- `id`
- `scenarioId`
- `question`
- `options`
- `correctIndex`
- `explanation`

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

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the app in your browser:

```text
http://localhost:3000
```

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

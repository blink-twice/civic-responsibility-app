// app/learn/page.tsx
import Link from "next/link";

const GovernanceLayers = () => {
  return (
    <section className="mb-6">
      <h2 className="mb-2 text-xl font-semibold text-slate-900">
        How these roles sit together
      </h2>
      <p className="mb-3 text-sm text-slate-800">
        This is a simplified picture of which levels of government different
        roles belong to, and how your issue might travel between them.
      </p>

      <div className="space-y-3 text-xs sm:text-sm">
        <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
          <p className="mb-1 font-semibold text-slate-900">
            Municipal (city services)
          </p>
          <p className="mb-2 text-slate-700">
            Handles day-to-day city services like garbage, local roads, drains,
            streetlights, parks, ward schools and dispensaries.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">
              Ward corporator / councillor
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">
              Ward officials
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">
              Municipal commissioner
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">
              Mayor
            </span>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
          <p className="mb-1 font-semibold text-slate-900">
            District administration
          </p>
          <p className="mb-2 text-slate-700">
            Coordinates many state and central schemes at district level, and
            leads disaster relief and land acquisition processes.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">
              District Collector / District Magistrate
            </span>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
          <p className="mb-1 font-semibold text-slate-900">
            State government & agencies
          </p>
          <p className="mb-2 text-slate-700">
            Responsible for police, most hospitals and state schools, state
            highways, public transport undertakings, welfare schemes and more.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">
              MLA
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">
              Police
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">
              Electricity DISCOM
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">
              Transport undertakings / metro agencies
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">
              Food & civil supplies
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">
              State hospitals
            </span>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
          <p className="mb-1 font-semibold text-slate-900">
            Central government & agencies
          </p>
          <p className="mb-2 text-slate-700">
            Handles national laws and policies, big infrastructure and identity
            systems. MPs sit here and can recommend works or escalate issues.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">
              MP
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">
              Railways
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">
              NHAI / national highways
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">
              UIDAI
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">
              Income Tax / PAN
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">
              Passport (MEA)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const EscalationLadders = () => {
  const ladders = [
    {
      title: "Local civic services",
      subtitle:
        "Garbage, local roads, drains, streetlights, parks, ward-level facilities",
      steps: [
        "Start: Ward corporator or ward office / relevant ward department",
        "If no action: Zonal or senior municipal officials",
        "If still unresolved: Municipal commissioner",
        "If city-wide / political issue: Mayor and MLA",
      ],
    },
    {
      title: "Police & safety",
      subtitle:
        "Harassment, theft, noise, public safety, local law-and-order complaints",
      steps: [
        "Start: Local police station / police inspector",
        "If no cooperation: ACP / DCP or equivalent zonal police officer",
        "If still unresolved: Commissioner of Police",
        "If wider pattern or political escalation needed: MLA",
      ],
    },
    {
      title: "Electricity",
      subtitle:
        "Power cuts, dangerous wires, billing disputes, low voltage, meter issues",
      steps: [
        "Start: DISCOM complaint centre / local electricity office",
        "If unresolved: Consumer Grievance Redressal Forum / Ombudsman",
        "If area-wide issue persists: MLA for pressure on state agencies",
      ],
    },
    {
      title: "Ration & welfare",
      subtitle:
        "Ration card problems, PDS shortages, pension delays, beneficiary issues",
      steps: [
        "Start: Local ration office / welfare office",
        "If unresolved: District-level officers in the same department",
        "If affecting many residents or needing coordination: District Collector",
        "Political escalation: MLA",
      ],
    },
    {
      title: "Railways & central services",
      subtitle:
        "Railway station issues, national highways, Aadhaar, PAN, passport delays",
      steps: [
        "Start: The relevant central agency (Railways, NHAI, UIDAI, PAN, Passport Seva)",
        "If unresolved: Agency grievance channel / central grievance platform",
        "If still stuck or systemic: MP for ministry-level escalation",
      ],
    },
    {
      title: "District-wide relief & land acquisition",
      subtitle:
        "Flood relief, compensation, rehabilitation, land acquisition for major projects",
      steps: [
        "Start: District Collector / District Magistrate or designated district officer",
        "If issue is about compensation or records: Land acquisition / revenue officer",
        "If broader political backing is needed: MLA and, where central projects are involved, MP",
      ],
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="mb-2 text-xl font-semibold text-slate-900">
        Escalation ladders
      </h2>
      <p className="mb-4 text-sm text-slate-800">
        These ladders show a practical sequence: where to start, who to go to if
        there is no response, and when the issue moves into a higher political
        or administrative layer.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {ladders.map((ladder) => (
          <div
            key={ladder.title}
            className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <h3 className="mb-1 text-base font-semibold text-slate-900">
              {ladder.title}
            </h3>
            <p className="mb-3 text-sm text-slate-700">{ladder.subtitle}</p>

            <div className="space-y-2">
              {ladder.steps.map((step, index) => (
                <div key={step} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm text-slate-800">{step}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FindRepresentatives = () => {
  const links = [
    {
      title: "Find your MLA or MP",
      href: "https://electoralsearch.eci.gov.in/",
      description:
        "Use your voter details and constituency information to identify your elected representatives.",
    },
    {
      title: "Lok Sabha member list",
      href: "https://sansad.in/ls/members",
      description:
        "Useful when you already know your parliamentary constituency and want the current MP listing.",
    },
    {
      title: "BMC ward information",
      href: "https://portal.mcgm.gov.in/irj/portal/anonymous",
      description:
        "Mumbai-specific ward information and civic service navigation for local issues.",
    },
  ];

  return (
    <section className="mb-8 rounded-xl border border-sky-200 bg-sky-50 p-5 shadow-sm">
      <h2 className="mb-2 text-xl font-semibold text-slate-900">
        Find your MLA, councillor, or MP
      </h2>
      <p className="mb-4 text-sm text-slate-800">
        Once you know which kind of representative matters for your issue, use
        official lookup portals to identify the right person or constituency for
        your area.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {links.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-sky-100 bg-white p-4 transition-colors duration-200 hover:bg-sky-100"
          >
            <p className="text-sm font-semibold text-sky-900">{item.title}</p>
            <p className="mt-2 text-sm text-slate-700">{item.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

const LearnPage = () => {
  return (
    <>
      <section className="mb-6">
        <h1 className="mb-3 text-2xl font-semibold text-slate-900">
          Who does what in a city?
        </h1>
        <p className="mb-2 text-sm text-slate-800">
          In a large Indian city, you are usually represented by more than one
          person at the same time: a ward corporator or councillor in the
          municipal corporation, a Member of Legislative Assembly (MLA) for the
          state, sometimes a Member of Legislative Council (MLC) in bicameral
          states, city-level leaders like the mayor and municipal commissioner,
          and for national issues a Member of Parliament (MP). The District
          Collector or District Magistrate is also a key administrative officer
          for the entire district.
        </p>
        <p className="text-sm text-slate-800">
          This page keeps things intentionally short: it gives you a quick mental
          model of the layers involved, a few practical escalation ladders, and
          a way to identify your own representatives.
        </p>
      </section>

      <GovernanceLayers />
      <EscalationLadders />
      <FindRepresentatives />

      <section className="mb-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm text-slate-800">
          Want to see what this looks like visually?{" "}
          <Link
            href="/mermaid"
            className="font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900"
          >
            Open the governance map
          </Link>
          .
        </p>
      </section>
    </>
  );
};

export default LearnPage;

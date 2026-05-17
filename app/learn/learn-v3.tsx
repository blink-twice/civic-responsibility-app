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
        "If city-wide / political issue: Mayor and MLA"
      ]
    },
    {
      title: "Police & safety",
      subtitle:
        "Harassment, theft, noise, public safety, local law-and-order complaints",
      steps: [
        "Start: Local police station / police inspector",
        "If no cooperation: ACP / DCP or equivalent zonal police officer",
        "If still unresolved: Commissioner of Police",
        "If wider pattern or political escalation needed: MLA"
      ]
    },
    {
      title: "Electricity",
      subtitle:
        "Power cuts, dangerous wires, billing disputes, low voltage, meter issues",
      steps: [
        "Start: DISCOM complaint centre / local electricity office",
        "If unresolved: Consumer Grievance Redressal Forum / Ombudsman",
        "If area-wide issue persists: MLA for pressure on state agencies"
      ]
    },
    {
      title: "Ration & welfare",
      subtitle:
        "Ration card problems, PDS shortages, pension delays, beneficiary issues",
      steps: [
        "Start: Local ration office / welfare office",
        "If unresolved: District-level officers in the same department",
        "If affecting many residents or needing coordination: District Collector",
        "Political escalation: MLA"
      ]
    },
    {
      title: "Railways & central services",
      subtitle:
        "Railway station issues, national highways, Aadhaar, PAN, passport delays",
      steps: [
        "Start: The relevant central agency (Railways, NHAI, UIDAI, PAN, Passport Seva)",
        "If unresolved: Agency grievance channel / central grievance platform",
        "If still stuck or systemic: MP for ministry-level escalation"
      ]
    },
    {
      title: "District-wide relief & land acquisition",
      subtitle:
        "Flood relief, compensation, rehabilitation, land acquisition for major projects",
      steps: [
        "Start: District Collector / District Magistrate or designated district officer",
        "If issue is about compensation or records: Land acquisition / revenue officer",
        "If broader political backing is needed: MLA and, where central projects are involved, MP"
      ]
    }
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
          The bullets below are a simplified guide to who is mainly responsible
          for which kinds of everyday city issues, and when each role is the
          right person to approach first versus when you may need to escalate to
          someone above them or outside the municipal system.
        </p>
      </section>
      <GovernanceLayers />
<EscalationLadders />
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
      {/* Ward corporator */}

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold text-slate-900">
          Ward corporator / councillor
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-800">
          <li>
            <span className="font-medium">Level:</span> Ward-level elected
            representative within the municipal corporation, usually covering a
            small neighbourhood or group of localities.
          </li>
          <li>
            <span className="font-medium">Typical issues:</span> Garbage
            collection, local roads and footpaths, drains and storm water,
            streetlights, local water distribution, parks, public toilets, small
            municipal schools and health centres in the ward.
          </li>
          <li>
            <span className="font-medium">When to approach first:</span> For
            day-to-day city service problems in your lane or ward—overflow of
            waste, potholes on local roads, flooding on streets, dark spots,
            broken swings in a municipal park, poor upkeep of ward-level
            facilities.
          </li>
          <li>
            <span className="font-medium">How they act:</span> They raise issues
            in ward committee and council meetings, push municipal engineers and
            ward officials, and can help get smaller works and repairs sanctioned
            from ward funds.
          </li>
          <li>
            <span className="font-medium">When to escalate:</span> If the
            corporator and ward officials ignore repeated complaints, escalate to
            zonal officers, the municipal commissioner, or involve your MLA or
            media when the problem reflects a pattern across many wards.
          </li>
        </ul>
      </section>

      {/* MLA */}

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold text-slate-900">MLA</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-800">
          <li>
            <span className="font-medium">Level:</span> State-level elected
            representative for a large assembly constituency covering several
            municipal wards.
          </li>
          <li>
            <span className="font-medium">Typical issues:</span> State-run
            schools and colleges, government hospitals, state highways, big
            water and sewerage projects, state welfare schemes like ration,
            pensions and scholarships.
          </li>
          <li>
            <span className="font-medium">When to approach first:</span> For
            problems with state services in your area, such as chronic staff
            shortages in a government hospital, missing teachers in a government
            school, or failures in a major state road or large water project.
          </li>
          <li>
            <span className="font-medium">When to involve after others:</span>{" "}
            If your corporator and ward officials say a problem is stuck because
            of state-level funding, permissions or policy, the MLA can push the
            relevant department or raise the issue in the assembly.
          </li>
          <li>
            <span className="font-medium">When not to go first:</span> For
            hyper-local issues like a single drain, potholes on a ward road or
            one dark streetlight, it is usually more effective to start with the
            corporator and ward officials rather than the MLA’s office.
          </li>
        </ul>
      </section>

      {/* MLC */}

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold text-slate-900">
          MLC (in bicameral states)
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-800">
          <li>
            <span className="font-medium">Level:</span> Member of the
            Legislative Council, part of the upper house in states that have one
            (for example Maharashtra, Karnataka, Telangana, Uttar Pradesh).
          </li>
          <li>
            <span className="font-medium">Typical role:</span> Reviews and
            debates state laws, budgets and policies; often brings in expertise
            from professions or local bodies, but has less direct control over
            local works than an MLA.
          </li>
          <li>
            <span className="font-medium">When they matter:</span> When you want
            to influence state-level policy or a bill under discussion,
            especially if you vote in an MLC constituency (such as graduates,
            teachers or local bodies).
          </li>
          <li>
            <span className="font-medium">Day-to-day issues:</span> For everyday
            city problems like garbage, local roads, drains or streetlights,
            your corporator and MLA are usually more immediate points of contact
            than an MLC.
          </li>
          <li>
            <span className="font-medium">Escalation:</span> If you and other
            citizens’ groups are pushing for a broader change in state law
            affecting cities (for example, stronger municipal powers), MLCs can
            be one of the people you lobby along with MLAs.
          </li>
        </ul>
      </section>

      {/* Member of Parliament */}

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold text-slate-900">
          Member of Parliament (MP)
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-800">
          <li>
            <span className="font-medium">Level:</span> National-level elected
            representative for a Lok Sabha constituency that includes many city
            wards and sometimes rural areas.
          </li>
          <li>
            <span className="font-medium">Typical role:</span> Makes and
            debates laws in Parliament and holds central ministries to account.
            Through MPLADS, MPs can also recommend local development works like
            school rooms, health facilities, roads and public spaces, which are
            then implemented by the district administration.
          </li>
          <li>
            <span className="font-medium">When to approach:</span> For issues
            involving central agencies or national schemes—such as persistent
            problems with Railways, national highways, central hospitals or
            centrally sponsored schemes—and for well-defined local works that
            could be funded under MPLADS.
          </li>
          <li>
            <span className="font-medium">How they act locally:</span> MPs can
            recommend a limited set of works under MPLADS and write to central
            ministries, raise questions in Parliament or meet ministers about
            serious or long-running problems in their constituency.
          </li>
          <li>
            <span className="font-medium">When not to go first:</span> For
            single-lane garbage issues, one streetlight or a local building
            violation, your corporator, ward officials and MLA are more direct
            routes than an MP’s office.
          </li>
        </ul>
      </section>

      {/* Mayor */}

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold text-slate-900">Mayor</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-800">
          <li>
            <span className="font-medium">Level:</span> Political head of the
            municipal corporation, usually chosen by councillors or sometimes
            directly elected, representing the city as a whole.
          </li>
          <li>
            <span className="font-medium">Typical role:</span> Chairs full
            council meetings, gives political direction on citywide priorities
            and often fronts civic campaigns on issues like waste, flooding or
            public health.
          </li>
          <li>
            <span className="font-medium">When to approach:</span> When your
            issue reflects a pattern across many wards—for example, citywide
            garbage mismanagement, repeated flooding, or a major policy stance
            on transport, parks or development.
          </li>
          <li>
            <span className="font-medium">For local problems:</span> The mayor
            is usually not the first stop for a single overflowing dustbin or
            one bad road; start with your corporator and ward officials, and
            consider approaching the mayor only if the underlying problem is
            citywide or councillors and officials are systematically
            unresponsive.
          </li>
          <li>
            <span className="font-medium">Escalation path:</span> Citizen groups
            sometimes petition the mayor and senior committee members when they
            want the whole corporation to debate a topic, pass a resolution or
            change a city-level policy.
          </li>
        </ul>
      </section>

      {/* Municipal commissioner and ward officials */}

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold text-slate-900">
          Municipal commissioner and ward officials
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-800">
          <li>
            <span className="font-medium">Level:</span> The municipal
            commissioner is the top administrative head of the corporation,
            usually an IAS or senior state officer; ward officers, engineers and
            departmental staff work under the commissioner.
          </li>
          <li>
            <span className="font-medium">Typical role:</span> Runs the
            day-to-day machinery of the city—engineering, health, sanitation,
            education, accounts and more—and is responsible for executing
            budgets, projects and council decisions.
          </li>
          <li>
            <span className="font-medium">Ward officials:</span> Ward officers,
            junior and deputy engineers, and department staff handle complaints
            and works related to garbage, roads, drains, water, parks and local
            facilities in your specific area.
          </li>
          <li>
            <span className="font-medium">When to approach first:</span> For
            many services, filing a complaint with the ward office or the
            relevant department (solid waste, roads, water, gardens, health) at
            ward level is the most direct way to trigger action, ideally while
            also informing your corporator.
          </li>
          <li>
            <span className="font-medium">When to escalate to commissioner:</span>{" "}
            If the same problem persists across multiple wards, several
            departments are failing together, or ward officials do not act
            despite repeated written complaints and councillor follow-up,
            citizens can escalate to zonal officers and then to the municipal
            commissioner using formal grievance channels or RTI.
          </li>
        </ul>
      </section>

      {/* District Collector / District Magistrate */}

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold text-slate-900">
          District Collector / District Magistrate
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-800">
          <li>
            <span className="font-medium">Level:</span> Senior state officer who
            heads district administration and often also acts as District
            Magistrate, covering both city and surrounding rural areas.
          </li>
          <li>
            <span className="font-medium">Typical role:</span> Coordinates
            revenue administration, land acquisition, elections, disaster
            management and implementation of many state and central schemes at
            district level.
          </li>
          <li>
            <span className="font-medium">When to approach:</span> For
            district-wide issues like flood relief and compensation, major
            accidents, or land acquisition and rehabilitation for large projects
            such as highways, metro lines and industrial corridors.
          </li>
          <li>
            <span className="font-medium">Relationship with city:</span> Even in
            big cities, the Collector is the nodal authority for many schemes
            and projects that cut across municipal boundaries or involve state
            and central funds.
          </li>
          <li>
            <span className="font-medium">Escalation:</span> If individual
            department offices (for example, food, welfare or revenue) are not
            resolving problems that affect many people, citizens and
            representatives may escalate to the Collector for intervention.
          </li>
        </ul>
      </section>

      {/* When your issue is not municipal */}

      <section className="mb-2">
        <h2 className="mb-2 text-xl font-semibold text-slate-900">
          When your issue is not municipal
        </h2>
        <p className="mb-2 text-sm text-slate-800">
          Many everyday problems in cities are handled not by the municipal
          corporation but by state and central agencies: police for crime and
          safety, electricity distribution companies for power cuts and bills,
          transport undertakings and Railways for buses and trains, state
          departments for ration and pensions, and central bodies for Aadhaar,
          PAN and passports. In such cases the advisor will point you to these
          authorities—and sometimes to the District Collector, MLA or MP as
          escalation paths—rather than to your corporator.
        </p>
        <p className="text-sm text-slate-800">
          A simple thumb rule is to start as local as possible (ward
          officials/corporator) when it is clearly a city service, and to look
          beyond the corporation to state or central agencies when the service
          is about policing, electricity, railways, highways, ration, welfare
          schemes or national identity documents. The quiz and advisor are
          designed to help you build this instinct over time.
        </p>
      </section>
    </>
  );
};

export default LearnPage;
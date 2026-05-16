// app/learn/page.tsx

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
          states, and city-level leaders like the mayor and municipal
          commissioner.
        </p>
        <p className="text-sm text-slate-800">
          The bullets below are a simplified guide to who is mainly responsible
          for which kinds of everyday city issues, and when each role is the
          right person to approach first versus when you may need to escalate to
          someone above them.
        </p>
      </section>

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

      <section className="mb-2">
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
    </>
  );
};

export default LearnPage;
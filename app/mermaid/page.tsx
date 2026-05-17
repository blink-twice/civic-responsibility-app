import MermaidRenderer from "@/components/MermaidRenderer";

const chart = `
flowchart TB

  CIT[Citizen / Resident / Small business]

  subgraph MUNI["Municipal / City layer"]
    direction TB
    CORP["Ward Corporator / Councillor
    Domains: garbage, local roads, drains, streetlights, parks,
    ward-level municipal schools/dispensaries"]

    WARD["Ward Officials / Ward Office
    Domains: complaints, local engineering, sanitation,
    ward execution of civic works"]

    ZONAL["Zonal / Senior Municipal Officials
    Domains: cross-ward implementation, unresolved ward complaints"]

    COMM["Municipal Commissioner
    Domains: city-wide administration, budgets, execution,
    major municipal escalations"]

    MAYOR["Mayor
    Domains: city-wide political leadership, resolutions,
    symbolic/political escalation"]
  end

  subgraph DIST["District Administration"]
    direction TB
    COL["District Collector / District Magistrate
    Domains: disaster relief, land acquisition, district coordination,
    revenue, implementation of major schemes, elections"]
  end

  subgraph STATEPOL["State political layer"]
    direction TB
    MLA["MLA
    Domains: state departments, large infrastructure, hospitals,
    schools, welfare, policy escalation"]

    MLC["MLC (where applicable)
    Domains: state legislative review, broader policy influence"]
  end

  subgraph STATEADM["State agencies and departments"]
    direction TB
    POLST["Police Station / Police Inspector"]
    ACP["ACP / DCP / Police hierarchy"]
    CP["Commissioner of Police"]
    DISCOM["Electricity DISCOM / Complaint Centre"]
    CGRF["Electricity Grievance Forum / Ombudsman"]
    TRANS["Bus / Metro / State Transport Undertakings"]
    FOOD["Food & Civil Supplies / Ration Office"]
    WELF["State Welfare / Social Justice Office"]
    SHOSP["State Hospital / Superintendent / Health Dept"]
  end

  subgraph CENTPOL["Central political layer"]
    direction TB
    MP["Member of Parliament (MP)
    Domains: Railways, national highways,
    MPLADS recommendations, national escalation"]
  end

  subgraph CENTADM["Central agencies"]
    direction TB
    RAIL["Indian Railways"]
    NHAI["NHAI / National Highways"]
    UID["UIDAI"]
    PAN["Income Tax / PAN agencies"]
    PASS["Passport Seva / MEA"]
    CPGRAMS["Central grievance systems / ministry escalation"]
  end

  CIT -->|Local civic issues| CORP
  CIT -->|Service complaint directly| WARD
  CIT -->|Crime, harassment, noise| POLST
  CIT -->|Power cuts, bills, wires| DISCOM
  CIT -->|Bus/metro service issues| TRANS
  CIT -->|Ration / PDS / card issues| FOOD
  CIT -->|Pension / welfare issues| WELF
  CIT -->|State hospital / ambulance issues| SHOSP
  CIT -->|Railway issues| RAIL
  CIT -->|National highway issues| NHAI
  CIT -->|Aadhaar issues| UID
  CIT -->|PAN issues| PAN
  CIT -->|Passport issues| PASS
  CIT -->|Flood relief / land acquisition / district-wide scheme issues| COL

  CORP -->|If local issue unresolved| WARD
  WARD -->|If ward-level complaint unresolved| ZONAL
  ZONAL -->|If cross-ward / persistent| COMM
  CORP -->|Political city-wide escalation| MAYOR
  CORP -->|Needs state funding/policy| MLA
  COMM -->|Needs state coordination| MLA

  POLST -->|If station does not cooperate| ACP
  ACP -->|If unresolved / serious pattern| CP
  CP -->|If broader state-level pressure needed| MLA

  DISCOM -->|If unresolved| CGRF
  CGRF -->|If systemic local issue| MLA

  TRANS -->|If repeated route/service problem| MLA
  FOOD -->|If unresolved / corruption / mass issue| COL
  FOOD -->|Political escalation| MLA
  WELF -->|If unresolved / mass delay| COL
  WELF -->|Political escalation| MLA
  SHOSP -->|If major recurring issue| MLA

  MLA -->|District coordination / implementation issue| COL
  MP -->|MPLADS recommendation sent to| COL

  RAIL -->|If unresolved / major safety issue| MP
  NHAI -->|If unresolved / major infrastructure issue| MP
  UID -->|If unresolved grievance| CPGRAMS
  PAN -->|If unresolved grievance| CPGRAMS
  PASS -->|If unresolved grievance| CPGRAMS
  CPGRAMS -->|Political escalation / ministry follow-up| MP
`;

const MermaidPage = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900">
        Governance escalation map
      </h1>
      <p className="text-sm text-slate-700">
        This page renders a Mermaid diagram showing issue domains and escalation
        paths across municipal, district, state, and central actors.
      </p>
      <MermaidRenderer chart={chart} />
    </div>
  );
};

export default MermaidPage;
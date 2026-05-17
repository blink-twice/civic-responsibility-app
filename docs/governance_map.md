flowchart TB

  %% =========================
  %% Citizen
  %% =========================
  CIT[Citizen / Resident / Small business]

  %% =========================
  %% MUNICIPAL
  %% =========================
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

  %% =========================
  %% DISTRICT
  %% =========================
  subgraph DIST["District Administration"]
    direction TB

    COL["District Collector / District Magistrate
    Domains: disaster relief, land acquisition, district coordination,
    revenue, implementation of major schemes, elections"]

    LAO["Land Acquisition / Revenue Officers
    Domains: compensation, records, acquisition, rehabilitation"]
  end

  %% =========================
  %% STATE POLITICAL
  %% =========================
  subgraph STATEPOL["State political layer"]
    direction TB

    MLA["MLA
    Domains: state departments, large infrastructure, hospitals,
    schools, welfare, policy escalation"]

    MLC["MLC (where applicable)
    Domains: state legislative review, broader policy influence"]
  end

  %% =========================
  %% STATE ADMIN / AGENCIES
  %% =========================
  subgraph STATEADM["State agencies and departments"]
    direction TB

    POLST["Police Station / Police Inspector
    Domains: FIRs, crime, harassment, noise, local law & order"]

    ACP["ACP / DCP / Police hierarchy
    Domains: escalation of station-level non-response,
    zonal supervision"]

    CP["Commissioner of Police
    Domains: city-wide policing, serious escalation"]

    DISCOM["Electricity DISCOM / Complaint Centre
    Domains: power cuts, billing, meters, dangerous wires"]

    CGRF["Electricity Grievance Forum / Ombudsman
    Domains: unresolved electricity complaints"]

    TRANS["Bus / Metro / State Transport Undertakings
    Domains: routes, frequency, service gaps, metro access"]

    FOOD["Food & Civil Supplies / Ration Office
    Domains: ration cards, PDS shortages, dealer complaints"]

    WELF["State Welfare / Social Justice Office
    Domains: pensions, welfare delays, beneficiary issues"]

    SHOSP["State Hospital / Superintendent / Health Dept
    Domains: state hospitals, ambulances, denial of treatment"]
  end

  %% =========================
  %% CENTRAL POLITICAL
  %% =========================
  subgraph CENTPOL["Central political layer"]
    direction TB

    MP["Member of Parliament (MP)
    Domains: Railways, national highways, central ministries,
    MPLADS recommendations, national escalation"]
  end

  %% =========================
  %% CENTRAL AGENCIES
  %% =========================
  subgraph CENTADM["Central agencies"]
    direction TB

    RAIL["Indian Railways
    Domains: stations, suburban rail infrastructure, rail safety"]

    NHAI["NHAI / National Highways
    Domains: national highways, flyovers on NH stretches"]

    UID["UIDAI
    Domains: Aadhaar enrolment / correction / updates"]

    PAN["Income Tax / PAN agencies
    Domains: PAN issues, linked details"]

    PASS["Passport Seva / MEA
    Domains: passport application, delays, police verification"]

    CPGRAMS["Central grievance systems / ministry escalation
    Domains: unresolved central service complaints"]
  end

  %% =========================
  %% STARTING ROUTES FROM CITIZEN
  %% =========================
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

  %% =========================
  %% MUNICIPAL ESCALATION
  %% =========================
  CORP -->|If local issue unresolved| WARD
  WARD -->|If ward-level complaint unresolved| ZONAL
  ZONAL -->|If cross-ward / persistent| COMM
  CORP -->|Political city-wide escalation| MAYOR
  MAYOR -->|Administrative follow-up| COMM
  CORP -->|If problem needs state funding/policy| MLA
  COMM -->|If issue needs state coordination| MLA

  %% =========================
  %% POLICE ESCALATION
  %% =========================
  POLST -->|If station does not cooperate| ACP
  ACP -->|If unresolved / serious pattern| CP
  CP -->|If broader state-level issue or political pressure needed| MLA

  %% =========================
  %% ELECTRICITY ESCALATION
  %% =========================
  DISCOM -->|If unresolved billing / outage issue| CGRF
  CGRF -->|If systemic local issue / political pressure needed| MLA

  %% =========================
  %% TRANSPORT / WELFARE / HEALTH ESCALATION
  %% =========================
  TRANS -->|If repeated route/service problem| MLA
  FOOD -->|If unresolved / corruption / systemic issue| COL
  FOOD -->|Political escalation| MLA
  WELF -->|If unresolved / mass delay| COL
  WELF -->|Political escalation| MLA
  SHOSP -->|If major recurring issue| MLA

  %% =========================
  %% DISTRICT ESCALATION
  %% =========================
  COL -->|Land, compensation, records| LAO
  LAO -->|Administrative escalation back to| COL
  MLA -->|District coordination / implementation issue| COL
  MP -->|MPLADS recommendation sent to| COL

  %% =========================
  %% CENTRAL ESCALATION
  %% =========================
  RAIL -->|If unresolved / major safety issue| MP
  NHAI -->|If unresolved / major infrastructure issue| MP
  UID -->|If unresolved grievance| CPGRAMS
  PAN -->|If unresolved grievance| CPGRAMS
  PASS -->|If unresolved grievance| CPGRAMS
  CPGRAMS -->|Political escalation / ministry follow-up| MP

  %% =========================
  %% POLITICAL BRIDGES
  %% =========================
  MLA -->|State-level escalation / legislation| MLC
  MP -->|Central ministries / Parliament| CPGRAMS

  %% =========================
  %% STYLES
  %% =========================
  classDef elected fill:#fff3cd,stroke:#d97706,stroke-width:1px,color:#111827;
  classDef admin fill:#dbeafe,stroke:#2563eb,stroke-width:1px,color:#111827;
  classDef agency fill:#ecfeff,stroke:#0891b2,stroke-width:1px,color:#111827;
  classDef citizen fill:#dcfce7,stroke:#16a34a,stroke-width:1px,color:#111827;

  class CIT citizen;
  class CORP,MLA,MLC,MP,MAYOR elected;
  class WARD,ZONAL,COMM,COL,LAO,ACP,CP admin;
  class POLST,DISCOM,CGRF,TRANS,FOOD,WELF,SHOSP,RAIL,NHAI,UID,PAN,PASS,CPGRAMS agency;
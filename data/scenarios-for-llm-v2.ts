// data/scenarios.ts

export type Scenario = {
  id: string;
  city: "Mumbai";
  category: string;
  subcategory: string;
  scenarioText: string;
  primaryAuthority: string;
  secondaryAuthority: string;
  explanation: string;
  actionLinks: { label: string; url: string }[];
};

export const scenarios: Scenario[] = [
  {
    id: "mumbai-garbage-1",
    city: "Mumbai",
    category: "Waste & Cleanliness",
    subcategory: "Garbage not collected for 3 days",
    scenarioText:
      "Garbage in your lane in Mumbai has not been collected for the last 3 days, and piles are forming near your building entrance.",
    primaryAuthority: "Ward corporator and ward office (solid waste department)",
    secondaryAuthority:
      "Assistant Municipal Commissioner / Ward Officer → Deputy Municipal Commissioner (Solid Waste) → Municipal Commissioner; MLA if it affects multiple wards or needs higher-level intervention",
    explanation:
      "Solid waste collection, street sweeping and local cleanliness are core municipal corporation functions handled at ward level in Mumbai. The ward corporator is your elected representative for local issues and can push the ward office and solid waste department to act.",
    actionLinks: [
      {
        label: "Lodge a BMC civic complaint (online portal)",
        url: "https://portal.mcgm.gov.in/irj/portal/anonymous/qlcomplaintreg"
      },
      {
        label: "Call BMC 1916 civic complaint helpline",
        url: "tel:1916"
      }
    ]
  },
  {
    id: "mumbai-potholes-1",
    city: "Mumbai",
    category: "Roads & Footpaths",
    subcategory: "Potholes on local internal road",
    scenarioText:
      "The internal road inside your neighbourhood has developed multiple potholes, making it difficult for vehicles and pedestrians to move safely.",
    primaryAuthority: "Ward corporator and ward roads engineer",
    secondaryAuthority:
      "Assistant Municipal Commissioner / Ward Officer → Chief Engineer (Roads) → Municipal Commissioner; MLA for larger funding or policy issues on major roads",
    explanation:
      "Construction and maintenance of most city roads and footpaths are municipal corporation responsibilities. Local internal roads are typically planned and prioritised through the corporator and ward committees, and executed by ward and zonal engineers.",
    actionLinks: [
      {
        label: "Register a road/pothole complaint on BMC portal",
        url: "https://portal.mcgm.gov.in/irj/portal/anonymous/qlcomplaintreg"
      }
    ]
  },
  {
    id: "mumbai-streetlight-1",
    city: "Mumbai",
    category: "Streetlights",
    subcategory: "Streetlights not working on lane",
    scenarioText:
      "Several streetlights on your lane have been off for more than a week, making the area dark and unsafe at night.",
    primaryAuthority: "Ward corporator and ward electrical department",
    secondaryAuthority:
      "Assistant Municipal Commissioner / Ward Officer → Electrical Engineer / Chief Engineer (Electric) → Municipal Commissioner; MLA if it is a recurring issue across multiple wards",
    explanation:
      "Installation and maintenance of streetlights on municipal roads are handled by the municipal corporation’s electrical department. The corporator can escalate non-responsive officials within the ward and relevant engineering departments.",
    actionLinks: [
      {
        label: "Lodge a streetlight complaint on BMC portal",
        url: "https://portal.mcgm.gov.in/irj/portal/anonymous/qlcomplaintreg"
      }
    ]
  },
  {
    id: "mumbai-water-1",
    city: "Mumbai",
    category: "Water Supply",
    subcategory: "Irregular municipal water supply",
    scenarioText:
      "Your building’s municipal water supply has become irregular, with water coming only once in two days and at very low pressure.",
    primaryAuthority: "Ward corporator and ward water works engineer",
    secondaryAuthority:
      "Assistant Municipal Commissioner / Ward Officer → Hydraulic Engineer / Deputy Municipal Commissioner (Water) → Municipal Commissioner; MLA if the root cause is a state-level bulk water project or inter-city supply issue",
    explanation:
      "Within city limits, distribution of treated water through pipelines is largely the municipal corporation’s responsibility. Ward-level water works staff handle leaks, local pressure or timing issues, while bulk supply projects and dams are under state government agencies.",
    actionLinks: [
      {
        label: "Register water supply complaint (BMC portal)",
        url: "https://portal.mcgm.gov.in/irj/portal/anonymous/qlcomplaintreg"
      }
    ]
  },
  {
    id: "mumbai-drainage-1",
    city: "Mumbai",
    category: "Drains & Flooding",
    subcategory: "Choked drains causing waterlogging",
    scenarioText:
      "During moderate rain, your street gets waterlogged because the roadside storm-water drains are choked with silt and garbage.",
    primaryAuthority: "Ward corporator and storm-water drain department at ward level",
    secondaryAuthority:
      "Assistant Municipal Commissioner / Ward Officer → Deputy Municipal Commissioner (Storm Water Drains) → Municipal Commissioner; MLA for larger flood-mitigation projects",
    explanation:
      "Maintenance and desilting of local drains and storm-water channels in the city are municipal responsibilities. Ward-level engineering and storm-water departments handle routine desilting and minor works, while larger pumping stations and macro-drain projects involve higher-level planning.",
    actionLinks: [
      {
        label: "Complain about drains / waterlogging (BMC portal)",
        url: "https://portal.mcgm.gov.in/irj/portal/anonymous/qlcomplaintreg"
      }
    ]
  },
  {
    id: "mumbai-park-1",
    city: "Mumbai",
    category: "Parks & Public Spaces",
    subcategory: "Neighbourhood park poorly maintained",
    scenarioText:
      "The small municipal garden in your area has broken benches, overgrown grass and non-functional play equipment for children.",
    primaryAuthority: "Ward corporator and garden/parks department",
    secondaryAuthority:
      "Assistant Municipal Commissioner / Ward Officer → Deputy Municipal Commissioner (Gardens) → Municipal Commissioner; MLA if major redevelopment or new park is needed",
    explanation:
      "Maintenance of municipal gardens, playgrounds and local public spaces is handled by the corporation’s gardens/parks department. Corporators can raise issues in ward committees and push for repairs, staffing and budget allocation for local parks.",
    actionLinks: [
      {
        label: "Complain about garden/park maintenance (BMC portal)",
        url: "https://portal.mcgm.gov.in/irj/portal/anonymous/qlcomplaintreg"
      }
    ]
  },
  {
    id: "mumbai-public-health-1",
    city: "Mumbai",
    category: "Public Health",
    subcategory: "Overflowing public dustbin with rodents",
    scenarioText:
      "A public dustbin near a busy bus stop is overflowing with garbage and has become a source of foul smell and rodents.",
    primaryAuthority: "Ward corporator and solid waste / public health department",
    secondaryAuthority:
      "Assistant Municipal Commissioner / Ward Officer → Medical Officer of Health / Deputy Municipal Commissioner (Solid Waste) → Municipal Commissioner",
    explanation:
      "Municipal bodies are responsible for maintaining public hygiene through garbage collection, pest control and public health measures. Ward officials and the Medical Officer of Health can address overflowing bins and rodent infestation as part of their sanitation mandate.",
    actionLinks: [
      {
        label: "Report overflowing dustbin / pests (BMC portal)",
        url: "https://portal.mcgm.gov.in/irj/portal/anonymous/qlcomplaintreg"
      }
    ]
  },
  {
    id: "mumbai-building-permissions-1",
    city: "Mumbai",
    category: "Buildings & Permissions",
    subcategory: "Unauthorised construction on neighbour’s building",
    scenarioText:
      "Your neighbour has started constructing an extra floor on their building without visible permissions, raising safety concerns.",
    primaryAuthority: "Ward building and permissions department; inform ward corporator",
    secondaryAuthority:
      "Assistant Municipal Commissioner / Ward Officer → Designated Officer / Deputy Municipal Commissioner (Building Proposals) → Municipal Commissioner; MLA if large-scale pattern of violations in area",
    explanation:
      "Sanctioning of building plans and action against unauthorised constructions are municipal functions performed by building proposal and enforcement departments. Citizens can complain to ward-level building officials, while corporators can support follow‑up and transparency.",
    actionLinks: [
      {
        label: "Lodge building / illegal construction complaint (BMC portal)",
        url: "https://portal.mcgm.gov.in/irj/portal/anonymous/qlcomplaintreg"
      }
    ]
  },
  {
    id: "mumbai-schools-1",
    city: "Mumbai",
    category: "Education",
    subcategory: "Poor condition in municipal school",
    scenarioText:
      "A nearby municipal school has broken toilets and leaking roofs, affecting children’s safety and attendance.",
    primaryAuthority: "Ward corporator and municipal education department",
    secondaryAuthority:
      "Assistant Municipal Commissioner / Ward Officer → Education Officer / Deputy Municipal Commissioner (Education) → Municipal Commissioner; MLA for additional state funding or new school buildings",
    explanation:
      "Municipal corporations run primary schools and are responsible for basic infrastructure, sanitation and maintenance. Councillors and education officials can raise and address issues in municipal schools, while MLAs influence broader state education policy and funding.",
    actionLinks: [
      {
        label: "Contact municipal education department (BMC site)",
        url: "https://portal.mcgm.gov.in"
      }
    ]
  },
  {
    id: "mumbai-primary-health-1",
    city: "Mumbai",
    category: "Health Facilities",
    subcategory: "Non-functional municipal dispensary",
    scenarioText:
      "The municipal dispensary in your area often remains closed during working hours, and essential medicines are frequently unavailable.",
    primaryAuthority: "Ward corporator and municipal health department",
    secondaryAuthority:
      "Assistant Municipal Commissioner / Ward Officer → Medical Officer of Health / Deputy Municipal Commissioner (Health) → Municipal Commissioner; MLA for higher-level health infrastructure issues",
    explanation:
      "Urban local bodies manage primary health centres, dispensaries and some hospitals as part of their public health responsibilities. Ward-level health officials and corporators can push for staffing, timings and essential supplies.",
    actionLinks: [
      {
        label: "Find contact details of local ward office / health dept (BMC site)",
        url: "https://portal.mcgm.gov.in"
      }
    ]
  },
  // ==============================
// Non-municipal: Law & Order & Safety
// ==============================

{
  id: "mumbai-police-1",
  city: "Mumbai",
  category: "Law & Order & Safety",
  subcategory: "Street harassment near railway station",
  scenarioText:
    "You face regular harassment and catcalling while walking near the entrance of a suburban railway station in the evening.",
  primaryAuthority: "Local police station (police inspector) / women’s safety cell",
  secondaryAuthority:
    "Assistant Commissioner of Police / Deputy Commissioner of Police → Commissioner of Police; MLA if it is a chronic safety issue ignored by police",
  explanation:
    "Law and order, including harassment and safety in public spaces, is handled by the state police, not the municipal corporation. You should file a complaint or FIR at the local police station or use women’s helplines, and escalate within the police hierarchy if there is no action.",
  actionLinks: [
    {
      label: "State police online complaint / e-FIR portal",
      url: "https://example.com/police-complaint"
    },
    {
      label: "Women’s safety helpline",
      url: "tel:181"
    }
  ]
},
{
  id: "mumbai-police-2",
  city: "Mumbai",
  category: "Law & Order & Safety",
  subcategory: "House break-in / theft",
  scenarioText:
    "Your apartment was broken into while you were away, and valuables were stolen.",
  primaryAuthority: "Local police station (crime branch / investigation officer)",
  secondaryAuthority:
    "Assistant Commissioner of Police → Deputy Commissioner of Police → Commissioner of Police; MLA for escalation in case of repeated unsolved thefts in the area",
  explanation:
    "Crimes like theft and house break-ins are investigated by the state police. The first step is to register an FIR at the jurisdictional police station, after which you can escalate to senior officers if the case is not being taken seriously.",
  actionLinks: [
    {
      label: "Find your local police station contact",
      url: "https://example.com/police-station-locator"
    }
  ]
},
{
  id: "mumbai-police-3",
  city: "Mumbai",
  category: "Law & Order & Safety",
  subcategory: "Loud music and noise at night",
  scenarioText:
    "A bar or party venue near your home plays very loud music late into the night, disturbing nearby residents.",
  primaryAuthority: "Local police station (for noise enforcement) and licensing authorities",
  secondaryAuthority:
    "Assistant Commissioner of Police / Deputy Commissioner of Police; MLA for persistent violations despite repeated complaints",
  explanation:
    "Enforcement of noise limits, especially at night, is generally done by the police and licensing authorities rather than the municipal corporation. You can call the local police station or police control room to complain about repeated late-night noise.",
  actionLinks: [
    {
      label: "Police control room number",
      url: "tel:100"
    }
  ]
},

// ==============================
// Non-municipal: Electricity & Power
// ==============================

{
  id: "mumbai-power-1",
  city: "Mumbai",
  category: "Electricity & Power",
  subcategory: "Frequent low voltage and power cuts",
  scenarioText:
    "In your locality, voltage frequently dips and there are several short power cuts every day, damaging appliances.",
  primaryAuthority: "Local electricity distribution company (DISCOM) complaint centre / section office",
  secondaryAuthority:
    "Circle / zone office of DISCOM → Consumer Grievance Redressal Forum → State Electricity Regulatory Commission; MLA for chronic feeder or transformer issues affecting many consumers",
  explanation:
    "Electricity distribution and billing are handled by licensed power distribution companies regulated by the state electricity regulator, not the municipal corporation. Local faults and voltage problems should first be reported to the DISCOM’s complaint centre.",
  actionLinks: [
    {
      label: "DISCOM online complaint portal",
      url: "https://example.com/power-complaint"
    },
    {
      label: "Information on Electricity Consumer Grievance Forums",
      url: "https://example.com/power-grievance"
    }
  ]
},
{
  id: "mumbai-power-2",
  city: "Mumbai",
  category: "Electricity & Power",
  subcategory: "Dangling / exposed live wires",
  scenarioText:
    "There are dangling or exposed electricity wires near your building that look dangerous, especially during rain.",
  primaryAuthority: "Local electricity distribution company (line staff / section office)",
  secondaryAuthority:
    "Senior engineers in DISCOM → State electrical inspector; MLA for escalation if DISCOM repeatedly ignores safety hazards",
  explanation:
    "Maintenance of distribution lines, poles and service connections is the responsibility of the electricity distribution company. Dangerous exposed wires should be reported immediately so DISCOM can send technical staff to secure or replace them.",
  actionLinks: [
    {
      label: "Emergency electricity helpline / fault reporting",
      url: "https://example.com/power-emergency"
    }
  ]
},
{
  id: "mumbai-power-3",
  city: "Mumbai",
  category: "Electricity & Power",
  subcategory: "Disputed high electricity bill",
  scenarioText:
    "You receive an electricity bill that is several times higher than usual, even though your usage has not changed.",
  primaryAuthority: "Electricity distribution company billing / customer care office",
  secondaryAuthority:
    "Consumer Grievance Redressal Forum → Ombudsman or State Electricity Regulatory Commission; District consumer court as a last resort",
  explanation:
    "Incorrect electricity bills and meter disputes are handled through the DISCOM’s grievance mechanisms and regulatory forums. You should first seek bill verification and meter testing from the company, and escalate to the Consumer Grievance Redressal Forum if the issue is not resolved.",
  actionLinks: [
    {
      label: "DISCOM billing complaint form",
      url: "https://example.com/power-billing"
    }
  ]
},

// ==============================
// Non-municipal: Public Transport & Railways
// ==============================

{
  id: "mumbai-transport-1",
  city: "Mumbai",
  category: "Public Transport & Railways",
  subcategory: "Unsafe overcrowding at suburban railway station",
  scenarioText:
    "The platforms and foot overbridges at your regular suburban railway station are extremely overcrowded and feel unsafe during rush hour.",
  primaryAuthority:
    "Indian Railways / suburban railway division (station manager / divisional railway manager)",
  secondaryAuthority:
    "Zonal Railway headquarters → Ministry of Railways; MP for raising issues with Railways and in Parliament",
  explanation:
    "Suburban and long-distance railway stations are managed by Indian Railways, a central government entity. While the municipal corporation can improve access roads or lighting outside, crowd management, platform design and station safety are handled by the railways.",
  actionLinks: [
    {
      label: "Railway grievance portal / feedback",
      url: "https://example.com/railway-grievance"
    }
  ]
},
{
  id: "mumbai-transport-2",
  city: "Mumbai",
  category: "Public Transport & Railways",
  subcategory: "Bus route withdrawn or reduced",
  scenarioText:
    "A city bus route that many people in your area relied on has been withdrawn or the frequency cut sharply, making commuting difficult.",
  primaryAuthority: "City / state transport undertaking (BEST or equivalent) planning department",
  secondaryAuthority:
    "Regional transport authority → State transport department; MLA for raising route and service issues affecting large numbers of commuters",
  explanation:
    "City bus services are usually operated by a state or city transport undertaking rather than the municipal corporation. Decisions about routes and frequency are taken by these transport agencies, with political oversight from MLAs and the state government.",
  actionLinks: [
    {
      label: "Bus operator suggestion / complaint form",
      url: "https://example.com/bus-feedback"
    }
  ]
},
{
  id: "mumbai-transport-3",
  city: "Mumbai",
  category: "Public Transport & Railways",
  subcategory: "Metro station access and last-mile issues",
  scenarioText:
    "A new metro line has opened, but access to your nearest station is poor and there is no safe last-mile connection from your neighbourhood.",
  primaryAuthority:
    "Metro rail corporation / development authority responsible for the line",
  secondaryAuthority:
    "State urban development / transport departments; MLA for pushing better last-mile arrangements and integration with buses or autos",
  explanation:
    "Metro rail systems and major urban transport projects are typically implemented by specialised state or regional authorities, not by the municipal corporation alone. They are responsible for station design, access points and integration with other modes.",
  actionLinks: [
    {
      label: "Metro operator feedback / complaint page",
      url: "https://example.com/metro-feedback"
    }
  ]
},

// ==============================
// Non-municipal: Ration & Welfare Schemes
// ==============================

{
  id: "mumbai-ration-1",
  city: "Mumbai",
  category: "Ration & Welfare Schemes",
  subcategory: "Ration shop not giving full entitlement",
  scenarioText:
    "Your ration shop frequently gives you less grain than what is written on your ration card entitlement, or claims that stock has not arrived.",
  primaryAuthority:
    "Fair Price Shop (ration shop) dealer and local food & civil supplies inspector",
  secondaryAuthority:
    "District supply officer → State Department of Food & Civil Supplies; MLA for escalation about corruption or systemic diversion of PDS grain",
  explanation:
    "Public Distribution System (PDS) ration shops and foodgrain entitlements are overseen by the state food and civil supplies department. Complaints about under-supply or cheating should be made to the local supply office and state helplines.",
  actionLinks: [
    {
      label: "State PDS / ration grievance helpline or portal",
      url: "https://example.com/ration-complaint"
    }
  ]
},
{
  id: "mumbai-ration-2",
  city: "Mumbai",
  category: "Ration & Welfare Schemes",
  subcategory: "New ration card / name correction stuck",
  scenarioText:
    "Your application for a new ration card or correction of family details has been pending for many months without clear updates.",
  primaryAuthority: "Local rationing office / food & civil supplies office",
  secondaryAuthority:
    "District supply officer → State food & civil supplies department; MLA for follow-up on delayed applications affecting many residents",
  explanation:
    "Issuance and updating of ration cards is handled by state food and civil supplies offices. Persistent delays can be escalated within the department or taken up by your MLA with the responsible officials.",
  actionLinks: [
    {
      label: "Track ration card application / file grievance",
      url: "https://example.com/ration-tracking"
    }
  ]
},
{
  id: "mumbai-welfare-1",
  city: "Mumbai",
  category: "Ration & Welfare Schemes",
  subcategory: "Old age pension not credited",
  scenarioText:
    "You or a family member has been sanctioned an old age pension, but the monthly amount has not been credited for several months.",
  primaryAuthority: "Local social welfare office / state social justice department",
  secondaryAuthority:
    "District social welfare officer → State social justice / welfare department; MLA for highlighting delayed payments affecting many beneficiaries",
  explanation:
    "Many pensions and welfare schemes, including social security pensions, are implemented by state welfare departments. Non-payment of an approved pension should be taken up with the local welfare office and, if needed, escalated to higher levels.",
  actionLinks: [
    {
      label: "State social welfare grievance portal",
      url: "https://example.com/welfare-complaint"
    }
  ]
},

// ==============================
// Non-municipal: State Hospitals & Health Services
// ==============================

{
  id: "mumbai-state-health-1",
  city: "Mumbai",
  category: "State Hospitals & Health Services",
  subcategory: "Poor conditions in state-run hospital",
  scenarioText:
    "A district or state-run hospital near you has overcrowded wards, broken toilets and unhygienic conditions that put patients at risk.",
  primaryAuthority:
    "Hospital superintendent / medical superintendent of the state-run hospital",
  secondaryAuthority:
    "District health officer / civil surgeon → State health department; MLA for raising hospital conditions in the state assembly",
  explanation:
    "Large hospitals and medical colleges are usually run by the state health department rather than the municipal corporation. Complaints about conditions and staffing should be addressed to hospital management and state health authorities.",
  actionLinks: [
    {
      label: "State health department feedback / complaint page",
      url: "https://example.com/state-health-complaint"
    }
  ]
},
{
  id: "mumbai-state-health-2",
  city: "Mumbai",
  category: "State Hospitals & Health Services",
  subcategory: "Ambulance / emergency response failure",
  scenarioText:
    "You called the government ambulance number during a medical emergency, but the ambulance took a very long time to arrive or did not come at all.",
  primaryAuthority:
    "State emergency medical response service / ambulance control room",
  secondaryAuthority:
    "District health officer / state health department; MLA for repeated systemic failures in emergency response",
  explanation:
    "Many states operate centralised ambulance services and emergency response systems through the health department or contracted operators. Persistent failures in response should be reported to the service and escalated to health authorities.",
  actionLinks: [
    {
      label: "State ambulance helpline (e.g., 108)",
      url: "tel:108"
    }
  ]
},
{
  id: "mumbai-state-health-3",
  city: "Mumbai",
  category: "State Hospitals & Health Services",
  subcategory: "Refusal of treatment in government hospital",
  scenarioText:
    "A government hospital refuses to admit or treat a serious case without clear reason, even when it is the appropriate facility.",
  primaryAuthority:
    "Hospital superintendent / nodal officer for patient grievances",
  secondaryAuthority:
    "District health officer / state health department; State and national health grievance portals",
  explanation:
    "Government hospitals are expected to provide treatment according to set protocols and policies. Unjustified denial of treatment can be challenged through hospital-level grievance mechanisms and escalated to the health department.",
  actionLinks: [
    {
      label: "Hospital grievance / complaint cell details",
      url: "https://example.com/hospital-grievance"
    }
  ]
},

// ==============================
// Non-municipal: Central Documents & IDs
// ==============================

{
  id: "mumbai-id-1",
  city: "Mumbai",
  category: "Central Documents & IDs",
  subcategory: "Aadhaar update or correction issues",
  scenarioText:
    "Your Aadhaar details (name, address or date of birth) are incorrect, and repeated attempts to update them at enrolment centres are failing.",
  primaryAuthority:
    "UIDAI authorised Aadhaar enrolment/update centre / UIDAI grievance channels",
  secondaryAuthority:
    "UIDAI regional office; MP for exceptional cases requiring central ministry intervention",
  explanation:
    "Aadhaar numbers and updates are handled by UIDAI and its network of enrolment centres, not by local bodies or state departments. Complaints should be raised through UIDAI’s official channels.",
  actionLinks: [
    {
      label: "UIDAI Aadhaar update & grievance portal",
      url: "https://example.com/uidai"
    }
  ]
},
{
  id: "mumbai-id-2",
  city: "Mumbai",
  category: "Central Documents & IDs",
  subcategory: "PAN linked to wrong details",
  scenarioText:
    "Your PAN has incorrect details or is linked to wrong contact information, causing problems with bank accounts or tax filings.",
  primaryAuthority:
    "PAN service providers (NSDL / UTIITSL) and Income Tax Department",
  secondaryAuthority:
    "Income Tax Department grievance channels; central government citizen grievance portal (CPGRAMS) for persistent issues",
  explanation:
    "PAN issuance and updates are handled by PAN intermediaries and the Income Tax Department, which are central government bodies. Corrections are made through their official forms and grievance channels.",
  actionLinks: [
    {
      label: "PAN correction / reprint portal",
      url: "https://example.com/pan-correction"
    }
  ]
},
{
  id: "mumbai-id-3",
  city: "Mumbai",
  category: "Central Documents & IDs",
  subcategory: "Passport delay due to police verification",
  scenarioText:
    "Your passport application has been stuck for months because police verification has not been completed.",
  primaryAuthority:
    "Passport Seva Kendra / Regional Passport Office and local police verification unit",
  secondaryAuthority:
    "Ministry of External Affairs grievance channels; MP for exceptional delays or systemic issues",
  explanation:
    "Passports are issued by the Ministry of External Affairs through Passport Seva Kendras and regional offices, with local police verification as part of the process. Follow-up is needed both with the passport office and the local police unit handling verification.",
  actionLinks: [
    {
      label: "Passport Seva application & grievance portal",
      url: "https://example.com/passport-seva"
    }
  ]
},
  // ==============================
  // District Administration & Constituency Development
  // ==============================

  {
    id: "mumbai-collector-1",
    city: "Mumbai",
    category: "District Administration & Constituency Development",
    subcategory: "Flood relief and compensation after major rains",
    scenarioText:
      "After unusually heavy rains, many homes and small shops in your area have been damaged by flooding. Relief camps were opened but compensation and assistance are uneven and some affected families have been left out.",
    primaryAuthority:
      "District Collector / District Magistrate (head of district administration)",
    secondaryAuthority:
      "State Relief and Rehabilitation Department; local MLAs and MPs for highlighting gaps in relief coverage and pressing for additional assistance",
    explanation:
      "The District Collector or District Magistrate is the chief administrator for the district, responsible for coordinating disaster management, relief and rehabilitation after floods, building collapses or other major incidents. While municipal bodies handle local drains and infrastructure, the Collector oversees district-wide relief and compensation for affected citizens.",
    actionLinks: [
      {
        label: "District Collector office contact / grievance page",
        url: "https://example.com/district-collector-contact"
      },
      {
        label: "State disaster relief / flood assistance information",
        url: "https://example.com/state-disaster-relief"
      }
    ]
  },
  {
    id: "mumbai-collector-2",
    city: "Mumbai",
    category: "District Administration & Constituency Development",
    subcategory: "Land acquisition for metro / highway project",
    scenarioText:
      "A new metro line or highway project requires acquisition of land and buildings in your neighbourhood, and residents are worried about compensation, rehabilitation and transparency in the process.",
    primaryAuthority: "District Collector / Land Acquisition Officer for the project",
    secondaryAuthority:
      "State urban development / infrastructure department; local MLA and MP for raising systematic issues around compensation and rehabilitation",
    explanation:
      "Under land acquisition laws, the District Collector or designated Land Acquisition Officer plays a central role in notifying land, determining compensation and managing rehabilitation. Municipal councils may be consulted on planning, but the formal acquisition and compensation process is run through the district administration under state law.",
    actionLinks: [
      {
        label: "Project land acquisition / rehabilitation information",
        url: "https://example.com/land-acquisition-info"
      },
      {
        label: "District administration grievance contact",
        url: "https://example.com/district-land-grievance"
      }
    ]
  },
  {
    id: "mumbai-mp-1",
    city: "Mumbai",
    category: "District Administration & Constituency Development",
    subcategory: "Request MPLADS funds for a local community asset",
    scenarioText:
      "Your neighbourhood wants to develop a durable community asset such as an extra classroom for a government school, a small community hall, or improvements to a public health centre.",
    primaryAuthority:
      "Local Member of Parliament (MP) to recommend work under MPLADS; District Collector as district authority to sanction and execute",
    secondaryAuthority:
      "Ministry of Statistics and Programme Implementation (which oversees MPLADS) for policy issues or serious misuse; local MLA for parallel support under state schemes",
    explanation:
      "Under the Members of Parliament Local Area Development Scheme (MPLADS), each MP can recommend locally felt development works in their constituency, such as school rooms, community halls and basic infrastructure. The recommended works are sanctioned and implemented by the District Collector or district authority, not by the MP directly.",
    actionLinks: [
      {
        label: "MPLADS official portal and guidelines",
        url: "https://mplads.mospi.gov.in"
      },
      {
        label: "District MPLADS / Collector contact details",
        url: "https://example.com/mplads-district-contact"
      }
    ]
  },
  {
    id: "mumbai-mp-2",
    city: "Mumbai",
    category: "District Administration & Constituency Development",
    subcategory: "Persistent issues with central agencies (railways / national highway)",
    scenarioText:
      "For several years, residents have raised safety and access issues at a busy suburban railway station and on a nearby national highway stretch, but responses from officials have been slow and fragmented.",
    primaryAuthority:
      "Indian Railways / National Highways Authority of India (NHAI) or relevant central agency office",
    secondaryAuthority:
      "Local Member of Parliament (MP) to raise the issue with the concerned ministry or in Parliament; District Collector for district-level coordination on land and safety measures",
    explanation:
      "Railways and national highways are managed by central government agencies. For persistent or large-scale issues that have not been resolved through local officials and grievance portals, MPs can raise questions in Parliament, meet ministers and recommend works. District authorities help coordinate any approved measures on the ground.",
    actionLinks: [
      {
        label: "Central agency grievance portal (Railways / NHAI)",
        url: "https://example.com/central-agency-grievance"
      },
      {
        label: "Contact details for your MP",
        url: "https://example.com/find-your-mp"
      }
    ]
  }
];
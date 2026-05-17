// data/quizQuestions.ts

import type { Scenario } from "./scenarios";

export type QuizQuestion = {
  id: string;
  scenarioId: Scenario["id"];
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    scenarioId: "mumbai-garbage-1",
    question:
      "In Mumbai, who is usually the first authority you should approach if garbage in your lane has not been collected for 3 days?",
    options: [
      "Your MLA",
      "Your ward corporator / ward office",
      "Your MP",
      "The Chief Minister"
    ],
    correctIndex: 1,
    explanation:
      "Local garbage collection and street cleanliness are municipal subjects handled at ward level. Your ward corporator and ward office can directly push the solid waste department to resolve the issue."
  },
  {
    id: "q2",
    scenarioId: "mumbai-potholes-1",
    question:
      "If an internal neighbourhood road has developed dangerous potholes, which combination is most appropriate to start with?",
    options: [
      "Complain only to the traffic police",
      "Write directly to the Municipal Commissioner",
      "Approach the ward corporator and ward roads engineer",
      "File a case in court as the first step"
    ],
    correctIndex: 2,
    explanation:
      "Construction and maintenance of most city roads are handled by the municipal corporation’s engineering departments. The corporator works with ward and zonal engineers to prioritise and execute such repairs."
  },
  {
    id: "q3",
    scenarioId: "mumbai-streetlight-1",
    question:
      "Several streetlights on your lane are not working. Which authority is directly responsible for getting them repaired?",
    options: [
      "The local police station",
      "The municipal streetlighting / electrical department via ward office",
      "The electricity distribution company only",
      "The District Collector"
    ],
    correctIndex: 1,
    explanation:
      "Streetlights on municipal roads are generally installed and maintained by the municipal corporation’s electrical department, coordinated through ward offices and engineering sections."
  },
  {
    id: "q4",
    scenarioId: "mumbai-water-1",
    question:
      "Your building’s municipal water supply has become irregular and low‑pressure. Where should you normally raise this first?",
    options: [
      "Directly with the state water resources minister",
      "With the ward corporator and ward water works engineer",
      "Only with your housing society office-bearers",
      "With the local MP"
    ],
    correctIndex: 1,
    explanation:
      "Within the city, distribution of treated water through pipelines is a municipal responsibility. Ward-level water works staff and your corporator are the right starting point for pressure and timing issues."
  },
  {
    id: "q5",
    scenarioId: "mumbai-drainage-1",
    question:
      "Your street gets waterlogged even after moderate rain because roadside drains are choked. Who should you primarily push to act?",
    options: [
      "The State Disaster Management Authority",
      "The ward corporator and storm‑water / drainage department",
      "The Election Commission",
      "The local railway authorities"
    ],
    correctIndex: 1,
    explanation:
      "Routine desilting and maintenance of local storm‑water drains is handled by municipal engineering and drainage departments at ward level, which corporators can strongly influence."
  },
  {
    id: "q6",
    scenarioId: "mumbai-park-1",
    question:
      "A neighbourhood municipal park has broken play equipment and overgrown grass. Which is the most appropriate first escalation?",
    options: [
      "Approach the ward corporator and parks/gardens department",
      "Complain to the Forest Department",
      "Write to your MP about national urban policy",
      "Complain to the local private builder"
    ],
    correctIndex: 0,
    explanation:
      "Maintenance of municipal gardens and playgrounds is part of the city corporation’s mandate. Ward-level parks/gardens staff and corporators are responsible for keeping local parks usable."
  },
  {
    id: "q7",
    scenarioId: "mumbai-building-permissions-1",
    question:
      "You suspect an extra floor is being added illegally on a neighbouring building. Which authority has formal powers to act?",
    options: [
      "Ward building and permissions department of the municipal corporation",
      "Only the local police station",
      "The Resident Welfare Association (RWA) president",
      "The local MLA alone, via letter"
    ],
    correctIndex: 0,
    explanation:
      "Sanctioning building plans and acting against unauthorised constructions fall under municipal building proposals and enforcement departments. Complaints should be made to ward building officials, with corporators helping to follow up."
  },
  {
    id: "q8",
    scenarioId: "mumbai-schools-1",
    question:
      "A nearby municipal primary school has leaking roofs and broken toilets. Which level of government runs such schools in big cities like Mumbai?",
    options: [
      "Municipal corporation education department",
      "Only the central government",
      "Only the state education board",
      "Private companies under CSR"
    ],
    correctIndex: 0,
    explanation:
      "Urban local bodies in large cities often run primary schools and are responsible for building maintenance and basic facilities, alongside state-level roles in curriculum and broader policy."
  },
  {
    id: "q9",
    scenarioId: "mumbai-public-health-1",
    question:
      "An overflowing public dustbin near a bus stop has become a source of foul smell and rodents. Whose job is it to keep such public spaces clean?",
    options: [
      "Only shopkeepers nearby",
      "The municipal corporation’s solid waste and public health departments",
      "The local MLA’s personal staff",
      "The traffic police"
    ],
    correctIndex: 1,
    explanation:
      "Municipal corporations are tasked with garbage collection, sanitation and pest control in public areas, through solid waste and public health departments."
  },
  {
    id: "q10",
    scenarioId: "mumbai-primary-health-1",
    question:
      "A municipal dispensary in your area frequently remains closed during working hours. Which combination is most appropriate to pursue?",
    options: [
      "Ward corporator and municipal health department / Medical Officer of Health",
      "Only the local MP",
      "The District Collector alone",
      "The local police chowki"
    ],
    correctIndex: 0,
    explanation:
      "Primary health centres and dispensaries in cities are usually run by municipal corporations as part of their public health functions. Ward-level health officials and corporators can push for proper staffing and timings."
  },
  // Law & Order & Safety

{
  id: "q-police-1",
  scenarioId: "mumbai-police-1",
  question:
    "If you face regular harassment near a suburban railway station in Mumbai, who should you primarily approach to get it stopped?",
  options: [
    "Ward corporator / municipal office",
    "Local police station or women’s helpline",
    "Electricity distribution company",
    "Railway catering contractor"
  ],
  correctIndex: 1,
  explanation:
    "Harassment and public safety issues are handled by the state police, not the municipal corporation. You should complain to the local police station or use women’s safety channels."
},
{
  id: "q-police-2",
  scenarioId: "mumbai-police-2",
  question:
    "Your apartment has been broken into and valuables stolen. Which authority is responsible for registering and investigating this crime?",
  options: [
    "Municipal commissioner",
    "Local police station",
    "Electricity department",
    "District supply officer"
  ],
  correctIndex: 1,
  explanation:
    "The state police register FIRs and investigate criminal offences such as theft and burglary. Municipal authorities cannot investigate such crimes."
},
{
  id: "q-police-3",
  scenarioId: "mumbai-police-3",
  question:
    "A bar near your house plays loud music late into the night. Who enforces noise rules in such a case?",
  options: [
    "Local police station",
    "Ward corporator only",
    "Rationing office",
    "Metro rail corporation"
  ],
  correctIndex: 0,
  explanation:
    "The police and licensing authorities enforce noise limits and can take action against late-night noise disturbances."
},

// Electricity & Power

{
  id: "q-power-1",
  scenarioId: "mumbai-power-1",
  question:
    "Your area has frequent low voltage and short power cuts. Who is primarily responsible for fixing this?",
  options: [
    "Municipal solid waste department",
    "Local electricity distribution company (DISCOM)",
    "Local police station",
    "Passport office"
  ],
  correctIndex: 1,
  explanation:
    "Electricity distribution is handled by licensed DISCOMs regulated by the state electricity regulator, not the municipal corporation."
},
{
  id: "q-power-2",
  scenarioId: "mumbai-power-2",
  question:
    "You notice dangerous dangling wires near your building. Who should you contact first?",
  options: [
    "Ward corporator",
    "Electricity distribution company fault / emergency line",
    "Local MP",
    "Railway station manager"
  ],
  correctIndex: 1,
  explanation:
    "Repairing and securing live wires is the responsibility of the electricity distribution company’s technical staff."
},
{
  id: "q-power-3",
  scenarioId: "mumbai-power-3",
  question:
    "You receive an electricity bill that is much higher than usual without a change in usage. Where is the most appropriate place to start?",
  options: [
    "File a complaint with the municipal commissioner",
    "Approach the DISCOM billing/customer care office",
    "Complain to the local police station",
    "Go directly to the High Court"
  ],
  correctIndex: 1,
  explanation:
    "Billing disputes and suspected meter faults must first be taken up with the electricity distribution company and its grievance mechanisms."
},

// Public Transport & Railways

{
  id: "q-transport-1",
  scenarioId: "mumbai-transport-1",
  question:
    "Platforms and foot overbridges at your suburban railway station are dangerously overcrowded. Which body manages such stations?",
  options: [
    "Municipal corporation",
    "Indian Railways / suburban railway division",
    "State electricity board",
    "State social welfare department"
  ],
  correctIndex: 1,
  explanation:
    "Suburban railway stations and their infrastructure are managed by Indian Railways, a central government entity."
},
{
  id: "q-transport-2",
  scenarioId: "mumbai-transport-2",
  question:
    "A bus route used by many residents has been withdrawn, making commuting very difficult. Who decides routes and frequency?",
  options: [
    "Municipal councilors in ward committee meetings",
    "City or state transport undertaking (like BEST)",
    "Passport Seva Kendra",
    "UIDAI"
  ],
  correctIndex: 1,
  explanation:
    "Bus routes and schedules are planned by transport undertakings and state transport authorities, not by municipal departments alone."
},
{
  id: "q-transport-3",
  scenarioId: "mumbai-transport-3",
  question:
    "Access to your nearest metro station is poor and there is no safe last-mile connection. Which agency is usually responsible for metro lines and stations?",
  options: [
    "Municipal health department",
    "Metro rail corporation / development authority",
    "Rationing office",
    "Local police beat chowki"
  ],
  correctIndex: 1,
  explanation:
    "Metro lines and stations are typically built and operated by specialised metro corporations or development authorities."
},

// Ration & Welfare Schemes

{
  id: "q-ration-1",
  scenarioId: "mumbai-ration-1",
  question:
    "Your ration shop gives you less grain than what is written on your ration card. Which system are you dealing with?",
  options: [
    "Public Distribution System under the state food & civil supplies department",
    "Municipal solid waste management",
    "Central railway catering",
    "Metro rail corporation"
  ],
  correctIndex: 0,
  explanation:
    "Ration shops and entitlements are part of the state’s Public Distribution System, overseen by food and civil supplies departments."
},
{
  id: "q-ration-2",
  scenarioId: "mumbai-ration-2",
  question:
    "Your ration card application has been pending for months. Whose office should you primarily follow up with?",
  options: [
    "Ward corporator’s office",
    "Local ration / food & civil supplies office",
    "Police commissioner’s office",
    "Income Tax Department"
  ],
  correctIndex: 1,
  explanation:
    "Issuing and updating ration cards is handled by state food and civil supplies offices, not municipal bodies."
},
{
  id: "q-welfare-1",
  scenarioId: "mumbai-welfare-1",
  question:
    "Your approved old age pension has not been credited for several months. Which level of government typically runs such pensions?",
  options: [
    "Municipal corporation only",
    "State social welfare / social justice department",
    "Indian Railways",
    "UIDAI"
  ],
  correctIndex: 1,
  explanation:
    "Many social security pensions are implemented by state welfare departments, not municipal corporations."
},

// State Hospitals & Health Services

{
  id: "q-state-health-1",
  scenarioId: "mumbai-state-health-1",
  question:
    "A large state-run hospital is overcrowded and unhygienic. Who is directly responsible for managing such a hospital?",
  options: [
    "Ward corporator",
    "Hospital superintendent and state health department",
    "Electricity distribution company",
    "Metro rail corporation"
  ],
  correctIndex: 1,
  explanation:
    "District hospitals and many major hospitals are run by the state health department, under a superintendent and senior health officials."
},
{
  id: "q-state-health-2",
  scenarioId: "mumbai-state-health-2",
  question:
    "A government ambulance service takes very long to respond to emergencies. Which authority should you complain to?",
  options: [
    "Municipal parks department",
    "State emergency medical response / health department",
    "Rationing office",
    "Railway station manager"
  ],
  correctIndex: 1,
  explanation:
    "Centralised ambulance services are typically run by or under contract to the state health department, which is responsible for performance."
},
{
  id: "q-state-health-3",
  scenarioId: "mumbai-state-health-3",
  question:
    "A government hospital refuses to admit a serious case without a valid reason. Where should you push first?",
  options: [
    "Building permissions department",
    "Hospital superintendent / grievance cell",
    "Metro rail customer care",
    "Passport office"
  ],
  correctIndex: 1,
  explanation:
    "Government hospitals have internal grievance mechanisms and supervision by superintendents and health departments for issues such as denial of treatment."
},

// Central Documents & IDs

{
  id: "q-id-1",
  scenarioId: "mumbai-id-1",
  question:
    "Your Aadhaar details are wrong and local attempts to update them keep failing. Who actually manages Aadhaar data?",
  options: [
    "Municipal corporation",
    "Unique Identification Authority of India (UIDAI)",
    "State police department",
    "Indian Railways"
  ],
  correctIndex: 1,
  explanation:
    "Aadhaar numbers and updates are handled by UIDAI and its authorised centres, not by municipal or state revenue offices."
},
{
  id: "q-id-2",
  scenarioId: "mumbai-id-2",
  question:
    "Your PAN has incorrect details and is causing tax problems. Which agencies are involved in PAN corrections?",
  options: [
    "Municipal accounting department only",
    "PAN intermediaries (NSDL / UTIITSL) and the Income Tax Department",
    "State transport department",
    "Metro rail corporation"
  ],
  correctIndex: 1,
  explanation:
    "PAN is issued under the Income Tax Department through authorised intermediaries, which manage corrections and updates."
},
{
  id: "q-id-3",
  scenarioId: "mumbai-id-3",
  question:
    "Your passport application is delayed because police verification has not been done. Which two entities do you need to follow up with?",
  options: [
    "Municipal health department and ward office",
    "Passport Seva Kendra / Regional Passport Office and local police",
    "Rationing office and UIDAI",
    "Metro rail operator and bus depot"
  ],
  correctIndex: 1,
  explanation:
    "Passports are processed by the Ministry of External Affairs through Passport Seva and require verification by the local police unit."
},
  // District Collector / District Magistrate

  {
    id: "q-collector-1",
    scenarioId: "mumbai-collector-1",
    question:
      "After major floods damage homes and shops across parts of Mumbai, which district-level officer is responsible for coordinating relief and compensation?",
    options: [
      "Ward corporator",
      "District Collector / District Magistrate",
      "Member of Parliament",
      "Electricity distribution company"
    ],
    correctIndex: 1,
    explanation:
      "The District Collector or District Magistrate heads district administration and coordinates disaster relief and rehabilitation, working with state departments and local bodies."
  },
  {
    id: "q-collector-2",
    scenarioId: "mumbai-collector-2",
    question:
      "A new metro or highway project requires acquisition of land in your area. Who plays the central role in the formal land acquisition and compensation process?",
    options: [
      "Municipal parks department",
      "District Collector / designated Land Acquisition Officer",
      "Local police station",
      "UIDAI"
    ],
    correctIndex: 1,
    explanation:
      "Under land acquisition laws, the District Collector or designated Land Acquisition Officer manages notifications, compensation and rehabilitation."
  },

  // Member of Parliament and MPLADS

  {
    id: "q-mp-1",
    scenarioId: "mumbai-mp-1",
    question:
      "Your locality wants an extra classroom and boundary wall for a government school. Under MPLADS, what can your MP actually do?",
    options: [
      "Directly sanction funds and hire a contractor",
      "Recommend the work, which is then sanctioned and executed by the District Collector / district authority",
      "Order the municipal corporation to build it the next day",
      "Change the school curriculum"
    ],
    correctIndex: 1,
    explanation:
      "Under MPLADS, MPs recommend specific local works. Funds are released to the district authority, and the District Collector is responsible for sanctioning and implementing projects."
  },
  {
    id: "q-mp-2",
    scenarioId: "mumbai-mp-1",
    question:
      "Which of these best describes the kind of projects that can be taken up under MPLADS?",
    options: [
      "Recurring salary payments for private company staff",
      "Durable community assets like school rooms, health facilities, roads and public infrastructure",
      "Personal loans to individual citizens",
      "Daily waste collection contracts"
    ],
    correctIndex: 1,
    explanation:
      "MPLADS funds are meant for creating durable community assets based on locally felt needs, not for recurring expenses or private salaries."
  },
  {
    id: "q-mp-3",
    scenarioId: "mumbai-mp-2",
    question:
      "Persistent safety problems at a suburban railway station and nearby national highway stretch have not been resolved by local officials. How can your MP help?",
    options: [
      "By issuing an FIR and arresting officials",
      "By raising the matter with the concerned central ministries and recommending works to agencies like Railways / NHAI",
      "By cancelling all trains and highway traffic",
      "By directly demolishing unsafe structures"
    ],
    correctIndex: 1,
    explanation:
      "Railways and national highways are run by central agencies. MPs can escalate chronic issues to the relevant ministries, raise them in Parliament and support approvals for remedial works."
  }
];
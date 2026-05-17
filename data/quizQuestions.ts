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
      "Garbage in your lane has not been collected for 3 days. Who should you usually approach first?",
    options: [
      "Your MLA",
      "Your ward corporator / ward office",
      "Your MP",
      "District Collector / District Magistrate"
    ],
    correctIndex: 1,
    explanation:
      "Many people jump straight to a higher political office, but missed garbage collection is a ward-level municipal service issue. Start with the ward corporator or ward office, and escalate upward in the municipal system only if the problem persists."
  },
  {
    id: "q2",
    scenarioId: "mumbai-potholes-1",
    question:
      "An internal neighbourhood road has developed dangerous potholes. What is the best first step?",
    options: [
      "Complain to the traffic police",
      "Write directly to the Municipal Commissioner",
      "Approach the ward corporator and ward roads engineer",
      "Write to your MP about road safety"
    ],
    correctIndex: 2,
    explanation:
      "For local internal roads, the most effective first route is ward-level municipal officials and the corporator. Going straight to the Commissioner or MP skips the part of the system that actually handles routine repairs."
  },
  {
    id: "q3",
    scenarioId: "mumbai-streetlight-1",
    question:
      "Several streetlights on your lane have been off for more than a week. Which office is mainly responsible for getting them repaired?",
    options: [
      "Local police station",
      "Municipal electrical / streetlighting department via the ward office",
      "Electricity distribution company only",
      "District Collector"
    ],
    correctIndex: 1,
    explanation:
      "This is a common confusion: electricity supply and municipal streetlighting are not the same thing. Streetlights on municipal roads are usually maintained by the municipal electrical department through the ward system."
  },
  {
    id: "q4",
    scenarioId: "mumbai-water-1",
    question:
      "Your building’s municipal water supply has become irregular and low-pressure. Where should you normally raise this first?",
    options: [
      "With the state water resources minister",
      "With the ward corporator and ward water works engineer",
      "With your local MP",
      "At the police station"
    ],
    correctIndex: 1,
    explanation:
      "Low pressure and irregular municipal water supply inside the city usually belong to the municipal distribution system. Start with ward-level water officials and your corporator before escalating to higher political offices."
  },
  {
    id: "q5",
    scenarioId: "mumbai-drainage-1",
    question:
      "Your street gets waterlogged during moderate rain because roadside drains are choked. Who should you push to act first?",
    options: [
      "State Disaster Management Authority",
      "Ward corporator and storm-water / drainage department",
      "Your Member of Parliament",
      "Railway authorities"
    ],
    correctIndex: 1,
    explanation:
      "Routine drain desilting and local waterlogging are municipal responsibilities. Citizens often think of flooding as only a disaster-management issue, but the first response for a choked local drain is municipal, not state disaster machinery."
  },
  {
    id: "q6",
    scenarioId: "mumbai-park-1",
    question:
      "A neighbourhood municipal park has broken play equipment and overgrown grass. What is the most appropriate first escalation?",
    options: [
      "Approach the ward corporator and parks / gardens department",
      "Write to your MP",
      "Complain to the Forest Department",
      "Ask the police station to intervene"
    ],
    correctIndex: 0,
    explanation:
      "Municipal parks and neighbourhood gardens are city-level functions. MPs and MLAs may help for larger funding or redevelopment, but routine repairs and upkeep should begin with ward-level civic authorities."
  },
  {
    id: "q7",
    scenarioId: "mumbai-building-permissions-1",
    question:
      "You suspect an extra floor is being added illegally on a neighbouring building. Which authority has formal powers to act?",
    options: [
      "Ward building and permissions department of the municipal corporation",
      "Local police station alone",
      "Local MLA acting personally",
      "District Collector for all cases"
    ],
    correctIndex: 0,
    explanation:
      "Unauthorised construction is usually enforced through municipal building and permissions departments. Citizens often involve police or politicians, but formal building enforcement power sits with the municipal machinery."
  },
  {
    id: "q8",
    scenarioId: "mumbai-schools-1",
    question:
      "A nearby municipal primary school has leaking roofs and broken toilets. Which level of government usually runs such a school in a city like Mumbai?",
    options: [
      "Municipal corporation education department",
      "Only the central government",
      "Only the state legislature",
      "Member of Parliament through MPLADS"
    ],
    correctIndex: 0,
    explanation:
      "Municipal schools are run by the municipal corporation, even though state policy also affects education more broadly. The everyday maintenance problem here is municipal, not parliamentary or purely state legislative."
  },
  {
    id: "q9",
    scenarioId: "mumbai-public-health-1",
    question:
      "An overflowing public dustbin near a bus stop has become a source of foul smell and rodents. Whose job is it to keep such public spaces clean?",
    options: [
      "Local MLA’s office",
      "Municipal solid waste and public health departments",
      "Traffic police",
      "District supply officer"
    ],
    correctIndex: 1,
    explanation:
      "This is a public sanitation issue, which falls under the municipal corporation. It is a good example of a problem people may complain about politically, but which is operationally handled by city departments."
  },
  {
    id: "q10",
    scenarioId: "mumbai-primary-health-1",
    question:
      "A municipal dispensary in your area is often closed during working hours and medicines are unavailable. Which combination is most appropriate to pursue first?",
    options: [
      "Ward corporator and municipal health department / Medical Officer of Health",
      "Only the local MP",
      "District Collector alone",
      "Local police chowki"
    ],
    correctIndex: 0,
    explanation:
      "Municipal dispensaries are part of the city’s public health responsibilities. This is different from issues at a large state-run hospital, which would usually belong to the state health department."
  },

  {
    id: "q-police-1",
    scenarioId: "mumbai-police-1",
    question:
      "If you face regular harassment near a suburban railway station, who should you primarily approach first?",
    options: [
      "Ward corporator / municipal office",
      "Local police station or women’s helpline",
      "Local MP",
      "Municipal commissioner"
    ],
    correctIndex: 1,
    explanation:
      "Many people complain to a corporator because the place is public, but harassment and public-order enforcement are police functions. The corporation may improve lighting or cleanliness, but the police can register offences and act against offenders."
  },
  {
    id: "q-police-2",
    scenarioId: "mumbai-police-2",
    question:
      "Your apartment has been broken into and valuables stolen. Which authority is responsible for registering and investigating this crime?",
    options: [
      "Municipal commissioner",
      "Local police station",
      "District Collector",
      "Ward office"
    ],
    correctIndex: 1,
    explanation:
      "A burglary is a criminal matter, so the first formal step is an FIR at the local police station. This is not a municipal complaint, even if residents often approach elected representatives for help following up."
  },
  {
    id: "q-police-3",
    scenarioId: "mumbai-police-3",
    question:
      "A bar near your home plays loud music late into the night. Who enforces noise rules in this situation?",
    options: [
      "Ward corporator only",
      "Local police station and licensing authorities",
      "Food and Civil Supplies office",
      "Metro rail corporation"
    ],
    correctIndex: 1,
    explanation:
      "Citizens often complain to whoever is easiest to reach, but late-night noise enforcement is primarily a police and licensing matter. A corporator may support pressure locally, but enforcement power lies elsewhere."
  },

  {
    id: "q-power-1",
    scenarioId: "mumbai-power-1",
    question:
      "Your area has frequent low voltage and short power cuts. Who is primarily responsible for fixing this?",
    options: [
      "Municipal corporation electrical department",
      "Local electricity distribution company (DISCOM)",
      "Local police station",
      "Ward corporator acting alone"
    ],
    correctIndex: 1,
    explanation:
      "People often assume all electrical issues belong to the city, but power supply and billing are handled by electricity distribution companies, not municipal streetlighting teams."
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
      "Passport Seva Kendra"
    ],
    correctIndex: 1,
    explanation:
      "A corporator may help if the company is unresponsive, but the first technical responsibility lies with the distribution company. This is a useful example of a state-regulated service that people often misread as municipal."
  },
  {
    id: "q-power-3",
    scenarioId: "mumbai-power-3",
    question:
      "You receive an electricity bill that is much higher than usual without a change in usage. Where is the most appropriate place to start?",
    options: [
      "Municipal commissioner",
      "DISCOM billing / customer care office",
      "Local police station",
      "Your MLA’s office as the first step"
    ],
    correctIndex: 1,
    explanation:
      "Billing disputes need to start with the provider’s grievance mechanism. People often jump to an MLA when service frustration is high, but a billing dispute is best handled first through the DISCOM’s own complaint and review channels."
  },

  {
    id: "q-transport-1",
    scenarioId: "mumbai-transport-1",
    question:
      "Platforms and foot overbridges at your suburban railway station are dangerously overcrowded. Which body manages that station infrastructure?",
    options: [
      "Municipal corporation",
      "Indian Railways / suburban railway division",
      "State electricity board",
      "Ward corporator"
    ],
    correctIndex: 1,
    explanation:
      "This is a classic urban confusion point: the corporation may handle roads outside the station, but platforms, bridges and station safety inside the railway premises are the responsibility of Indian Railways."
  },
  {
    id: "q-transport-2",
    scenarioId: "mumbai-transport-2",
    question:
      "A bus route used by many residents has been withdrawn, making commuting difficult. Who usually decides routes and service frequency?",
    options: [
      "Municipal ward committee",
      "City or state transport undertaking such as BEST",
      "UIDAI",
      "District Collector"
    ],
    correctIndex: 1,
    explanation:
      "Residents often treat bus service like a generic city complaint, but route planning usually sits with transport undertakings and transport departments. Political representatives can escalate, but they do not run route scheduling directly."
  },
  {
    id: "q-transport-3",
    scenarioId: "mumbai-transport-3",
    question:
      "Access to your nearest metro station is poor and there is no safe last-mile connection. Which agency is usually responsible for metro lines and stations?",
    options: [
      "Municipal health department",
      "Metro rail corporation / development authority",
      "Ward parks department",
      "Police beat chowki"
    ],
    correctIndex: 1,
    explanation:
      "Metro systems are usually run by specialised regional or state agencies. The city may connect surrounding roads and footpaths, but the metro corporation is the first authority for station design and integration issues."
  },

  {
    id: "q-ration-1",
    scenarioId: "mumbai-ration-1",
    question:
      "Your ration shop gives you less grain than what is written on your ration card. Which system are you dealing with?",
    options: [
      "Municipal public health department",
      "Public Distribution System under the state food and civil supplies department",
      "Indian Railways catering system",
      "Municipal welfare board"
    ],
    correctIndex: 1,
    explanation:
      "Ration complaints belong to the Public Distribution System, not the municipal corporation. This is a common area where citizens treat a state service like a local ward service."
  },
  {
    id: "q-ration-2",
    scenarioId: "mumbai-ration-2",
    question:
      "Your ration card application has been pending for months. Which office should you primarily follow up with?",
    options: [
      "Ward corporator’s office",
      "Local ration / food and civil supplies office",
      "Municipal commissioner’s office",
      "Passport office"
    ],
    correctIndex: 1,
    explanation:
      "A corporator may help you escalate later, but issuing and updating ration cards is handled through food and civil supplies offices. The first route is departmental, not municipal."
  },
  {
    id: "q-welfare-1",
    scenarioId: "mumbai-welfare-1",
    question:
      "Your approved old age pension has not been credited for several months. Which authority typically runs such pensions?",
    options: [
      "Municipal corporation only",
      "State social welfare / social justice department",
      "Indian Railways",
      "Ward roads engineer"
    ],
    correctIndex: 1,
    explanation:
      "Many social security pensions are state welfare functions. People often go first to whichever elected representative they know, but the service itself sits within state welfare administration."
  },

  {
    id: "q-state-health-1",
    scenarioId: "mumbai-state-health-1",
    question:
      "A large state-run hospital is overcrowded and unhygienic. Who is directly responsible for managing such a hospital?",
    options: [
      "Ward corporator",
      "Hospital superintendent and state health department",
      "Municipal solid waste department",
      "MP’s office"
    ],
    correctIndex: 1,
    explanation:
      "This is different from a municipal dispensary. Large state-run hospitals are under the state health department and hospital administration, even though local politicians may still intervene on behalf of patients."
  },
  {
    id: "q-state-health-2",
    scenarioId: "mumbai-state-health-2",
    question:
      "A government ambulance service takes very long to respond to emergencies. Which authority should you complain to first?",
    options: [
      "Municipal parks department",
      "State emergency medical response service / health department",
      "Railway station manager",
      "Ward building department"
    ],
    correctIndex: 1,
    explanation:
      "Emergency ambulance response is usually managed through state health systems or their contracted operators. It feels like a generic public failure, but it is not mainly a municipal service issue."
  },
  {
    id: "q-state-health-3",
    scenarioId: "mumbai-state-health-3",
    question:
      "A government hospital refuses to admit a serious case without valid reason. Where should you push first?",
    options: [
      "Hospital superintendent / grievance cell",
      "Ward corporator and sanitation team",
      "Metro rail customer care",
      "Passport office"
    ],
    correctIndex: 0,
    explanation:
      "The first route is through hospital management and grievance systems. People often seek political help immediately, but denial of treatment should first be challenged within the health institution and department."
  },

  {
    id: "q-id-1",
    scenarioId: "mumbai-id-1",
    question:
      "Your Aadhaar details are wrong and repeated attempts to update them keep failing. Who actually manages Aadhaar data and corrections?",
    options: [
      "Municipal corporation",
      "UIDAI and its authorised centres",
      "State police department",
      "Ward office"
    ],
    correctIndex: 1,
    explanation:
      "Aadhaar is a central identity system. This is exactly the kind of issue many people wrongly carry to local government offices even though the authority sits with UIDAI and its authorised network."
  },
  {
    id: "q-id-2",
    scenarioId: "mumbai-id-2",
    question:
      "Your PAN has incorrect details and is causing tax problems. Which agencies are involved in PAN corrections?",
    options: [
      "Municipal accounting department",
      "PAN intermediaries and the Income Tax Department",
      "State transport department",
      "Ward office"
    ],
    correctIndex: 1,
    explanation:
      "PAN correction is part of a central tax administration process, not a city service. It is a good example of why the app has to go beyond municipal roles."
  },
  {
    id: "q-id-3",
    scenarioId: "mumbai-id-3",
    question:
      "Your passport application is delayed because police verification has not been completed. Which two entities do you need to follow up with?",
    options: [
      "Municipal health department and ward office",
      "Passport Seva / Regional Passport Office and the local police verification unit",
      "Rationing office and UIDAI",
      "Ward corporator and BMC commissioner"
    ],
    correctIndex: 1,
    explanation:
      "Passport issuance is handled through the Ministry of External Affairs, but police verification is part of the process. This is a split-responsibility issue, which makes it especially confusing for users."
  },

  {
    id: "q-collector-1",
    scenarioId: "mumbai-collector-1",
    question:
      "After major floods damage homes and shops across parts of the city, which district-level officer is responsible for coordinating relief and compensation?",
    options: [
      "Ward corporator",
      "District Collector / District Magistrate",
      "Member of Parliament",
      "Electricity distribution company"
    ],
    correctIndex: 1,
    explanation:
      "Flooded streets may start as a municipal complaint, but district-wide relief and compensation move into district administration. The Collector becomes central when the issue shifts from local maintenance to disaster response and rehabilitation."
  },
  {
    id: "q-collector-2",
    scenarioId: "mumbai-collector-2",
    question:
      "A new metro or highway project requires acquisition of land in your area. Who plays the central role in the formal compensation and rehabilitation process?",
    options: [
      "Ward parks department",
      "District Collector / designated Land Acquisition Officer",
      "Local police station",
      "Municipal school board"
    ],
    correctIndex: 1,
    explanation:
      "People often assume any city project must be handled by the municipal corporation, but land acquisition and compensation usually run through district administration under state law."
  },

  {
    id: "q-mp-1",
    scenarioId: "mumbai-mp-1",
    question:
      "Your locality wants an extra classroom or other durable public asset under MPLADS. What can your MP actually do?",
    options: [
      "Directly sanction funds and hire the contractor",
      "Recommend the work, which is then sanctioned and executed by the district authority",
      "Order the municipal corporation to build it immediately",
      "Approve the project as District Collector"
    ],
    correctIndex: 1,
    explanation:
      "This is a subtle but important distinction: MPs recommend MPLADS works, but they do not execute them directly. The district authority handles sanction and implementation."
  },
  {
    id: "q-mp-2",
    scenarioId: "mumbai-mp-1",
    question:
      "Which of these best describes the kind of projects that can be taken up under MPLADS?",
    options: [
      "Recurring salary payments for private staff",
      "Durable community assets such as school rooms, health facilities, roads and public infrastructure",
      "Personal loans to individual residents",
      "Routine daily garbage collection contracts"
    ],
    correctIndex: 1,
    explanation:
      "MPLADS is meant for durable local development assets. This helps users see the MP not as a generic complaint box, but as part of a specific funding and recommendation pathway."
  },
  {
    id: "q-mp-3",
    scenarioId: "mumbai-mp-2",
    question:
      "Persistent safety problems at a suburban railway station and nearby national highway stretch have not been resolved. How can your MP help?",
    options: [
      "By issuing an FIR and arresting officials",
      "By raising the matter with central ministries and pressing agencies like Railways or NHAI",
      "By taking over management of the station directly",
      "By replacing the municipal commissioner"
    ],
    correctIndex: 1,
    explanation:
      "MPs are especially relevant where central agencies are involved. They do not run the agencies directly, but they can escalate issues politically and through Parliament or ministry channels."
  }
];

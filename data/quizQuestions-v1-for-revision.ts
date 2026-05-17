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
  }
];
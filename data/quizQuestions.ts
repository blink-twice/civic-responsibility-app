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
    id: "qq-garbage-primary-authority",
    scenarioId: "mumbai-garbage-not-collected-3-days",
    question:
      "Garbage has not been collected from your lane for three days in Mumbai. Who is the most appropriate first point of contact?",
    options: [
      "Local corporator and BMC ward office (Solid Waste Management)",
      "Member of Parliament (MP)",
      "Mumbai Police station",
      "Chief Minister’s Office (CMO)",
    ],
    correctIndex: 0,
    explanation:
      "Day‑to‑day garbage collection in Mumbai is handled by BMC through the ward office and its Solid Waste Management staff. Your local corporator and the ward office are the right first points of contact, rather than state‑ or national‑level representatives.",
  },
  {
    id: "qq-potholes-local-road",
    scenarioId: "mumbai-local-road-potholes",
    question:
      "Your internal neighbourhood road (not a highway) has dangerous potholes. Which combination is most directly responsible for getting it repaired?",
    options: [
      "BMC ward road engineer and local corporator",
      "National Highways Authority of India (NHAI)",
      "Traffic police only",
      "Railway authorities",
    ],
    correctIndex: 0,
    explanation:
      "Local internal roads that are under BMC are maintained by ward‑level road engineers, who coordinate with contractors. The corporator can raise and follow up on complaints, but NHAI and railways are responsible only for specific highway or railway assets.",
  },
  {
    id: "qq-streetlights-not-working",
    scenarioId: "mumbai-streetlights-not-working",
    question:
      "Several streetlights on your residential lane are not working for over a week. Which authority should you primarily approach to get them fixed?",
    options: [
      "BMC ward electrical / streetlighting department (or BEST where applicable)",
      "Local MLA only",
      "Fire Brigade",
      "Election Commission",
    ],
    correctIndex: 0,
    explanation:
      "Streetlights on municipal roads are usually maintained by BMC’s electrical department or BEST in specific areas. Complaints should go through the ward office or designated streetlight complaint channels, not directly to your MLA or unrelated bodies.",
  },
  {
    id: "qq-irregular-water-supply",
    scenarioId: "mumbai-irregular-local-water-supply",
    question:
      "Your building and nearby buildings are facing irregular municipal water supply and low pressure with no official shutdown announced. Who is the correct technical authority to contact first?",
    options: [
      "BMC ward hydraulic (water) engineer",
      "District Collector",
      "Member of Parliament (MP)",
      "Local police inspector",
    ],
    correctIndex: 0,
    explanation:
      "Local distribution of municipal water within Mumbai is handled by BMC’s Hydraulics Department, through ward‑level hydraulic engineers. They are responsible for diagnosing and fixing local pipeline, valve, and supply issues.",
  },
  {
    id: "qq-park-maintenance",
    scenarioId: "mumbai-park-poorly-maintained",
    question:
      "A BMC garden/playground in your neighbourhood has broken equipment, overgrown grass, and poor cleanliness. Whom should you involve first to improve its maintenance?",
    options: [
      "Local corporator and BMC ward gardens/parks department",
      "Central Public Works Department (CPWD)",
      "Local MLA only",
      "Resident Welfare Association (RWA) only",
    ],
    correctIndex: 0,
    explanation:
      "Municipal parks and playgrounds in Mumbai are maintained by BMC’s gardens/parks department under the ward office. Your corporator and the ward gardens staff are the appropriate first contacts; state or central public works departments are not responsible for these local BMC parks.",
  },
];
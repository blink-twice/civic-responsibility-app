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
    id: "mumbai-garbage-not-collected-3-days",
    city: "Mumbai",
    category: "Waste",
    subcategory: "Garbage not collected for 3 days",
    scenarioText:
      "In your lane, household garbage has not been collected for the last three days, and overflowing bins are creating a health hazard.",
    primaryAuthority:
      "Local corporator and BMC ward office (Solid Waste Management)",
    secondaryAuthority:
      "Assistant Municipal Commissioner for the ward; Municipal Solid Waste Department at BMC HQ for escalation",
    explanation:
      "In Mumbai, day‑to‑day garbage collection and cleaning of public spaces is handled by the Brihanmumbai Municipal Corporation (BMC) through the ward office and its Solid Waste Management staff. You should first complain to your local ward office and inform your corporator, who can follow up with the ward’s SWM department. If the issue is not resolved in a reasonable time, you can escalate to the Assistant Municipal Commissioner for your ward and then to the central Solid Waste Department or through formal grievance channels.",
    actionLinks: [
      {
        label: "File a garbage complaint on the municipal portal",
        url: "https://example.com/complaints/garbage",
      },
      {
        label: "Call ward office / 1916 helpline",
        url: "https://example.com/contact/ward-office",
      },
      {
        label: "Escalate via RTI / higher BMC authorities",
        url: "https://example.com/escalation/garbage-collection",
      },
    ],
  },
  {
    id: "mumbai-local-road-potholes",
    city: "Mumbai",
    category: "Roads",
    subcategory: "Potholes or damaged local municipal road",
    scenarioText:
      "The internal road in your neighbourhood (not a highway or major arterial road) has multiple potholes and broken patches, making it unsafe for vehicles and pedestrians.",
    primaryAuthority:
      "BMC ward road engineer / junior engineer and local corporator",
    secondaryAuthority:
      "Assistant Municipal Commissioner (roads) for the ward; higher BMC Roads Department if repeatedly ignored",
    explanation:
      "Local internal roads that are maintained by BMC fall under the ward’s Roads Department. The ward road engineer (junior or deputy engineer) is responsible for getting potholes and damaged patches repaired, often based on complaints and inspections. Your local corporator can raise the issue and follow up, but execution is done by the ward engineers and contractors. If repairs are delayed or repeatedly ignored, you can escalate to the Assistant Municipal Commissioner for roads in your ward and then to the central Roads Department.",
    actionLinks: [
      {
        label: "Report potholes on the official complaint portal",
        url: "https://example.com/complaints/potholes",
      },
      {
        label: "Send photos and details to ward road engineer",
        url: "https://example.com/contact/ward-roads",
      },
      {
        label: "Escalate to zonal / central Roads Department",
        url: "https://example.com/escalation/roads",
      },
    ],
  },
  {
    id: "mumbai-streetlights-not-working",
    city: "Mumbai",
    category: "Streetlights",
    subcategory: "Streetlights not working on a municipal road",
    scenarioText:
      "Several streetlights on your residential lane have been non‑functional for more than a week, and the area is completely dark at night.",
    primaryAuthority:
      "BMC ward electrical department / street lighting cell (or BEST in areas where they maintain streetlights)",
    secondaryAuthority:
      "Assistant Municipal Commissioner for the ward; Municipal Electrical Engineer / higher BMC officials for escalation",
    explanation:
      "Streetlighting on municipal roads is typically managed either by the BMC’s electrical department or by BEST, depending on the specific area and maintenance contracts. For a dark residential lane, you should first complain through the ward office or the designated street‑light complaint channel, providing pole numbers and location details. Your corporator can help push the complaint. If repairs are not done within a reasonable timeframe, you can escalate to the Assistant Municipal Commissioner and then to the Municipal Electrical Engineer or higher BMC authorities.",
    actionLinks: [
      {
        label: "File a streetlight complaint online",
        url: "https://example.com/complaints/streetlights",
      },
      {
        label: "Share pole numbers and photos with ward office",
        url: "https://example.com/contact/ward-electrical",
      },
      {
        label: "Escalate to Municipal Electrical Engineer",
        url: "https://example.com/escalation/streetlights",
      },
    ],
  },
  {
    id: "mumbai-irregular-local-water-supply",
    city: "Mumbai",
    category: "Water",
    subcategory: "Irregular local water supply in city pipeline",
    scenarioText:
      "In your building and nearby buildings, the municipal tap water supply has become very irregular over the past two weeks, with low pressure and long periods without water, even though there is no announced shutdown.",
    primaryAuthority:
      "BMC ward hydraulic (water) engineer and local corporator",
    secondaryAuthority:
      "Assistant Municipal Commissioner (Hydraulics) or central Hydraulics Department; local MLA only for larger project or policy issues",
    explanation:
      "Local distribution of municipal water within a ward is handled by the BMC Hydraulics Department, through the ward‑level hydraulic engineer and staff. For problems like sudden irregular supply, low pressure, or unexplained cuts affecting a limited area, you should first raise a complaint with the ward office and the hydraulic engineer, while also informing your corporator. The MLA’s role is more relevant for larger bulk water projects, major pipelines, or policy‑level issues rather than everyday local distribution problems.",
    actionLinks: [
      {
        label: "Complain to ward hydraulic engineer",
        url: "https://example.com/complaints/water",
      },
      {
        label: "Check for official shutdown / notice",
        url: "https://example.com/info/water-shutdowns",
      },
      {
        label: "Escalate to higher Hydraulics Department / MLA",
        url: "https://example.com/escalation/water",
      },
    ],
  },
  {
    id: "mumbai-park-poorly-maintained",
    city: "Mumbai",
    category: "Parks",
    subcategory: "Municipal park or playground poorly maintained",
    scenarioText:
      "A neighbourhood BMC garden / playground has broken swings, overgrown grass, poor lighting, and litter, even though it is officially a municipal park.",
    primaryAuthority:
      "Local corporator and BMC ward garden / parks department",
    secondaryAuthority:
      "Assistant Municipal Commissioner for the ward; central Gardens Department or Municipal Commissioner for persistent neglect",
    explanation:
      "Public gardens and playgrounds that are owned and maintained by BMC fall under the ward’s gardens/parks department, overseen by the ward office. The corporator can raise issues about broken equipment, cleanliness, and maintenance, and the ward gardens staff are responsible for day‑to‑day upkeep. If repeated complaints do not lead to action, you can escalate to the Assistant Municipal Commissioner for your ward and, in serious or long‑pending cases, to the central Gardens Department or even to the Municipal Commissioner through formal grievance channels.",
    actionLinks: [
      {
        label: "Complain about park maintenance to ward office",
        url: "https://example.com/complaints/parks",
      },
      {
        label: "Request inspection by gardens department",
        url: "https://example.com/contact/gardens-department",
      },
      {
        label: "Escalate long‑pending park issues",
        url: "https://example.com/escalation/parks",
      },
    ],
  },
];
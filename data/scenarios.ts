// Add these two Scenario objects inside the existing `scenarios` array in data/scenarios.ts.
// No changes to the Scenario type are required.

{
  id: "mumbai-stray-dog-menace-1",
  city: "Mumbai",
  layer: "Municipal",
  category: "Public Health",
  subcategory: "Stray dogs causing nuisance or safety concerns",
  scenarioText:
    "A group of stray dogs is repeatedly chasing pedestrians or creating a safety concern near your building, school, or local road. No individual bite has occurred, but residents want the problem reported and handled lawfully.",
  primaryAuthority:
    "BMC Veterinary Health Department / local Dog Control Office",
  secondaryAuthority:
    "BMC 1916 or the relevant ward office; if the complaint is not addressed, follow up with the BMC Veterinary Health Department using the complaint reference number",
  explanation:
    "For Mumbai, complaints about stray-dog nuisance, suspected rabid dogs, dog bites, sterilisation, and vaccination are handled through the BMC Veterinary Health Department and Dog Control system. The appropriate response is a humane, documented municipal complaint so the authorities can assess the situation and take action under the applicable animal birth-control and public-health framework. Do not attempt to catch, relocate, poison, or harm the dogs yourself. If anyone is in immediate danger or a crime is taking place, contact emergency services or the police as appropriate.",
  actionLinks: [
    {
      label: "Register a BMC Veterinary Health grievance",
      url: "https://vhd.mcgm.gov.in/register-grievance"
    },
    {
      label: "Call BMC civic helpline 1916",
      url: "tel:1916"
    },
    {
      label: "View BMC Dog Control Office contacts",
      url: "https://www.mcgm.gov.in/irj/go/km/docs/documents/MCGM%20Department%20List/Veterinary%20Health%20Dept/Contact%20details%20of%20Dog%20Control%20Offices%20and%20Cattle%20Pound%20Office.pdf"
    }
  ]
},

{
  id: "mumbai-dog-bite-rabies-1",
  city: "Mumbai",
  layer: "Municipal",
  category: "Public Health",
  subcategory: "Dog bite or suspected rabies concern",
  scenarioText:
    "Someone has been bitten by a stray dog in Mumbai, or a dog is behaving in a way that raises concern about possible rabies. The person needs urgent medical attention and the incident must be reported.",
  primaryAuthority:
    "Urgent medical care for the person bitten, plus the BMC Veterinary Health Department / Dog Control Office for the animal-health complaint",
  secondaryAuthority:
    "BMC 1916 or the relevant ward Dog Control Office; follow up with the BMC Veterinary Health Department using the complaint reference number",
  explanation:
    "A dog bite is both an urgent medical concern and a municipal animal-health concern. The person bitten should seek immediate medical assessment and post-exposure care; the suspected animal should be reported to BMC Veterinary Health / Dog Control so trained personnel can assess and handle the case. Do not chase, catch, relocate, poison, or harm the dog yourself.",
  actionLinks: [
    {
      label: "Call BMC civic helpline 1916",
      url: "tel:1916"
    },
    {
      label: "Register a BMC Veterinary Health grievance",
      url: "https://vhd.mcgm.gov.in/register-grievance"
    },
    {
      label: "View BMC Dog Control Office contacts",
      url: "https://www.mcgm.gov.in/irj/go/km/docs/documents/MCGM%20Department%20List/Veterinary%20Health%20Dept/Contact%20details%20of%20Dog%20Control%20Offices%20and%20Cattle%20Pound%20Office.pdf"
    }
  ]
},
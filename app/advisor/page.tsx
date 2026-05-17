// app/advisor/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { scenarios, type Scenario } from "@/data/scenarios";
import { AnimatePresence, motion } from "framer-motion";

type City = Scenario["city"];

type BrowseGroup = {
  id: string;
  label: string;
  matcher: (scenario: Scenario) => boolean;
};

const browseGroups: BrowseGroup[] = [
  {
    id: "civic",
    label: "Local civic",
    matcher: (scenario) => scenario.layer === "Municipal",
  },
  {
    id: "police",
    label: "Police & safety",
    matcher: (scenario) =>
      scenario.category.toLowerCase().includes("law") ||
      scenario.primaryAuthority.toLowerCase().includes("police") ||
      scenario.secondaryAuthority.toLowerCase().includes("police"),
  },
  {
    id: "electricity",
    label: "Electricity",
    matcher: (scenario) =>
      scenario.category.toLowerCase().includes("electricity") ||
      scenario.subcategory.toLowerCase().includes("power") ||
      scenario.primaryAuthority.toLowerCase().includes("electricity") ||
      scenario.primaryAuthority.toLowerCase().includes("discom"),
  },
  {
    id: "transport",
    label: "Transport",
    matcher: (scenario) =>
      scenario.category.toLowerCase().includes("transport") ||
      scenario.scenarioText.toLowerCase().includes("railway") ||
      scenario.scenarioText.toLowerCase().includes("metro") ||
      scenario.scenarioText.toLowerCase().includes("bus route") ||
      scenario.primaryAuthority.toLowerCase().includes("rail") ||
      scenario.primaryAuthority.toLowerCase().includes("transport"),
  },
  {
    id: "documents",
    label: "Documents & IDs",
    matcher: (scenario) =>
      scenario.category.toLowerCase().includes("identity") ||
      scenario.scenarioText.toLowerCase().includes("aadhaar") ||
      scenario.scenarioText.toLowerCase().includes("pan") ||
      scenario.scenarioText.toLowerCase().includes("passport"),
  },
  {
    id: "welfare",
    label: "Ration & welfare",
    matcher: (scenario) =>
      scenario.category.toLowerCase().includes("ration") ||
      scenario.category.toLowerCase().includes("welfare") ||
      scenario.scenarioText.toLowerCase().includes("ration") ||
      scenario.scenarioText.toLowerCase().includes("pension"),
  },
  {
    id: "health",
    label: "Health",
    matcher: (scenario) =>
      scenario.category.toLowerCase().includes("health") ||
      scenario.scenarioText.toLowerCase().includes("hospital") ||
      scenario.scenarioText.toLowerCase().includes("dispensary") ||
      scenario.scenarioText.toLowerCase().includes("ambulance"),
  },
  {
    id: "district",
    label: "Collector / compensation",
    matcher: (scenario) =>
      scenario.layer === "District" ||
      scenario.primaryAuthority.toLowerCase().includes("collector") ||
      scenario.scenarioText.toLowerCase().includes("compensation") ||
      scenario.scenarioText.toLowerCase().includes("land acquisition"),
  },
];

const fallbackGuidance = [
  "Garbage, roads, drains, streetlights, parks, municipal schools, and local civic services usually start with the ward office or ward corporator.",
  "Crime, theft, harassment, violence, and urgent public-order issues usually start with the police.",
  "Aadhaar, PAN, passport, and railway issues usually belong to the relevant central agency or its grievance channel.",
  "Flood compensation, land acquisition, and district-wide relief often move through the Collector or district administration.",
];

const representativeLinks = [
  {
    label: "Find your MLA or MP",
    href: "https://electoralsearch.eci.gov.in/",
    note: "Start from your voter details and constituency information.",
  },
  {
    label: "Lok Sabha member list",
    href: "https://sansad.in/ls/members",
    note: "Useful when you already know your parliamentary constituency.",
  },
  {
    label: "BMC ward information",
    href: "https://portal.mcgm.gov.in/irj/portal/anonymous",
    note: "Use this to navigate ward-level Mumbai civic contacts and services.",
  },
];

const normalize = (value: string) => value.toLowerCase().trim();

const scenarioMatchesQuery = (scenario: Scenario, query: string) => {
  const q = normalize(query);
  if (!q) return true;

  return [
    scenario.category,
    scenario.subcategory,
    scenario.scenarioText,
    scenario.primaryAuthority,
    scenario.secondaryAuthority,
    scenario.explanation,
  ]
    .join(" ")
    .toLowerCase()
    .includes(q);
};

const AdvisorPage: React.FC = () => {
  const searchParams = useSearchParams();
  const scenarioIdFromQuery = searchParams.get("scenario");
  const returnTo = searchParams.get("returnTo");

  const [selectedCity, setSelectedCity] = useState<City>("Mumbai");
  const [query, setQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<string>("");
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>("");
  const [showFallbackHelp, setShowFallbackHelp] = useState(false);

  useEffect(() => {
    if (!scenarioIdFromQuery) return;

    const scenarioFromQuery = scenarios.find((scenario) => scenario.id === scenarioIdFromQuery);
    if (!scenarioFromQuery) return;

    setSelectedCity(scenarioFromQuery.city);
    setSelectedScenarioId(scenarioFromQuery.id);
    setQuery(scenarioFromQuery.subcategory);

    const matchingGroup = browseGroups.find((group) => group.matcher(scenarioFromQuery));
    if (matchingGroup) {
      setSelectedGroup(matchingGroup.id);
    }
  }, [scenarioIdFromQuery]);

  const cities = useMemo<City[]>(() => {
    const unique = Array.from(new Set(scenarios.map((scenario) => scenario.city)));
    return unique as City[];
  }, []);

  const cityScenarios = useMemo(() => {
    return scenarios.filter((scenario) => scenario.city === selectedCity);
  }, [selectedCity]);

  const visibleScenarios = useMemo(() => {
    let filtered = cityScenarios;

    if (selectedGroup) {
      const group = browseGroups.find((item) => item.id === selectedGroup);
      if (group) {
        filtered = filtered.filter((scenario) => group.matcher(scenario));
      }
    }

    filtered = filtered.filter((scenario) => scenarioMatchesQuery(scenario, query));

    return filtered;
  }, [cityScenarios, selectedGroup, query]);

  const selectedScenario = useMemo(() => {
    return cityScenarios.find((scenario) => scenario.id === selectedScenarioId);
  }, [cityScenarios, selectedScenarioId]);

  const topSuggestions = visibleScenarios.slice(0, 12);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCity = event.target.value as City;
    setSelectedCity(newCity);
    setSelectedGroup("");
    setQuery("");
    setSelectedScenarioId("");
  };

  const handleGroupClick = (groupId: string) => {
    setSelectedGroup((prev) => (prev === groupId ? "" : groupId));
    setSelectedScenarioId("");
  };

  const handleScenarioSelect = (scenario: Scenario) => {
    setSelectedScenarioId(scenario.id);
    setQuery(scenario.subcategory);
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-semibold text-slate-900">
          Who is responsible for my issue?
        </h1>
        <p className="max-w-2xl text-sm text-slate-700">
          Search for the problem you are dealing with, or browse a few broad issue groups. Then pick the closest match to see who to approach first.
        </p>
      </div>

      {scenarioIdFromQuery && selectedScenario && (
        <div className="mb-5 rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm text-sky-900">
          <p>
            You opened the Advisor from a quiz question. The matching issue has already been selected below.
          </p>
          {returnTo === "quiz" && (
            <div className="mt-3">
              <Link
                href="/quiz"
                className="inline-flex rounded-md border border-sky-300 bg-white px-3 py-2 text-sm font-medium text-sky-900 transition-colors duration-200 hover:bg-sky-100"
              >
                Go back to quiz
              </Link>
            </div>
          )}
        </div>
      )}

      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="mb-4 flex flex-col gap-2 sm:max-w-xs">
          <label htmlFor="city" className="text-sm font-medium text-slate-800">
            City
          </label>
          <select
            id="city"
            value={selectedCity}
            onChange={handleCityChange}
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="issue-search" className="mb-2 block text-sm font-medium text-slate-800">
            Search for your issue
          </label>
          <input
            id="issue-search"
            type="text"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelectedScenarioId("");
            }}
            placeholder="Try: garbage not collected, power cut, passport delay, potholes"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          />
        </div>

        <div className="mb-4">
          <p className="mb-2 text-sm font-medium text-slate-800">Quick browse</p>
          <div className="flex flex-wrap gap-2">
            {browseGroups.map((group) => {
              const isSelected = selectedGroup === group.id;
              const count = cityScenarios.filter((scenario) => group.matcher(scenario)).length;
              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => handleGroupClick(group.id)}
                  className={`rounded-full border px-3 py-2 text-sm transition-colors duration-200 ${
                    isSelected
                      ? "border-indigo-600 bg-indigo-600 text-white"
                      : "border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-100"
                  }`}
                >
                  {group.label}{" "}
                  <span className={`ml-1 text-xs ${isSelected ? "text-indigo-100" : "text-slate-500"}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-indigo-200 bg-indigo-50">
          <div className="flex items-center justify-between border-b border-indigo-100 px-4 py-3">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Matching issues</h2>
              <p className="text-xs text-slate-600">
                {visibleScenarios.length} result{visibleScenarios.length === 1 ? "" : "s"}
              </p>
            </div>
          </div>

          {topSuggestions.length > 0 ? (
            <div className="max-h-[420px] overflow-y-auto p-2">
              <div className="space-y-2">
                {topSuggestions.map((scenario) => {
                  const isSelected = selectedScenarioId === scenario.id;
                  return (
                    <button
                      key={scenario.id}
                      type="button"
                      onClick={() => handleScenarioSelect(scenario)}
                      className={`w-full rounded-lg border p-3 text-left transition-colors duration-200 ${
                        isSelected
                          ? "border-indigo-500 bg-white ring-2 ring-indigo-100"
                          : "border-indigo-100 bg-white hover:border-indigo-200 hover:bg-slate-50"
                      }`}
                    >
                      <div className="mb-1 flex flex-wrap gap-2">
                        <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-800">
                          {scenario.category}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-slate-900">{scenario.subcategory}</p>
                      <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                        {scenario.scenarioText}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="p-4 text-sm text-slate-700">
              No exact match found. Try broader words like <span className="font-medium">garbage</span>, <span className="font-medium">police</span>, <span className="font-medium">passport</span>, or <span className="font-medium">water</span>.
            </div>
          )}
        </div>
      </section>

      <AnimatePresence mode="wait">
        {selectedScenario && (
          <motion.section
            key={selectedScenario.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-6 rounded-xl border border-teal-200 bg-teal-50 p-5 shadow-sm"
          >
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-teal-200">
                {selectedScenario.layer}
              </span>
              <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-medium text-sky-800">
                {selectedScenario.category}
              </span>
            </div>

            <div className="mb-4 rounded-lg border border-sky-200 bg-white p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
                Situation
              </p>
              <p className="text-sm text-slate-800">{selectedScenario.scenarioText}</p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-lg border border-emerald-200 bg-white p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  Best first stop
                </p>
                <p className="text-sm font-medium text-slate-900">{selectedScenario.primaryAuthority}</p>
              </div>

              <div className="rounded-lg border border-amber-200 bg-white p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
                  If unresolved
                </p>
                <p className="text-sm font-medium text-slate-900">{selectedScenario.secondaryAuthority}</p>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-violet-200 bg-white p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-violet-700">Why this route</p>
              <p className="text-sm text-slate-800">{selectedScenario.explanation}</p>
            </div>

            {selectedScenario.actionLinks && selectedScenario.actionLinks.length > 0 && (
              <div className="mt-4">
                <p className="mb-2 text-sm font-medium text-slate-900">Suggested next steps</p>
                <div className="flex flex-wrap gap-3">
                  {selectedScenario.actionLinks.map((link) => {
                    const isHttp = link.url.startsWith("http");
                    const isTel = link.url.startsWith("tel:");
                    return (
                      <a
                        key={`${selectedScenario.id}-${link.label}`}
                        href={link.url}
                        target={isHttp ? "_blank" : undefined}
                        rel={isHttp ? "noopener noreferrer" : undefined}
                        className="inline-flex rounded-md border border-sky-300 bg-white px-4 py-2 text-sm font-medium text-sky-900 transition-colors duration-200 hover:bg-sky-50"
                      >
                        {link.label}
                        {isTel ? ` (${link.url.replace("tel:", "")})` : ""}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.section>
        )}
      </AnimatePresence>

      <section className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="md:max-w-2xl">
            <h2 className="text-sm font-semibold text-slate-900">Can’t find your issue?</h2>
            <p className="mt-1 text-sm text-slate-700">
              Use this only if the exact issue is not listed or you are unsure how to classify it.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowFallbackHelp((prev) => !prev)}
            className="rounded-md border border-amber-300 bg-white px-3 py-2 text-sm font-medium text-amber-900 transition-colors duration-200 hover:bg-amber-100"
          >
            {showFallbackHelp ? "Hide guidance" : "Show guidance"}
          </button>
        </div>

        {showFallbackHelp && (
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {fallbackGuidance.map((item) => (
              <div key={item} className="rounded-lg border border-amber-100 bg-white p-3 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-900">Need to find your MLA, councillor, or MP?</h2>
        <p className="mt-1 text-sm text-slate-700">
          Once you know which kind of representative matters for your issue, use these links to identify the right person or ward for your area.
        </p>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {representativeLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-sky-100 bg-white p-4 transition-colors duration-200 hover:bg-sky-100"
            >
              <p className="text-sm font-medium text-sky-900">{item.label}</p>
              <p className="mt-1 text-sm text-slate-700">{item.note}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default AdvisorPage;

// app/advisor/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { scenarios, type Scenario } from "@/data/scenarios";
import { AnimatePresence, motion } from "framer-motion";

type City = Scenario["city"];

type CategoryMeta = {
  title: string;
  summary: string;
  icon: string;
};

const categoryMeta: Record<string, CategoryMeta> = {
  "Waste & Cleanliness": {
    title: "Waste & Cleanliness",
    summary: "Garbage collection, public bins, sanitation, pests",
    icon: "🧹",
  },
  "Roads & Footpaths": {
    title: "Roads & Footpaths",
    summary: "Potholes, damaged footpaths, unsafe road conditions",
    icon: "🛣️",
  },
  Streetlights: {
    title: "Streetlights",
    summary: "Dark streets, broken poles, non-working lights",
    icon: "💡",
  },
  "Water Supply": {
    title: "Water Supply",
    summary: "Low pressure, irregular water, local supply issues",
    icon: "🚰",
  },
  "Drains & Flooding": {
    title: "Drains & Flooding",
    summary: "Choked drains, waterlogging, storm-water issues",
    icon: "🌧️",
  },
  "Parks & Public Spaces": {
    title: "Parks & Public Spaces",
    summary: "Municipal gardens, benches, play areas, upkeep",
    icon: "🌳",
  },
  "Public Health": {
    title: "Public Health",
    summary: "Sanitation, pests, dirty public spaces, health nuisance",
    icon: "🩺",
  },
  "Buildings & Permissions": {
    title: "Buildings & Permissions",
    summary: "Illegal construction, unsafe structures, approvals",
    icon: "🏗️",
  },
  Education: {
    title: "Education",
    summary: "Municipal schools, school facilities, local access issues",
    icon: "🏫",
  },
  "Health Facilities": {
    title: "Health Facilities",
    summary: "Municipal dispensaries and local public health access",
    icon: "🏥",
  },
  "Law & Order": {
    title: "Law & Order",
    summary: "Harassment, theft, crime, noise enforcement",
    icon: "👮",
  },
  "Electricity & Power": {
    title: "Electricity & Power",
    summary: "Power cuts, wires, dangerous faults, billing problems",
    icon: "⚡",
  },
  Transport: {
    title: "Transport",
    summary: "Railways, buses, metro access, station issues",
    icon: "🚉",
  },
  "Ration & Food Security": {
    title: "Ration & Food Security",
    summary: "Ration cards, shortages, PDS complaints",
    icon: "🪪",
  },
  "Welfare & Pensions": {
    title: "Welfare & Pensions",
    summary: "Old age pensions and welfare delivery problems",
    icon: "🤝",
  },
  "State Health Services": {
    title: "State Health Services",
    summary: "State hospitals, ambulances, treatment escalation",
    icon: "🚑",
  },
  "Identity Documents": {
    title: "Identity Documents",
    summary: "Aadhaar, PAN, passport-related issues",
    icon: "🪪",
  },
  "District Administration": {
    title: "District Administration",
    summary: "Flood relief, compensation, land acquisition, Collector",
    icon: "🏛️",
  },
  Parliament: {
    title: "Parliament / MP route",
    summary: "MP escalation, MPLADS, central-agency follow-up",
    icon: "🇮🇳",
  },
};

const defaultCategoryMeta = (category: string): CategoryMeta => ({
  title: category,
  summary: "Choose the issue that sounds closest to your situation.",
  icon: "📌",
});

const fallbackGuidance = [
  {
    title: "Local civic service problem",
    description:
      "If this is about garbage, local roads, drains, streetlights, parks, or a municipal school or clinic, start with the ward office or ward corporator.",
  },
  {
    title: "Crime or immediate safety",
    description:
      "If this concerns theft, harassment, violence, or urgent public-order issues, start with the police rather than the municipal system.",
  },
  {
    title: "Identity, railways, or national systems",
    description:
      "If the issue is about Aadhaar, PAN, passports, or railways, the right first stop is usually the central agency or its grievance channel.",
  },
  {
    title: "District-wide relief or compensation",
    description:
      "If this is about flood compensation, land acquisition, or district administration, the Collector or district administration is often the key route.",
  },
];

const AdvisorPage: React.FC = () => {
  const searchParams = useSearchParams();
  const scenarioIdFromQuery = searchParams.get("scenario");
  const returnTo = searchParams.get("returnTo");

  const [selectedCity, setSelectedCity] = useState<City>("Mumbai");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");

  useEffect(() => {
    if (!scenarioIdFromQuery) return;

    const scenarioFromQuery = scenarios.find((scenario) => scenario.id === scenarioIdFromQuery);
    if (!scenarioFromQuery) return;

    setSelectedCity(scenarioFromQuery.city);
    setSelectedCategory(scenarioFromQuery.category);
    setSelectedSubcategory(scenarioFromQuery.subcategory);
  }, [scenarioIdFromQuery]);

  const cities = useMemo<City[]>(() => {
    const unique = Array.from(new Set(scenarios.map((scenario) => scenario.city)));
    return unique as City[];
  }, []);

  const categories = useMemo<string[]>(() => {
    const filtered = scenarios.filter((scenario) => scenario.city === selectedCity);
    return Array.from(new Set(filtered.map((scenario) => scenario.category)));
  }, [selectedCity]);

  const scenariosInCategory = useMemo<Scenario[]>(() => {
    if (!selectedCategory) return [];
    return scenarios.filter(
      (scenario) => scenario.city === selectedCity && scenario.category === selectedCategory
    );
  }, [selectedCity, selectedCategory]);

  const matchingScenario: Scenario | undefined = useMemo(() => {
    if (!selectedCategory || !selectedSubcategory) return undefined;

    return scenarios.find(
      (scenario) =>
        scenario.city === selectedCity &&
        scenario.category === selectedCategory &&
        scenario.subcategory === selectedSubcategory
    );
  }, [selectedCity, selectedCategory, selectedSubcategory]);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCity = event.target.value as City;
    setSelectedCity(newCity);
    setSelectedCategory("");
    setSelectedSubcategory("");
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory("");
  };

  const handleIssueClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  const selectedCategoryMeta = selectedCategory
    ? categoryMeta[selectedCategory] ?? defaultCategoryMeta(selectedCategory)
    : null;

  return (
    <>
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-semibold text-slate-900">
          Who is responsible for my issue?
        </h1>
        <p className="max-w-2xl text-sm text-slate-700">
          Pick the category that sounds closest to your problem, then choose the specific issue. The Advisor will suggest who to approach first and how to think about escalation.
        </p>
      </div>

      {scenarioIdFromQuery && matchingScenario && (
        <div className="mb-5 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
          <p>
            You opened the Advisor from a quiz question. The matching issue has already been selected below.
          </p>
          {returnTo === "quiz" && (
            <div className="mt-3">
              <Link
                href="/quiz"
                className="inline-flex rounded-md border border-blue-300 bg-white px-3 py-2 text-sm font-medium text-blue-900 transition-colors duration-200 hover:bg-blue-100"
              >
                Go back to quiz
              </Link>
            </div>
          )}
        </div>
      )}

      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="mb-5 flex flex-col gap-2 sm:max-w-xs">
          <label htmlFor="city" className="text-sm font-medium text-slate-800">
            City
          </label>
          <select
            id="city"
            value={selectedCity}
            onChange={handleCityChange}
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <p className="text-xs text-slate-600">More cities will be added later.</p>
        </div>

        <div className="mb-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold text-slate-900">Step 1: Choose a category</h2>
              <p className="text-sm text-slate-600">
                Start broad — choose the kind of public problem this feels closest to.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => {
              const meta = categoryMeta[category] ?? defaultCategoryMeta(category);
              const isSelected = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryClick(category)}
                  className={`rounded-xl border p-4 text-left transition-all duration-200 ${
                    isSelected
                      ? "border-blue-600 bg-blue-50 shadow-sm ring-2 ring-blue-100"
                      : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-2xl" aria-hidden="true">
                      {meta.icon}
                    </span>
                    {isSelected && (
                      <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs font-medium text-white">
                        Selected
                      </span>
                    )}
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-slate-900">{meta.title}</h3>
                  <p className="text-sm text-slate-600">{meta.summary}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.45fr_0.95fr]">
          <div>
            <div className="mb-3">
              <h2 className="text-base font-semibold text-slate-900">Step 2: Choose the specific issue</h2>
              <p className="text-sm text-slate-600">
                Pick the issue that sounds closest. You can change your category at any time.
              </p>
            </div>

            {!selectedCategory && (
              <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-700">
                Select a category above to see the issue options.
              </div>
            )}

            {selectedCategory && selectedCategoryMeta && (
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="mb-4 flex items-start gap-3">
                  <span className="text-2xl" aria-hidden="true">
                    {selectedCategoryMeta.icon}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{selectedCategoryMeta.title}</h3>
                    <p className="text-sm text-slate-600">{selectedCategoryMeta.summary}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {scenariosInCategory.map((scenario) => {
                    const isSelected = selectedSubcategory === scenario.subcategory;
                    return (
                      <button
                        key={scenario.id}
                        type="button"
                        onClick={() => handleIssueClick(scenario.subcategory)}
                        className={`rounded-full border px-3 py-2 text-sm transition-colors duration-200 ${
                          isSelected
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-100"
                        }`}
                      >
                        {scenario.subcategory}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <aside className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h2 className="mb-2 text-base font-semibold text-slate-900">Can’t find your issue?</h2>
            <p className="mb-4 text-sm text-slate-600">
              Use these quick rules of thumb to decide where to begin when the exact issue is not listed.
            </p>

            <div className="space-y-3">
              {fallbackGuidance.map((item) => (
                <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-3">
                  <h3 className="mb-1 text-sm font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {matchingScenario && (
          <motion.section
            key={matchingScenario.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                {matchingScenario.layer}
              </span>
              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-800">
                {matchingScenario.category}
              </span>
            </div>

            <div className="mb-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Situation
              </p>
              <p className="text-sm text-slate-800">{matchingScenario.scenarioText}</p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Best first stop
                </p>
                <p className="text-sm font-medium text-slate-900">{matchingScenario.primaryAuthority}</p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  If unresolved
                </p>
                <p className="text-sm font-medium text-slate-900">{matchingScenario.secondaryAuthority}</p>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Why this route</p>
              <p className="text-sm text-slate-800">{matchingScenario.explanation}</p>
            </div>

            {matchingScenario.actionLinks && matchingScenario.actionLinks.length > 0 && (
              <div className="mt-4">
                <p className="mb-2 text-sm font-medium text-slate-900">Suggested next steps</p>
                <div className="flex flex-wrap gap-3">
                  {matchingScenario.actionLinks.map((link) => {
                    const isHttp = link.url.startsWith("http");
                    const isTel = link.url.startsWith("tel:");
                    return (
                      <a
                        key={`${matchingScenario.id}-${link.label}`}
                        href={link.url}
                        target={isHttp ? "_blank" : undefined}
                        rel={isHttp ? "noopener noreferrer" : undefined}
                        className="inline-flex rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition-colors duration-200 hover:bg-slate-100"
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
    </>
  );
};

export default AdvisorPage;

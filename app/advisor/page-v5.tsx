// app/advisor/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { scenarios, type Scenario } from "@/data/scenarios";
import { AnimatePresence, motion } from "framer-motion";

type City = Scenario["city"];

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

  const subcategories = useMemo<string[]>(() => {
    if (!selectedCategory) return [];
    const filtered = scenarios.filter(
      (scenario) => scenario.city === selectedCity && scenario.category === selectedCategory
    );
    return Array.from(new Set(filtered.map((scenario) => scenario.subcategory)));
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

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    setSelectedSubcategory("");
  };

  const handleSubcategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubcategory(event.target.value);
  };

  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold text-slate-900">
        Who is responsible for my issue?
      </h1>

      {matchingScenario && scenarioIdFromQuery && (
        <div className="mb-4 rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-blue-900">
          <p>
            You opened the Advisor from a quiz question. The matching issue has been pre-selected below.
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

      <section className="space-y-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="city" className="text-sm font-medium text-slate-800">
            City
          </label>
          <select
            id="city"
            value={selectedCity}
            onChange={handleCityChange}
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <option value="" disabled>
              Select a city
            </option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <p className="text-xs text-slate-600">
            More cities will be added in future versions.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="category" className="text-sm font-medium text-slate-800">
            Issue category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="subcategory" className="text-sm font-medium text-slate-800">
            Specific issue
          </label>
          <select
            id="subcategory"
            value={selectedSubcategory}
            onChange={handleSubcategoryChange}
            disabled={!selectedCategory}
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm disabled:cursor-not-allowed disabled:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <option value="">
              {selectedCategory ? "Select a specific issue" : "Choose a category first"}
            </option>
            {subcategories.map((subcategory) => (
              <option key={subcategory} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </select>
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
            whileHover={{ y: -4 }}
            className="mt-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-200"
          >
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                {matchingScenario.layer}
              </span>
              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-800">
                {matchingScenario.category}
              </span>
            </div>

            <h2 className="mb-2 text-lg font-semibold text-slate-900">
              Recommended authority
            </h2>

            <p className="mb-1 text-sm font-medium text-slate-800">Primary authority:</p>
            <p className="mb-3 text-sm text-slate-900">{matchingScenario.primaryAuthority}</p>

            <p className="mb-1 text-sm font-medium text-slate-800">
              Escalation / secondary authority:
            </p>
            <p className="mb-3 text-sm text-slate-900">{matchingScenario.secondaryAuthority}</p>

            <p className="mb-3 text-sm text-slate-800">{matchingScenario.explanation}</p>

            {matchingScenario.actionLinks && matchingScenario.actionLinks.length > 0 && (
              <div className="mt-3 space-y-2">
                <p className="text-sm font-medium text-slate-800">Suggested next steps:</p>
                <ul className="space-y-2 text-sm text-blue-700">
                  {matchingScenario.actionLinks.map((link) => {
                    const isTel = link.url.startsWith("tel:");
                    const isHttp = link.url.startsWith("http");
                    return (
                      <li key={`${matchingScenario.id}-${link.label}`}>
                        <a
                          href={link.url}
                          target={isHttp ? "_blank" : undefined}
                          rel={isHttp ? "noopener noreferrer" : undefined}
                          className="underline transition-colors duration-200 hover:text-blue-800"
                        >
                          {link.label}
                        </a>
                        {isTel && <span className="ml-1 text-slate-600">({link.url.replace("tel:", "")})</span>}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdvisorPage;

// app/advisor/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import { scenarios, type Scenario } from "@/data/scenarios";

type City = Scenario["city"];

const AdvisorPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City>("Mumbai");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");

  // Unique cities from scenarios (future-proofing)
  const cities = useMemo<City[]>(() => {
    const unique = Array.from(
      new Set(scenarios.map((scenario) => scenario.city))
    );
    return unique as City[];
  }, []);

  // Categories for the selected city
  const categories = useMemo<string[]>(() => {
    const filtered = scenarios.filter(
      (scenario) => scenario.city === selectedCity
    );
    return Array.from(new Set(filtered.map((scenario) => scenario.category)));
  }, [selectedCity]);

  // Subcategories for selected city + category
  const subcategories = useMemo<string[]>(() => {
    if (!selectedCategory) return [];
    const filtered = scenarios.filter(
      (scenario) =>
        scenario.city === selectedCity &&
        scenario.category === selectedCategory
    );
    return Array.from(
      new Set(filtered.map((scenario) => scenario.subcategory))
    );
  }, [selectedCity, selectedCategory]);

  // Find the matching scenario, if any
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
    // Reset dependent selections
    setSelectedCategory("");
    setSelectedSubcategory("");
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    setSelectedSubcategory("");
  };

  const handleSubcategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSubcategory(event.target.value);
  };

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-semibold">
        Who is responsible for my issue?
      </h1>

      <section className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        {/* City select */}
        <div className="flex flex-col gap-1">
          <label htmlFor="city" className="text-sm font-medium text-gray-700">
            City
          </label>
          <select
            id="city"
            value={selectedCity}
            onChange={handleCityChange}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
          <p className="text-xs text-gray-500">
            More cities will be added in future versions.
          </p>
        </div>

        {/* Category select */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="category"
            className="text-sm font-medium text-gray-700"
          >
            Issue category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory select */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="subcategory"
            className="text-sm font-medium text-gray-700"
          >
            Specific issue
          </label>
          <select
            id="subcategory"
            value={selectedSubcategory}
            onChange={handleSubcategoryChange}
            disabled={!selectedCategory}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm disabled:cursor-not-allowed disabled:bg-gray-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">
              {selectedCategory
                ? "Select a specific issue"
                : "Choose a category first"}
            </option>
            {subcategories.map((subcategory) => (
              <option key={subcategory} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Result card */}
      {matchingScenario && (
        <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-2 text-xl font-semibold text-gray-900">
            Recommended authority
          </h2>
          <p className="mb-1 text-sm font-medium text-gray-700">
            Primary authority:
          </p>
          <p className="mb-3 text-sm text-gray-900">
            {matchingScenario.primaryAuthority}
          </p>

          <p className="mb-1 text-sm font-medium text-gray-700">
            Escalation / secondary authority:
          </p>
          <p className="mb-3 text-sm text-gray-900">
            {matchingScenario.secondaryAuthority}
          </p>

          <p className="mb-3 text-sm text-gray-800">
            {matchingScenario.explanation}
          </p>

          {matchingScenario.actionLinks && matchingScenario.actionLinks.length > 0 && (
            <div className="mt-3 space-y-1">
              <p className="text-sm font-medium text-gray-700">
                Suggested next steps:
              </p>
              <ul className="list-disc pl-5 text-sm text-blue-700">
                {matchingScenario.actionLinks.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}
    </main>
  );
};

export default AdvisorPage;
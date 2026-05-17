// app/page.tsx

import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <section className="mb-8 rounded-2xl border border-sky-200 bg-sky-50 p-6 shadow-sm">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-sky-800 ring-1 ring-sky-200">
            Mumbai-first
          </span>
          <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-sky-800 ring-1 ring-sky-200">
            Civic routing tool
          </span>
          <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-sky-800 ring-1 ring-sky-200">
            Learn + Quiz + Advisor
          </span>
        </div>

        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Who should I actually approach for this problem?
        </h1>

        <p className="mb-3 max-w-2xl text-sm text-slate-800 sm:text-base">
          In Indian cities, it is often unclear whether a problem belongs to the
          municipal corporation, the police, a state department, the Collector,
          or a central agency. A pothole, a passport delay, a power cut, and a
          flood compensation issue may all feel equally urgent, but they do not
          belong to the same system.
        </p>

        <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
          This app helps people start in the right place. It lets you search for
          a concrete issue, see the best first authority to approach, understand
          the likely escalation path, and build a clearer mental model of how
          city governance actually works.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/advisor"
            className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-sky-700"
          >
            Open Advisor
          </Link>
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center rounded-md border border-indigo-300 bg-white px-4 py-2.5 text-sm font-medium text-indigo-900 transition-colors duration-200 hover:bg-indigo-50"
          >
            Try the Quiz
          </Link>
          <Link
            href="/learn"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 transition-colors duration-200 hover:bg-slate-100"
          >
            Learn how it works
          </Link>
        </div>
      </section>

      <section className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-5 shadow-sm">
          <h2 className="mb-2 text-base font-semibold text-slate-900">Advisor</h2>
          <p className="text-sm text-slate-700">
            Search for an issue such as garbage, power cuts, harassment, ration
            delays, or passport problems and get a practical first stop plus an
            escalation path.
          </p>
        </div>

        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
          <h2 className="mb-2 text-base font-semibold text-slate-900">Quiz</h2>
          <p className="text-sm text-slate-700">
            Test whether you can tell who handles which issue. Each attempt uses
            a short random set of questions and explains the logic after every
            answer.
          </p>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
          <h2 className="mb-2 text-base font-semibold text-slate-900">Learn</h2>
          <p className="text-sm text-slate-700">
            Explore the roles of corporators, MLAs, MPs, municipal officials,
            police, Collectors, and agencies through simple explainer content
            and escalation ladders.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-slate-900">
          What the app currently covers
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-medium text-slate-900">Local and city issues</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>Garbage, sanitation, roads, drains, streetlights, parks</li>
              <li>Water supply, municipal schools, municipal dispensaries</li>
              <li>Illegal construction and some local public-health concerns</li>
            </ul>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-slate-900">State, district, and central issues</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>Police and law-and-order complaints</li>
              <li>Electricity, transport, ration, welfare, and hospitals</li>
              <li>Aadhaar, PAN, passport, railways, Collector, and MP-linked routes</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

// app/page.tsx

import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <section className="mb-8">
        <h1 className="mb-4 text-2xl font-semibold text-slate-900">
          Who is responsible for what in my city?
        </h1>
        <p className="mb-3 text-sm text-slate-800">
          In Indian cities, it is easy to be unsure whether to contact your ward
          corporator, MLA, MLC, mayor, municipal commissioner or some other
          official for everyday problems. Issues like garbage, potholes, drains,
          water cuts, parks or school quality often sit at the overlap of
          different layers of government.
        </p>
        <p className="mb-6 text-sm text-slate-800">
          This site gives you a simple starting point. It helps you map a
          concrete issue in your lane or neighbourhood to the most appropriate
          authority to approach first, and offers quick learning material on how
          the city system around you is structured.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/advisor"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            I have a problem now → Advisor
          </Link>
          <Link
            href="/learn"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
          >
            I want to learn → Quiz and Learn pages
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
// app/page.tsx

import Link from "next/link";

const HomePage = () => {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <section>
        <h1 className="mb-4 text-3xl font-semibold">
          Who is responsible for what in my city?
        </h1>
        <p className="mb-3 text-sm text-gray-800">
          In Indian cities, it is common to be confused about whether to take a
          problem to your ward corporator, MLA, MLC, mayor, municipal
          commissioner or some other official. Everyday issues like garbage,
          potholes, drains, water cuts, parks or school quality often sit at the
          overlap of these roles.
        </p>
        <p className="mb-6 text-sm text-gray-800">
          This site gives you a simple starting point: it helps you map a
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
            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
          >
            I want to learn → Quiz and Learn pages
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
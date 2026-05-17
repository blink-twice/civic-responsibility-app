// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { PageTransitionWrapper } from "@/components/PageTransitionWrapper";

export const metadata: Metadata = {
  title: "City Responsibility Advisor",
  description: "Understand who is responsible for what in your city.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <nav className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:px-6">
            <Link
              href="/"
              className="text-sm font-semibold text-slate-900"
            >
              ResponsiveCivic
            </Link>
            <div className="flex items-center gap-2 text-sm">
              <Link
                href="/"
                className="rounded-md px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                Home
              </Link>
              <Link
                href="/advisor"
                className="rounded-md px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                Advisor
              </Link>
              <Link
                href="/quiz"
                className="rounded-md px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                Quiz
              </Link>
              <Link
                href="/learn"
                className="rounded-md px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                Learn
              </Link>
            </div>
          </div>
        </nav>

        <div className="bg-slate-50">
          {/* shared page container */}
          <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
            <PageTransitionWrapper>{children}</PageTransitionWrapper>
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
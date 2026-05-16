// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
      <body className="bg-gray-50 text-gray-900">
        <nav className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
            <Link href="/" className="text-sm font-semibold text-gray-900">
              City Responsibility Advisor
            </Link>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link
                href="/advisor"
                className="text-gray-700 hover:text-gray-900"
              >
                Advisor
              </Link>
              <Link href="/quiz" className="text-gray-700 hover:text-gray-900">
                Quiz
              </Link>
              <Link
                href="/learn"
                className="text-gray-700 hover:text-gray-900"
              >
                Learn
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
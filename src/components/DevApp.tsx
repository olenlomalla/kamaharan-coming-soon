import { Link } from "react-router-dom";

import { Logo } from "../components/ui/Logo";

export const DevApp = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Logo variant="horizontal" className="h-8 w-auto" />
          <Link
            to="/"
            className="text-sm font-medium text-gray-body transition-colors hover:text-primary-default"
          >
            View Public Site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="animate-fadeIn font-heading text-2xl font-bold text-gray-title">
          Development Environment
        </h1>
        <p className="mt-4 animate-fadeIn text-gray-body">
          This is the protected development version of the application.
        </p>
      </main>
    </div>
  );
};

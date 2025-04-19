import { FC } from "react";

import Header from "../components/brothersumrah/Header";

// Adjust the path based on your folder structure

const BrothersUmrah: FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="container mx-auto flex-grow p-4">
        <h2 className="mb-4 text-xl font-semibold">
          Welcome to the Brothers Umrah page.
        </h2>
        <p>This is where you can add your main content about Umrah services.</p>
      </main>
    </div>
  );
};

export default BrothersUmrah;

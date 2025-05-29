import React from "react";

const SistersEvent = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <header className="py-8">
          <h1 className="text-center text-4xl font-bold">Sisters Event</h1>
          <p className="mt-4 text-center text-xl">
            Welcome to our special event for sisters
          </p>
        </header>

        {/* Main Content */}
        <main className="py-12">
          {/* Event Details Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Event Details</h2>
            <div className="rounded-lg bg-gray-50 p-6">
              <p className="mb-2">
                <strong>Date:</strong> [Insert Date]
              </p>
              <p className="mb-2">
                <strong>Time:</strong> [Insert Time]
              </p>
              <p className="mb-2">
                <strong>Location:</strong> [Insert Location]
              </p>
              <p>
                <strong>Description:</strong> Join us for an inspiring gathering
                of sisters...
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <button className="rounded-lg bg-blue-600 px-8 py-3 text-white transition-colors hover:bg-blue-700">
              Register Now
            </button>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-600">
          <p>© 2025 Sisters Event. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default SistersEvent;

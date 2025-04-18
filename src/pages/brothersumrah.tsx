import { FC } from "react";

const BrothersUmrah: FC = () => {
  return (
    <div className="bg-umrah-cream min-h-screen">
      <Header />
      <div className="container-custom mt-16 py-20">
        <h1 className="mb-6 text-3xl font-bold">Brothers Umrah</h1>
        <p className="mb-4">Welcome to the Brothers Umrah page.</p>
        {/* Add more content here */}
      </div>
      <Footer />
    </div>
  );
};

export default BrothersUmrah;

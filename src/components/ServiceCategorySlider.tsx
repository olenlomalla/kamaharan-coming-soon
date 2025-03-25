import { Heart } from "lucide-react";

interface ServiceCategory {
  id: string;
  name: string;
  link: string;
}

const categories: ServiceCategory[] = [
  {
    id: "1",
    name: "Eating Out",
    link: "/eating-out",
  },
  {
    id: "2",
    name: "Home Services",
    link: "/home-services",
  },
  {
    id: "3",
    name: "Car Services",
    link: "/car-services",
  },
  {
    id: "4",
    name: "Deals",
    link: "/deals",
  },
  {
    id: "5",
    name: "Explore",
    link: "/explore",
  },
  {
    id: "6",
    name: "Find a Business",
    link: "/find-business",
  },
];

export const ServiceCategorySlider = () => {
  return (
    <div className="w-full overflow-hidden py-6">
      <h2 className="mb-4 px-4 text-lg font-semibold text-gray-800">
        Discover services for every occasion
      </h2>
      <div className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4">
        {categories.map((category) => (
          <div key={category.id} className="w-24 flex-none snap-start">
            <div className="group relative">
              <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-200">
                {/* Placeholder for category image */}
                <div className="flex h-full w-full items-center justify-center text-gray-400">
                  IMG
                </div>
              </div>
              <button
                className="absolute right-1 top-1 rounded-full bg-white/80 p-1.5 opacity-0 transition-opacity group-hover:opacity-100"
                aria-label={`Save ${category.name}`}
              >
                <Heart className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <p className="mt-2 text-center text-sm text-gray-700">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

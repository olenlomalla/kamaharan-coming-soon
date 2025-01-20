import React from 'react';
import { Heart } from 'lucide-react';

interface ServiceCategory {
  id: string;
  name: string;
  link: string;
}

const categories: ServiceCategory[] = [
  {
    id: '1',
    name: 'Eating Out',
    link: '/eating-out'
  },
  {
    id: '2',
    name: 'Home Services',
    link: '/home-services'
  },
  {
    id: '3',
    name: 'Car Services',
    link: '/car-services'
  },
  {
    id: '4',
    name: 'Deals',
    link: '/deals'
  },
  {
    id: '5',
    name: 'Explore',
    link: '/explore'
  },
  {
    id: '6',
    name: 'Find a Business',
    link: '/find-business'
  }
];

export const ServiceCategorySlider = () => {
  return (
    <div className="w-full overflow-hidden py-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 px-4">
        Discover services for every occasion
      </h2>
      <div className="flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory hide-scrollbar">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex-none w-24 snap-start"
          >
            <div className="relative group">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                {/* Placeholder for category image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  IMG
                </div>
              </div>
              <button
                className="absolute top-1 right-1 p-1.5 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={`Save ${category.name}`}
              >
                <Heart className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <p className="mt-2 text-sm text-center text-gray-700">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
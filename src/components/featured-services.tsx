import { Heart } from "lucide-react";

interface Service {
  id: string;
  name: string;
  price: string;
  discount: string;
  rating: number;
  reviews: number;
}

const services: Service[] = [
  {
    id: "1",
    name: "Green Plate",
    price: "£4.40",
    discount: "45% off",
    rating: 4.8,
    reviews: 234,
  },
  {
    id: "2",
    name: "Key Haven",
    price: "£2.80",
    discount: "50% off",
    rating: 4.6,
    reviews: 189,
  },
  {
    id: "3",
    name: "The Royal Wellness Spa",
    price: "£2.20",
    discount: "40% off",
    rating: 4.2,
    reviews: 126,
  },
];

export const FeaturedServices = () => {
  return (
    <div className="w-full py-8">
      <div className="mb-6 flex items-center justify-between px-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Featured Services & Products
        </h2>
        <div className="flex gap-2">
          <button className="rounded-full border border-gray-200 p-2 hover:bg-gray-50">
            <span className="sr-only">Previous</span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="rounded-full border border-gray-200 p-2 hover:bg-gray-50">
            <span className="sr-only">Next</span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col">
            <div
              className="group relative overflow-hidden rounded-lg bg-gray-200"
              style={{ height: "200px" }}
            >
              {/* Placeholder for service image */}
              <div className="flex h-full w-full items-center justify-center text-gray-400">
                IMG
              </div>
              <button
                className="absolute right-2 top-2 rounded-full bg-white/80 p-1.5 opacity-0 transition-opacity group-hover:opacity-100"
                aria-label={`Save ${service.name}`}
              >
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <div className="mt-3">
              <h3 className="font-medium text-gray-900">{service.name}</h3>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-sm font-medium text-gray-900">
                  {service.price}
                </span>
                <span className="text-sm text-green-600">
                  {service.discount}
                </span>
              </div>
              <div className="mt-1 flex items-center gap-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(service.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {service.rating} ({service.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

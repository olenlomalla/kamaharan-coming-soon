import { Business } from "@/types/businesses";

export const businesses: Business[] = [
  {
    id: 0,
    image: "/images/business/green-plate.png",
    name: "Green Plate",
    description: "A vegan friendly restaurant in South London",
    location: "45A High Road, Wembley, HA9 7AF London",
    rating_score: 4.9,
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    x: "https://x.com/?lang=en",
    tiktok: "https://www.tiktok.com/",
    google: "https://www.google.com/",
    website: "",
    phone_number: "",
    featured: [
      { id: 0, image: "/images/home-page/slides/slideOne.png" },
      { id: 1, image: "/images/home-page/slides/slideOne.png" },
      { id: 2, image: "/images/home-page/slides/slideOne.png" },
    ],
    items: [
      { id: 0, image: "/images/home-page/slides/slideOne.png" },
      { id: 1, image: "/images/home-page/slides/slideTwo.png" },
      { id: 2, image: "/images/home-page/slides/slideThree.png" },
      { id: 3, image: "/images/home-page/slides/slideFour.png" },
      { id: 4, image: "/images/home-page/slides/slideOne.png" },
      { id: 5, image: "/images/home-page/slides/slideTwo.png" },
    ],
    story:
      "At London Beauty Retreat, we believe in the transformative power of self-care. Our journey began with a simple idea: to create a sanctuary where everyone can escape the hustle and bustle of city life. We stand for holistic wellness, offering a range of treatments that nourish the body and soul. Our mission is to empower you to prioritize your well-being, helping you to feel rejuvenated and balanced. Join us as we continue to grow and inspire a community dedicated to beauty from within.",
    services: [
      {
        id: 0,
        title: "Deep Tissue massage",
        time: "60 min",
        value: "£65",
        rating: 4.8,
        review: "124 reviews",
      },
      {
        id: 1,
        title: "Swedish massage",
        time: "45 min",
        value: "£55",
        rating: 4.7,
        review: "98 reviews",
      },
      {
        id: 2,
        title: "Sportsmassage",
        time: "60 min",
        value: "£65",
        rating: 4.9,
        review: "124 reviews",
      },
      {
        id: 3,
        title: "Aromatherapy",
        time: "75 min",
        value: "£65",
        rating: 4.8,
        review: "114 reviews",
      },
    ],
    gallery: [
      { id: 0, image: "/images/home-page/slides/slideOne.png" },
      { id: 1, image: "/images/home-page/slides/slideTwo.png" },
      { id: 2, image: "/images/home-page/slides/slideThree.png" },
    ],
  },
];

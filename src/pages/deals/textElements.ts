// textElements.ts

export interface TextElement {
  id: number;
  head: string;
  price: string;
  rate: string;
  reviews: string;
}

export const textElements: TextElement[] = [
  {
    id: 1,
    head: "Green Plate",
    price: "£4.40 65% off",
    rate: "4.8",
    reviews: "234 reviews)",
  },
];

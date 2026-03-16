export interface Certification {
  id: number;
  image: string;
  type: "vertical" | "horizontal";
}

export const certifications: Certification[] = [
  {
    id: 1,
    image: "/assets/certifications/chung-nhan-1.webp",
    type: "vertical",
  },
  {
    id: 2,
    image: "/assets/certifications/chung-nhan-2.webp",
    type: "vertical",
  },
  {
    id: 3,
    image: "/assets/certifications/chung-nhan-3.webp",
    type: "vertical",
  },
  {
    id: 4,
    image: "/assets/certifications/chung-nhan-4.webp",
    type: "horizontal",
  },
  {
    id: 5,
    image: "/assets/certifications/chung-nhan-5.webp",
    type: "horizontal",
  },
];
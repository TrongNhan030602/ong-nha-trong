export interface Product {
  id: number;
  name: string;
  price: string;
  unit?: string;
  image: string;
  link: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Mật Ong",
    price: "35.000",
    unit: "Chai",
    image: "/assets/product/sp1.webp",
    link: "https://zalo.me/0931035448",
  },
  {
    id: 2,
    name: "Mật Ong Nhãn",
    price: "300.000",
    unit: "L",
    image: "/assets/product/sp2.webp",
    link: "https://zalo.me/0931035448",
  },
  {
    id: 3,
    name: "Mật Ong Tràm",
    price: "300.000",
    unit: "L",
    image: "/assets/product/sp3.webp",
    link: "https://zalo.me/0931035448",
  },
  {
    id: 4,
    name: "Rượu phấn hoa",
    price: "150.000",
    unit: "Chai",
    image: "/assets/product/sp4.webp",
    link: "https://zalo.me/0931035448",
  },
  {
    id: 5,
    name: "Bánh tổ ong",
    price: "150.000",
    unit: "Hộp / 500g",
    image: "/assets/product/sp5.webp",
    link: "https://zalo.me/0931035448",
  },
  {
    id: 6,
    name: "Nến sáp ong",
    price: "12.000",
    unit: "Cái",
    image: "/assets/product/sp6.webp",
    link: "https://zalo.me/0931035448",
  },
];
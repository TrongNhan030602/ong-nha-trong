import { fetchAPI } from "./api";
import { Product } from "@/types/product";

export const productService = {
  getAll() {
    return fetchAPI<Product[]>("/products");
  },

  getById(id: number) {
    return fetchAPI<Product>(`/products/${id}`);
  },
};

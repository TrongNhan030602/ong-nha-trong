"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useState } from "react";

import { products as fallbackProducts } from "@/data/products";
import type { Product } from "@/data/products";

function Products() {
  const LINK_MORE = "";

  const [products, setProducts] = useState<Product[]>(fallbackProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");

        if (!res.ok) throw new Error();

        const data: Product[] = await res.json();

        // format lại giá (API trả number)
        const formatted = data.map((p) => ({
          ...p,
          price: p.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
        }));

        setProducts(formatted);
      } catch {
        // fallback giữ nguyên data tĩnh
        console.warn("Dùng fallback products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="products" className="py-12">
      <div className="max-w-[1080px] mx-auto px-2 md:px-4">

        {/* Title */}
        <h2
          className="text-3xl md:text-5xl leading-tight font-semibold text-[#673200] text-center mb-8 md:mb-10"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Sản phẩm nổi bật
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 md:gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl overflow-hidden bg-cover bg-center text-center"
              style={{ backgroundImage: "url('/assets/bg-card.png')" }}
            >
              {/* Image */}
              <div className="w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-[150px] md:h-[230px] object-contain rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className="p-3 md:p-6">
                <h3 className="text-base md:text-4xl font-semibold text-[#673200] capitalize mb-1 md:mb-2">
                  {product.name}
                </h3>

                <p className="text-[#673200] font-bold mb-4 md:mb-6 leading-tight">
                  <span className="block text-lg md:text-3xl tracking-tight">
                    {product.price}đ
                  </span>

                  {product.unit && (
                    <span className="block text-xs md:text-base font-medium opacity-70">
                      / {product.unit}
                    </span>
                  )}
                </p>

                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#F0A523] hover:bg-[#D8941E]
                    text-white text-xs md:text-lg
                    px-5 md:px-10 py-1.5 md:py-3
                    rounded-full font-semibold
                    shadow-[0_2px_0_rgba(0,0,0,0.15),0_6px_10px_rgba(0,0,0,0.15)]
                    hover:shadow-[0_1px_0_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.2)]
                    transition-all duration-300
                    cursor-pointer"
                  >
                    Mua ngay
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Xem thêm */}
        <div className="flex justify-center mt-10">
          <a
            href={LINK_MORE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2
            text-[#673200] font-semibold
            hover:gap-3
            transition-all duration-300"
          >
            <span className="border-b-2 border-[#F0A523] pb-1">Xem thêm</span>
            <FiArrowRight className="text-lg" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Products;
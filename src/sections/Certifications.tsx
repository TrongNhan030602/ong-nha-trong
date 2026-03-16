"use client";

import { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

import { certifications } from "@/data/certifications";

function Certifications() {
  const vertical = certifications.filter((c) => c.type === "vertical");
  const horizontal = certifications.filter((c) => c.type === "horizontal");

  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section
      id="certifications"
      className="py-12 lg:py-16"
    >
      <div className="max-w-[1080px] mx-auto px-4">
        {/* TITLE */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#673200]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Chứng nhận & Giải thưởng
          </h2>
        </div>

        {/* VERTICAL */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {vertical.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightbox(item.image)}
              className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <Image
                src={item.image}
                alt={`Chứng nhận ${item.id}`}
                width={500}
                height={700}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* HORIZONTAL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {horizontal.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightbox(item.image)}
              className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <Image
                src={item.image}
                alt={`Chứng nhận ${item.id}`}
                width={800}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:opacity-70 transition"
          >
            <IoClose />
          </button>

          <Image
            src={lightbox}
            alt="Certification"
            width={1200}
            height={900}
            className="max-h-[92vh] max-w-[95vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Certifications;

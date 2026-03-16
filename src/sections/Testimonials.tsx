"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import { reviews } from "@/data/reviews";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-12 md:py-16 overflow-hidden"
    >
      {/* Thumbnail */}
      <Image
        src="/assets/thumb-testimonials.webp"
        alt="Khách hàng nói gì"
        width={400}
        height={600}
        className="absolute -right-16 lg:-right-24 top-0 h-[85%] w-auto object-contain pointer-events-none z-0"
      />

      <div className="relative max-w-[1080px] mx-auto px-4 z-10">
        {/* Title */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-semibold text-[#673200]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Khách hàng nói gì ?
          </h2>
        </div>

        {/* Slider */}
        <div className="testimonial-slider bg-white rounded-2xl shadow-lg max-w-[680px] overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1.1}
            spaceBetween={0}
            loop
            speed={700}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 1.7 },
              1024: { slidesPerView: 2 },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="testimonial-card">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full object-cover"
                    />

                    <div className="flex-1">
                      <div className="inline-block">
                        <div className="flex gap-2 text-[#FEB12C] mb-1">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>

                        <div className="mt-1 h-[1.3px] bg-[#7a7979] mb-1"></div>
                      </div>

                      <p className="font-semibold text-black text-xl">
                        {review.name}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-[#583613] leading-relaxed text-lg">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

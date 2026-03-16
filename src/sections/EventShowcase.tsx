"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import { eventGallery } from "@/data/eventGallery";

function EventShowcase() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <section
      id="event-showcase"
      className="relative py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-[1080px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* LEFT SLIDER */}
          <div className="w-full">
            <Swiper
              modules={[Thumbs, Autoplay]}
              thumbs={{ swiper: thumbsSwiper }}
              loop
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="rounded overflow-hidden shadow-lg"
            >
              {eventGallery.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="w-full aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt="Sự kiện mật ong"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#673200] mb-4 lg:mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Dấu ấn thương hiệu tại sự kiện
            </h2>

            <p className="text-[#583613] leading-relaxed text-base md:text-lg mb-6 lg:mb-10">
              Chúng tôi mang các sản phẩm mật ong nguyên chất và sản phẩm từ ong
              đến giới thiệu trực tiếp tại sự kiện, giúp khách hàng dễ dàng quan
              sát, trải nghiệm và tin tưởng hơn vào chất lượng thực tế.
            </p>

            {/* THUMB SLIDER */}
            <Swiper
              modules={[Thumbs]}
              onSwiper={setThumbsSwiper}
              spaceBetween={12}
              slidesPerView={3}
              watchSlidesProgress
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 3 },
              }}
            >
              {eventGallery.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="aspect-[4/3]">
                    <Image
                      src={item.thumb}
                      alt="thumbnail sự kiện"
                      width={300}
                      height={200}
                      className="cursor-pointer w-full h-full object-cover border border-gray-200 hover:opacity-80 transition"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* BUTTON */}
        <div className="text-center mt-10 lg:mt-14">
          <a
            href="#products"
            className="inline-block
            bg-[#F0A523] hover:bg-[#D8941E]
            text-white text-lg
            px-12 py-3
            rounded-full font-bold
            shadow-[0_2px_0_rgba(0,0,0,0.15),0_6px_10px_rgba(0,0,0,0.15)]
            hover:shadow-[0_1px_0_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.2)]
            transition-all duration-200
            cursor-pointer"
          >
            Xem sản phẩm nổi bật
          </a>
        </div>
      </div>
    </section>
  );
}

export default EventShowcase;
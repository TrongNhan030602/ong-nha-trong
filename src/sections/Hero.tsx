import Image from "next/image";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[420px] lg:min-h-[720px] flex items-start pt-10 lg:pt-26 bg-cover bg-left overflow-hidden"
    >
      {/* Thumb */}
      <Image
        src="/assets/thumb-hero.webp"
        alt="Mật ong nguyên chất"
        width={900}
        height={720}
        className="absolute right-0 top-0 h-full w-auto max-w-none object-contain opacity-40 md:opacity-100"
        priority
      />

      {/* Content */}
      <div className="relative max-w-[1080px] mx-auto w-full px-4">
        <div className="max-w-[640px]">
          <h2
            className="text-4xl md:text-6xl text-[#673200] font-bold mb-4 leading-snug"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Mật ong nguyên chất từ thiên nhiên
          </h2>

          <p className="text-[#583613] text-lg md:text-2xl font-medium mb-6 text-shadow-2xs">
            100% NGUYÊN CHẤT - SẠCH TỪ NGUỒN - THU HOẠCH THỦ CÔNG
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {/* CTA 1 */}
            <a
              href="https://zalo.me/0931035448"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "Inter, sans-serif" }}
              className="flex items-center justify-center
                text-base sm:text-lg md:text-xl
                bg-[#F0A523] hover:bg-[#D8941E] text-white
                px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4
                rounded-full font-semibold
                transition-all duration-300
                hover:shadow-lg hover:scale-[1.02]"
            >
              Mua ngay
            </a>

            {/* CTA 2 */}
            <a
              href="#products"
              style={{ fontFamily: "Inter, sans-serif" }}
              className="flex items-center justify-center
                text-base sm:text-lg md:text-xl
                border-2 border-[#c78a1b] text-[#583613]
                px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4
                rounded-full font-semibold
                hover:bg-[#c78a1b] hover:text-white
                transition-all duration-300"
            >
              Xem sản phẩm
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
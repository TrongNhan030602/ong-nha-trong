"use client";

import Image from "next/image";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-white">
      {/* Row 1 */}
      <div className="bg-[#3A2A1A] pt-14 pb-12">
        <div className="max-w-[1080px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr_220px] gap-10">
            {/* Column 1 */}
            <div className="space-y-6 col-span-2 md:col-span-1">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/logo.png"
                  alt="Ong nhà Trọng"
                  width={48}
                  height={48}
                  className="object-contain"
                />

                <span className="text-2xl font-bold uppercase">
                  Ong nhà Trọng
                </span>
              </div>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/p/Ong-nh%C3%A0-Tr%E1%BB%8Dng-61564911982011/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#5C98BA]
                px-8 py-2.5 rounded-full w-fit
                transition-colors duration-300
                hover:bg-[#f4f4f4]"
              >
                <FaFacebook />

                <span className="uppercase font-medium">
                  Follow us on Facebook
                </span>
              </a>

              {/* Hotline */}
              <a
                href="https://zalo.me/0931035448"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#3AB745]
                border border-[#3AB745]
                px-8 py-2.5 rounded-full w-fit
                transition-colors duration-300
                hover:bg-[#f4f4f4]"
              >
                <FaPhoneAlt />

                <span className="uppercase font-medium">
                  Hotline: 0931035448 - 0907727890
                </span>
              </a>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-bold mb-5 text-[#C98B2F]">
                Liên kết nhanh
              </h3>

              <ul className="space-y-4 text-sm text-[#F6B73C]">
                <li>
                  <a
                    href="#hero"
                    className="hover:text-white transition"
                  >
                    Trang chủ
                  </a>
                </li>

                <li>
                  <a
                    href="#products"
                    className="hover:text-white transition"
                  >
                    Sản phẩm
                  </a>
                </li>

                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition"
                  >
                    Về chúng tôi
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition"
                  >
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-bold mb-5 text-[#C98B2F]">
                Hỗ trợ
              </h3>

              <ul className="space-y-4 text-[#F6B73C] text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition"
                  >
                    Chính sách đổi trả
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-white transition"
                  >
                    Chính sách bảo mật
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-white transition"
                  >
                    Hướng dẫn mua hàng
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-white transition"
                  >
                    Câu hỏi thường gặp
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Video */}
            <div className="flex justify-start md:justify-center col-span-2 md:col-span-1">
              <div
                className="relative overflow-hidden rounded-xl
                border border-[#C98B2F]/30 bg-black
                w-full max-w-[220px] md:w-[220px]
                aspect-video shadow-xl"
              >
                <video
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source
                    src="/video/video-footer.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="bg-[#C9AF7A] border-t border-[#d6c3a2]">
        <div className="max-w-[1080px] mx-auto px-4 py-4 text-center text-black text-sm">
          © 2026 Thương hiệu mật ong
        </div>
      </div>
    </footer>
  );
}

export default Footer;
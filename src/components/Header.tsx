"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
function Header() {
  const LINK_ORDER = "https://zalo.me/0931035448";
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#c9af7a] h-[72px] flex items-center  top-0 z-50">
      <div className="max-w-[1081px] mx-auto w-full flex items-center justify-between px-4">
        {/* Left */}
        <a
          href="https://www.facebook.com/p/Ong-nh%C3%A0-Tr%E1%BB%8Dng-61564911982011"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
        >
          <Image
            src="/assets/logo.png"
            alt="Logo Ong Nhà Trọng"
            width={48}
            height={48}
            className="object-contain"
          />
          <span className="text-xl lg:text-2xl font-bold text-white">
            ONG NHÀ TRỌNG
          </span>
        </a>

        {/* Desktop Menu */}
        <nav
          className="hidden md:flex items-center gap-10 text-white"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <a
            href="#hero"
            className="hover:opacity-80 transition"
          >
            Trang chủ
          </a>

          <a
            href="#products"
            className="hover:opacity-80 transition"
          >
            Sản phẩm
          </a>

          <a
            href="#about"
            className="hover:opacity-80 transition"
          >
            Về chúng tôi
          </a>

          <a
            href="#contact"
            className="hover:opacity-80 transition"
          >
            Liên hệ
          </a>
        </nav>

        {/* Desktop Button */}
        <a
          href={LINK_ORDER}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex w-[160px] h-[34px] bg-[#F0A523] hover:bg-[#D8941E]
          text-white rounded-full font-semibold
          hover:shadow-sm
          items-center justify-center cursor-pointer
          transition-colors duration-300 ease-in-out"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Mua ngay
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden cursor-pointer text-white text-2xl"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-2xl
  transform transition-transform duration-300 ease-out
  ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Top */}
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={36}
              height={36}
            />
            <span className="font-bold text-lg text-gray-800">
              Ong Nhà Trọng
            </span>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-2xl text-gray-600 hover:text-black transition"
          >
            <FiX />
          </button>
        </div>

        {/* Menu */}

        <nav
          className="flex flex-col px-6 py-6 text-gray-700"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            className="py-3 px-3 rounded-lg hover:bg-gray-100 transition"
          >
            Trang chủ
          </a>

          <a
            href="#products"
            onClick={() => setOpen(false)}
            className="py-3 px-3 rounded-lg hover:bg-gray-100 transition"
          >
            Sản phẩm
          </a>

          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="py-3 px-3 rounded-lg hover:bg-gray-100 transition"
          >
            Về chúng tôi
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="py-3 px-3 rounded-lg hover:bg-gray-100 transition"
          >
            Liên hệ
          </a>

          {/* CTA */}
          <a
            href={LINK_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full h-[44px] flex items-center justify-center
            bg-[#F0A523] hover:bg-[#D8941E]
            text-white rounded-full font-semibold
            transition-all duration-300 shadow-md hover:shadow-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Mua ngay
          </a>
        </nav>

        {/* Footer small */}
        <div className="absolute bottom-6 left-6 text-xs text-gray-400">
          © 2026 Ong Nhà Trọng
        </div>
      </div>
    </header>
  );
}

export default Header;

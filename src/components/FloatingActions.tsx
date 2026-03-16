"use client";

import { useEffect, useState } from "react";
import { FaChevronUp, FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

import { floatingActions } from "@/data/floating-actions";

function FloatingActions() {
  const [showTop, setShowTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const btn =
    "group relative w-12 h-12 flex items-center justify-center rounded-full shadow-md transition-transform duration-500 ease-out hover:scale-[1.04]";

  const tooltip =
    "absolute right-full mr-3 px-3 py-1 text-sm rounded-md bg-black/85 text-white opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap";

  return (
    <div className="fixed bottom-8 right-6 z-50 flex flex-col gap-3">
      {/* Facebook */}
      <a
        href={floatingActions.facebook.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btn} bg-[#1877F2] text-white hover:shadow-[0_8px_18px_rgba(24,119,242,0.35)]`}
        style={{ animation: "softPulse 3.2s ease-in-out infinite" }}
      >
        <FaFacebookF size={18} />
        <span className={tooltip}>{floatingActions.facebook.tooltip}</span>
      </a>

      {/* Zalo */}
      <a
        href={floatingActions.zalo.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btn} bg-white text-[#0068FF] ring-1 ring-[#0068FF]/25 hover:shadow-[0_8px_18px_rgba(0,104,255,0.25)]`}
        style={{ animation: "softPulse 3.2s ease-in-out infinite" }}
      >
        <SiZalo size={24} />
        <span className={tooltip}>{floatingActions.zalo.tooltip}</span>
      </a>

      {/* Scroll Top */}
      {showTop && (
        <button
          onClick={scrollTop}
          className="group relative w-11 h-11 flex items-center justify-center rounded-full
          bg-gray-700/90 text-white shadow-sm
          transition-all duration-300 hover:bg-gray-800 hover:-translate-y-0.5 cursor-pointer"
        >
          <FaChevronUp size={16} />
          <span className={tooltip}>Lên đầu trang</span>
        </button>
      )}
    </div>
  );
}

export default FloatingActions;
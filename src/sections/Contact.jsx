"use client";

import Image from "next/image";
import { contactItems } from "@/data/contact";

function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-[320px] lg:min-h-[400px] flex items-start py-12 overflow-hidden"
    >
      {/* Thumb */}
      <Image
        src="/assets/thumb-contact.webp"
        alt="Liên hệ mật ong"
        width={600}
        height={500}
        className="absolute left-0 top-0 h-full w-auto max-w-none object-contain opacity-25 md:opacity-40 lg:opacity-100 pointer-events-none"
      />

      <div className="relative max-w-[1080px] mx-auto w-full px-4">
        <div className="max-w-[560px] ml-auto">
          {/* Title */}
          <h2
            className="text-4xl md:text-5xl font-semibold text-[#673200] mb-10"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Liên hệ
          </h2>

          {/* Contact info */}
          <div className="space-y-6 mb-10">
            {contactItems.map((item, index) => {
              if (item.link) {
                return (
                  <a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                      <Image
                        src={item.iconSrc}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>

                    <div>
                      <p
                        className="font-semibold text-lg md:text-xl text-black"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {item.title}
                      </p>

                      <p className="text-black leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </a>
                );
              }

              return (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
                    <Image
                      src={item.iconSrc}
                      alt={item.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <p
                      className="font-semibold text-lg md:text-xl text-black"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {item.title}
                    </p>

                    <p className="text-black leading-relaxed">{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="https://zalo.me/0931035448"
            target="_blank"
            rel="noopener noreferrer"
            className="md:ml-22 inline-block bg-white text-[#F0A523] border border-[#F0A523] px-8 md:px-12 py-2.5 md:py-4 rounded-full font-semibold text-xl transition-all duration-300 hover:bg-[#F0A523] hover:text-white hover:shadow-xl"
          >
            Liên hệ đặt hàng ngay
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

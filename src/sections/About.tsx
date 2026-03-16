import Image from "next/image";

function About() {
  const LINK_MORE =
    "https://www.facebook.com/p/Ong-nh%C3%A0-Tr%E1%BB%8Dng-61564911982011";

  return (
    <section
      id="about"
      className="py-6"
    >
      <div className="max-w-[1080px] mx-auto px-4 grid md:grid-cols-3 gap-6 items-center">
        {/* Image */}
        <div className="md:col-span-1">
          <Image
            src="/assets/left-about-img.webp"
            alt="Thu hoạch mật ong tự nhiên"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Content */}
        <div className="md:col-span-2">
          <h2
            className="text-4xl md:text-5xl leading-tight font-semibold text-[#673200] mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Thu Hoạch Từ Thiên Nhiên – Giữ Trọn Hương Vị Nguyên Bản
          </h2>

          <p
            className="text-black mb-3 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Khởi nguồn từ niềm đam mê nuôi ong và khát vọng tạo ra sản phẩm
            sạch, Ong Nhà Trọng lựa chọn mô hình bán tự nhiên – tạo môi trường
            sống phù hợp để đàn ong tự do hút mật từ những vùng hoa đặc trưng
            của Cần Thơ.
          </p>

          <p
            className="text-black mb-3 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Chúng tôi không can thiệp hóa chất, không pha tạp, chỉ gìn giữ những
            giọt mật tinh khiết nhất như cách thiên nhiên ban tặng. Mỗi hũ mật
            ong là sự kết tinh của nắng, hoa và tâm huyết – mang đến vị ngọt
            thanh lành và an toàn cho sức khỏe gia đình bạn.
          </p>

          <a
            href={LINK_MORE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block
            bg-[#F0A523] hover:bg-[#D8941E]
            text-white text-xl
            px-14 py-3.5
            rounded-full font-bold
            shadow-[0_2px_0_rgba(0,0,0,0.15),0_6px_10px_rgba(0,0,0,0.15)]
            hover:shadow-[0_1px_0_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.2)]
            transition-all duration-200
            cursor-pointer"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Tìm hiểu thêm
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

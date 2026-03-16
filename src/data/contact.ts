export type ContactItem = {
  iconSrc: string;
  title: string;
  content: string;
  link?: string;
};

export const contactItems: ContactItem[] = [
  {
    iconSrc: "/assets/contact-icon-1.png",
    title: "Hotline",
    content: "0931035448 (Trọng) hoặc 0907727890 (Ngân)",
  },
  {
    iconSrc: "/assets/contact-icon-2.png",
    title: "Địa chỉ",
    content: "Số 23/6, Khu vực 1 (Trà Nóc), Phường Thới An Đông, TP Cần Thơ",
  },
  {
    iconSrc: "/assets/contact-icon-3.png",
    title: "Mail",
    content: "ongnhatrong@gmail.com",
    link: "mailto:ongnhatrong@gmail.com",
  },
  {
    iconSrc: "/assets/contact-icon-4.png",
    title: "Facebook",
    content: "Ong nhà Trọng",
    link: "https://www.facebook.com/p/Ong-nh%C3%A0-Tr%E1%BB%8Dng-61564911982011/",
  },
];
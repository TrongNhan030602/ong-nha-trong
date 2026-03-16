export interface Review {
  id: number;
  name: string;
  avatar: string;
  content: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Nguyễn Minh Tuấn",
    avatar: "/assets/testimonials/user1.webp",
    content:
      "Mật ong rất thơm và nguyên chất. Gia đình mình dùng mỗi sáng với nước ấm, cảm thấy khỏe hơn rõ rệt.",
  },
  {
    id: 2,
    name: "Trần Thu Hà",
    avatar: "/assets/testimonials/user2.webp",
    content:
      "Đóng gói rất đẹp, mật ong có mùi hoa tự nhiên. Mình mua làm quà biếu ai cũng khen.",
  },
  {
    id: 3,
    name: "Lê Hoàng Nam",
    avatar: "/assets/testimonials/user3.webp",
    content:
      "Đã thử nhiều loại mật ong nhưng loại này vị thanh và không gắt. Sẽ tiếp tục ủng hộ.",
  },
  {
    id: 4,
    name: "Phạm Ngọc Anh",
    avatar: "/assets/testimonials/user4.webp",
    content:
      "Giao hàng nhanh, mật ong chất lượng tốt. Pha trà chanh mật ong rất ngon.",
  },
];
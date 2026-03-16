export type FloatingActionItem = {
  name: string;
  href: string;
  tooltip: string;
};

export const floatingActions: Record<string, FloatingActionItem> = {
  facebook: {
    name: "facebook",
    href: "https://www.facebook.com/p/Ong-nh%C3%A0-Tr%E1%BB%8Dng-61564911982011",
    tooltip: "Facebook",
  },
  zalo: {
    name: "zalo",
    href: "https://zalo.me/0931035448",
    tooltip: "Chat Zalo",
  },
};
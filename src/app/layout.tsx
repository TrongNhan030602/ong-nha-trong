import type { Metadata } from "next";
import { Inter, Playfair_Display, Roboto_Condensed } from "next/font/google";
import ReduxProvider from "@/lib/redux/slices/provider";
import ToastProvider from "@/components/ui/ToastProvider";
import { appConfig } from "@/config/app.config";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin", "latin-ext"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ong-nha-trong.design24.vn"),

  title: appConfig.name,
  description: appConfig.description,

  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },

  openGraph: {
    title: appConfig.name,
    description: appConfig.description,
    url: "https://ong-nha-trong.design24.vn",
    siteName: appConfig.name,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body
        className={`${inter.variable} ${playfair.variable} ${robotoCondensed.variable} antialiased font-sans`}
      >
        <ReduxProvider>
          {children}
          <ToastProvider />
        </ReduxProvider>
      </body>
    </html>
  );
}
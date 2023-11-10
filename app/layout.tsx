import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Property",
  description: "A Property Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${roboto.className} selection:text-white selection:bg-black `}
      >
        {children}
      </body>
    </html>
  );
}

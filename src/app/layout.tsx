import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserratSans = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karya Mandiri Furniture",
  description: "Karya Mandiri Furniture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserratSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}

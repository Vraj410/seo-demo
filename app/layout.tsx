import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premium Shoe Store - Quality Footwear for Every Occasion",
  description: "Discover our curated collection of high-quality shoes. From casual comfort to formal elegance, find the perfect footwear for every occasion.",
  robots: "index, follow",
  alternates: {
    canonical: "https://yourshoestore.com",
    languages: {
      'en-US': 'https://yourshoestore.com',
      'es-ES': 'https://yourshoestore.com/es',
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Sans, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsletterSection from "@/components/landing/NewsLetterSection";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "CLeaning Services",
  description: "We've got all your cleaning and home services covered! Our fully vetted and highly experienced team are committed to delivering top-quality services. We know how important trust and reliability are to our customers, which is why we carefully choose only the best professionals to join our team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <Header />
      <body
        className={`${dmSans.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
      <NewsletterSection />
      <Footer />
    </html>
  );
}
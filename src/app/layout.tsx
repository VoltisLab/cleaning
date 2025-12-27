import type { Metadata } from "next";
import { DM_Sans, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// import NewsletterSection from "@/components/layout/NewsLetterSection";
import Newsletter from "@/components/layout/Newsletter";

import { ApolloProviderWrapper } from "@/lib/ApolloProviderWrapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  title: "Pebble Cleaning",
  description: "We've got all your cleaning and home services covered! Our fully vetted and highly experienced team are committed to delivering top-quality services. We know how important trust and reliability are to our customers, which is why we carefully choose only the best professionals to join our team.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${dmSans.variable} ${lato.variable} antialiased h-full`}
      >
        <ApolloProviderWrapper>
          <ToastContainer position="top-right" autoClose={3000} />
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Newsletter />
            <Footer />
          </div>
        </ApolloProviderWrapper>
      </body>
    </html>
  );
}
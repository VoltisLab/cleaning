import Heroes from "@/components/CleaningServices/Heroes";
import HowItWorks from "@/components/CleaningServices/HowItWorks";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Head>
        <title>Professional Cleaning Services</title>
        <meta
          name="description"
          content="Professional home and office cleaning services"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow mb-32">
        <Heroes />
        <div className="max-w-[1280px] mx-auto px-4 xl:px-8">
          <HowItWorks />
        </div>
      </main>
    </div>
  );
}

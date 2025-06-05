import Heroes from "@/components/CleaningServices/Heroes";
import HowItWorks from "@/components/CleaningServices/HowItWorks";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Professional Cleaning Services</title>
        <meta
          name="description"
          content="Professional home and office cleaning services"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}

      <main className="flex-grow mb-32">
        <Heroes />
        <div className="md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto px-4">
          <HowItWorks />
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

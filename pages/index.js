import Head from "next/head";

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Telly | Share all your socials with a tap</title>
        <meta
          name="description"
          content="Instantly share your Snapchat, Instagram, contact info & more when someone taps your Telly"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full text-white bg-gray-100">
        <Header />
        <Hero />
        <div className="px-5 font-bold text-center text-red-600">
          Our servers are undergoing routine maintenance. Check back later for
          the full website.
        </div>
        <Footer />
      </main>
    </>
  );
}

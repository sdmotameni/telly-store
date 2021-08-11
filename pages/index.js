import Head from "next/head";

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Hero from "../components/hero";
import Featured from "../components/featured";
import HowItWorks from "../components/howitworks";
import ProfileFeatures from "../components/profileFeatures";
import Doubts from "../components/doubts";
import Faq from "../components/faq";

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
      <Header />
      <main className="h-full m-2 text-white bg-white">
        <Hero />
        <Featured />
        <HowItWorks />
        <ProfileFeatures />
        <Doubts />
        <Faq />
        <Footer />
      </main>
    </>
  );
}

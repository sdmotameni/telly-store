import Head from "next/head";

import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Hero from "../components/hero";
import Featured from "../components/featured";
import HowItWorks from "../components/howitworks";
import ProfileFeatures from "../components/profileFeatures";
import TechFeature from "../components/techfeature";
import Doubts from "../components/doubts";
import HQ from "../components/hq";
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
      <main className="h-full text-white bg-white md:px-48">
        <div className="m-2">
          <Hero />
          <Featured />
          <HowItWorks />
          <ProfileFeatures />
          <TechFeature />
          <Doubts />
        </div>
        <Faq />
        <HQ />
        <Footer />
      </main>
    </>
  );
}

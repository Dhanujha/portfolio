import Head from "next/head";
import About from "../src/components/About";
import Contacts from "../src/components/Contacts";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Intro from "../src/components/Intro";
import PortFolio from "../src/components/PortFolio";
import Resume from "../src/components/Resume";
import Services from "../src/components/Services";

export default function Home() {
  return (
    <div id="top">
      <Head>
        <title>Dhanujha R - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Intro />
      <About />
      <Resume />
      <Services />
      <PortFolio />
      <Contacts />
      <Footer />
    </div>
  );
}

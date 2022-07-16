import Head from "next/head";
import Featured from "./components/featured";
import Intro from "./components/intro";
import Whyus from "./components/whyus";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amos ICT SERVICES</title>
        <meta name="description" content="AMOS ICT SERVICES" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Featured />
      <Whyus />
    </div>
  );
}

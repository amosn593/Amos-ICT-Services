import { useEffect } from "react";
import { useRouter } from "next/router";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "./components/footer";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import TopNav from "./components/topnav";
import Navigation from "./components/navigation";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);
  return (
    <div>
      <TopNav />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

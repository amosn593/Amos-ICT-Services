import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

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
      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="logo">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default MyApp;

import type { AppProps } from "next/app";

import "@fontsource/poppins";
import "@fontsource/poppins/500.css";

import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

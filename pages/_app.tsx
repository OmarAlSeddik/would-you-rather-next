// -- local components -- //
import Header from "../components/Header";
// -- next -- //
import type { AppProps } from "next/app";
import Head from "next/Head";
// -- providers -- //
import { ThemeContextProvider } from "../context/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;

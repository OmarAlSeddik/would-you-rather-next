// -- next -- //
import type { AppProps } from "next/app";
import Head from "next/Head";
// -- providers -- //
import { AppContextProvider } from "../context/AppContext";
// -- local components -- //
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;

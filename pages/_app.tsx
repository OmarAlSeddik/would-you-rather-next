// -- local components -- //
import Header from "../components/Header";
// -- next -- //
import type { AppProps } from "next/app";
import Head from "next/Head";
import { useRouter } from "next/dist/client/router";
// -- providers -- //
import { ThemeContextProvider } from "../context/ThemeContext";
// -- framer motion -- //
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const url = router.route;

  return (
    <ThemeContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        {url === "/auth" ? null : <Header />}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={url} />
      </AnimatePresence>
    </ThemeContextProvider>
  );
}

export default MyApp;

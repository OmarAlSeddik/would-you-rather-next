// next //
import type { AppProps } from "next/app";
import Header from "../components/Header";
// context //
import { ThemeContextProvider } from "../context/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Header />
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;

// next //
import type { AppProps } from "next/app";
// context //
import { ThemeContextProvider } from "../context/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;

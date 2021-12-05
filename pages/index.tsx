// -- local components -- //
import Home from "../components/Home";
import useHasMounted from "../hooks/useHasMounted";
// -- next -- //
import { NextPage } from "next";
import Head from "next/Head";
import { useRouter } from "next/dist/client/router";
// -- basic & custom hooks -- //
import { useContext, useEffect } from "react";
// -- context -- //
import AppContext from "../context/AppContext";

const HomePage: NextPage = () => {
  // -- routing -- //
  const context = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (!context.loggedInUserId) router.replace("/auth");
  }, [context.loggedInUserId, router]);

  // -- client only -- //
  const hasMounted = useHasMounted();
  if (!hasMounted) return null;

  return (
    <>
      <Head>
        <title>Would You Rather?</title>
        <meta
          name="description"
          content="The main page of the would you rather project."
        />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;

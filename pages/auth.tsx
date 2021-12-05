// -- local components -- //
import Auth from "../components/Auth";
// -- next -- //
import { NextPage } from "next";
import Head from "next/Head";
import { useRouter } from "next/dist/client/router";
// -- basic & custom hooks -- //
import { useContext, useEffect } from "react";
// -- context -- //
import AppContext from "../context/AppContext";

const AuthPage: NextPage = () => {
  // -- routing -- //
  const context = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (context.loggedInUserId) router.replace("/");
  }, [context.loggedInUserId, router]);

  return (
    <>
      <Head>
        <title>Auth Page</title>
        <meta name="description" content="The authentication page." />
      </Head>
      <Auth />
    </>
  );
};

export default AuthPage;

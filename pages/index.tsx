// -- local components -- //
import Home from "../components/Home";
import Loading from "../components/Loading";
// -- next -- //
import { NextPage } from "next";
import Head from "next/Head";
import { useRouter } from "next/dist/client/router";
// -- basic & custom hooks -- //
import { useEffect } from "react";
// -- firebase -- //
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const HomePage: NextPage = () => {
  // -- routing -- //
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user && !loading) router.replace("/auth");
  }, [loading, router, user]);

  if (loading) return <Loading />;

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

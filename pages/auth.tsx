// -- local components -- //
import Auth from "../components/Auth";
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

const AuthPage: NextPage = () => {
  // -- routing -- //
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) router.replace("/");
  }, [loading, router, user]);

  if (loading) return <Loading />;

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

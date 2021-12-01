// -- next -- //
import { NextPage } from "next";
import Head from "next/Head";
// -- local components -- //
import Auth from "../components/Auth";

const AuthPage: NextPage = () => {
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

// -- local components -- //
import AskQuestion from "../components/AskQuestion";
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

const AskQuestionPage: NextPage = () => {
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
        <title>Ask a Question</title>
        <meta name="description" content="Ask a question." />
      </Head>
      <AskQuestion />
    </>
  );
};

export default AskQuestionPage;

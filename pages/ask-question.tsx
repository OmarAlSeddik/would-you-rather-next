// -- local components -- //
import AskQuestion from "../components/Questions/AskQuestion";
// -- next -- //
import { NextPage } from "next";
import Head from "next/Head";
import { useRouter } from "next/dist/client/router";
// -- basic & custom hooks -- //
import { useContext, useEffect } from "react";
// -- context -- //
import AppContext from "../context/AppContext";

const AskQuestionPage: NextPage = () => {
  // -- routing -- //
  const context = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (!context.loggedInUserId) router.replace("/auth");
  }, [context.loggedInUserId, router]);

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

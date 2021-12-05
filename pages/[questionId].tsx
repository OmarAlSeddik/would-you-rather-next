// -- local components -- //
import AnswerQuestion from "../components/Questions/AnswerQuestion";
// -- next -- //
import { NextPage } from "next";
import Head from "next/Head";
import { useRouter } from "next/dist/client/router";
// -- basic & custom hooks -- //
import { useContext, useEffect } from "react";
// -- context -- //
import AppContext from "../context/AppContext";

const AnswerQuestionPage: NextPage = () => {
  // -- routing -- //
  const context = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (!context.loggedInUserId) router.replace("/auth");
  }, [context.loggedInUserId, router]);

  return (
    <>
      <Head>
        <title>Answer a Question</title>
        <meta name="description" content="Answer a question." />
      </Head>
      <AnswerQuestion />
    </>
  );
};

export default AnswerQuestionPage;

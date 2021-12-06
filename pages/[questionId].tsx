// -- local components -- //
import AnswerQuestion from "../components/AnswerQuestion";
// -- next -- //
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
// -- basic & custom hooks -- //
import { useEffect } from "react";
// -- firebase -- //
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// -- framer motion -- //
import { motion } from "framer-motion";

const AnswerQuestionPage: NextPage = () => {
  // -- routing -- //
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user && !loading) router.replace("/auth");
  }, [loading, router, user]);

  const variants = {
    initial: { scale: 0 },
    animate: { scale: [0, 1.1, 0.9, 1] },
    exit: { scale: 0 },
    transition: { type: "spring", times: [0, 1, 1] },
  };

  return (
    <>
      <Head>
        <title>Answer a Question</title>
        <meta name="description" content="Answer a question." />
      </Head>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: "tween", times: [0, 0.5, 0.75, 1] }}
      >
        <AnswerQuestion />
      </motion.div>
    </>
  );
};

export default AnswerQuestionPage;

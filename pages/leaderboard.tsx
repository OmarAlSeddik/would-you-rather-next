// -- mui -- //
import { Box } from "@mui/system";
// -- local components -- //
import Leaderboard from "../components/Leaderboard";
import Loading from "../components/Loading";
// -- next -- //
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
// -- basic & custom hooks -- //
import { useEffect } from "react";
// -- firebase -- //
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// -- framer motion -- //
import { motion } from "framer-motion";

const LeaderboardPage: NextPage = () => {
  // -- routing -- //
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user && !loading) router.replace("/auth");
  }, [loading, router, user]);

  if (loading) return <Loading />;

  const variants = {
    initial: { x: "100vw" },
    animate: { x: 0 },
    exit: { x: "100vw" },
  };

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Head>
        <title>Leaderboard</title>
        <meta name="description" content="The user leaderboard." />
      </Head>
      <Box
        component={motion.div}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Leaderboard />
      </Box>
    </Box>
  );
};

export default LeaderboardPage;

// -- local components -- //
import Leaderboard from "../components/Leaderboard";
// -- next -- //
import { NextPage } from "next";
import Head from "next/Head";
import { useRouter } from "next/dist/client/router";
// -- basic & custom hooks -- //
import { useContext, useEffect } from "react";
// -- context -- //
import AppContext from "../context/AppContext";

const LeaderboardPage: NextPage = () => {
  // -- routing -- //
  const context = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (!context.loggedInUserId) router.replace("/auth");
  }, [context.loggedInUserId, router]);

  return (
    <>
      <Head>
        <title>Leaderboard</title>
        <meta name="description" content="The user leaderboard." />
      </Head>
      <Leaderboard />
    </>
  );
};

export default LeaderboardPage;

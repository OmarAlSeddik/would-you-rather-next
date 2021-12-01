// -- next -- //
import { NextPage } from "next";
import Head from "next/Head";
// -- local components -- //
import Leaderboard from "../components/Leaderboard";

const LeaderboardPage: NextPage = () => {
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

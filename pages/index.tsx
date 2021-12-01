// -- next -- //
import { NextPage } from "next";
import Head from "next/Head";
// -- local components -- //
import Home from "../components/Home";

const HomePage: NextPage = () => {
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

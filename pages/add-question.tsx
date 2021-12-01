// -- next -- //
import { NextPage } from "next";
import Head from "next/Head";
// -- local components -- //
import AddQuestion from "../components/Questions/AskQuestion";

const AddQuestionPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Add a Question</title>
        <meta name="description" content="Add a question to the database." />
      </Head>
      <AddQuestion />
    </>
  );
};

export default AddQuestionPage;

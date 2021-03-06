// -- mui -- //
import { Card, Stack } from "@mui/material";
// -- local component -- //
import Head from "./Head";
import UnansweredBody from "./UnansweredBody";
import AnsweredBody from "./AnsweredBody";
import Loading from "../Loading";
import NotFound from "../NotFound";
// -- next -- //
import { useRouter } from "next/dist/client/router";
// -- basic & custom hooks -- //
import { useRef } from "react";
import useUser from "../../hooks/useUser";
import useQuestion from "../../hooks/useQuestion";

const AnswerQuestion = () => {
  const [user, loadingUser] = useUser();
  const questionId = useRef(useRouter().query).current.questionId;
  const [question, loadingQuestion] = useQuestion(questionId as string);
  const userPreviouslyAnswered = user?.votes?.hasOwnProperty(questionId);

  if (question === null) return <NotFound />;
  if (loadingUser || loadingQuestion) return <Loading loadingQuestion={true} />;

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ height: { xs: "85vh", md: "100vh" } }}
    >
      <Card
        raised
        sx={{
          width: "56.25rem",
          maxWidth: "100vw",
          marginTop: { xs: "3rem", md: 0 },
        }}
      >
        <Head question={question} />
        {userPreviouslyAnswered ? (
          <AnsweredBody user={user} question={question} />
        ) : (
          <UnansweredBody user={user} question={question} />
        )}
      </Card>
    </Stack>
  );
};

export default AnswerQuestion;

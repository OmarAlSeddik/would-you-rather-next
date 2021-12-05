// -- mui -- //
import { Card, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
// -- local component -- //
import Head from "./Head";
import UnansweredBody from "./UnansweredBody";
import AnsweredBody from "./AnsweredBody";
// -- next -- //
import { useRouter } from "next/dist/client/router";
// -- basic & custom hooks -- //
import useUser from "../../../hooks/useUser";
import useQuestion from "../../../hooks/useQuestion";

const AnswerQuestion = () => {
  const [user, loadingUser] = useUser();
  const { questionId } = useRouter().query;
  const [question, loadingQuestion] = useQuestion(questionId as string);
  const userPreviouslyAnswered = user?.votes?.hasOwnProperty(questionId);

  if (loadingUser || loadingQuestion) return <CircularProgress />;

  return (
    <Box sx={{ height: "100vh" }}>
      <Card
        raised
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "56.25rem",
          maxWidth: "100vw",
          marginTop: "3.25rem",
          borderRadius: { xs: 0, md: "8px" },
        }}
      >
        <Head question={question} />
        {userPreviouslyAnswered ? (
          <AnsweredBody user={user} question={question} />
        ) : (
          <UnansweredBody user={user} question={question} />
        )}
      </Card>
    </Box>
  );
};

export default AnswerQuestion;

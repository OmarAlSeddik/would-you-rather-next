// -- mui -- //
import { Stack, Typography } from "@mui/material";
// -- local component -- //
import Question from "./Question";

const Answered = (props: any) => {
  return (
    <Stack sx={{ padding: "1rem 1rem 0" }}>
      {props.questions
        .filter(
          (question: any) =>
            props.user.votes && props.user.votes.hasOwnProperty(question.id)
        )
        .map((question: any) => (
          <Question
            key={question.id}
            id={question.id}
            option1={question.option1}
            author={question.author}
            avatar={question.avatar}
          />
        ))}
      {props.questions.filter(
        (question: any) =>
          props.user.votes && props.user.votes.hasOwnProperty(question.id)
      ).length === 0 && (
        <Typography
          align="center"
          variant="h4"
          component="p"
          sx={{ marginBottom: "1rem", color: "text.secondary" }}
        >
          You haven&apos;t answered any questions yet.
        </Typography>
      )}
    </Stack>
  );
};

export default Answered;

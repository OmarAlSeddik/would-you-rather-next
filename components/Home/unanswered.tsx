// mui imports //
import { Stack, Typography } from "@mui/material";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";

const Unanswered = (props: any) => {
  return (
    <Stack alignItems="center" sx={{ padding: "1rem 1rem 0" }}>
      <QuizRoundedIcon
        sx={{ width: "10rem", height: "10rem", color: "text.secondary" }}
      />
      <Typography
        align="center"
        variant="h4"
        component="p"
        sx={{ marginBottom: "1rem", color: "text.secondary" }}
      >
        There are no more questions for you to answer.
      </Typography>
    </Stack>
  );
};

export default Unanswered;

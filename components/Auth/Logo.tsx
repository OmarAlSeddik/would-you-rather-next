// -- mui -- //
import { Stack, Typography } from "@mui/material";
import QuestionAnswerTwoToneIcon from "@mui/icons-material/QuestionAnswerTwoTone";

const Logo = () => {
  return (
    <Stack direction="row">
      <QuestionAnswerTwoToneIcon color="primary" fontSize="large" />
      <Typography
        color="primary"
        variant="h4"
        component="h1"
        sx={{ fontFamily: "lobster", marginBottom: "1rem" }}
      >
        Would You Rather?
      </Typography>
    </Stack>
  );
};

export default Logo;

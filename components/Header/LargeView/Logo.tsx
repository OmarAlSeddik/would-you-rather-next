// -- mui -- //
import { Stack, Typography } from "@mui/material";
import QuestionAnswerTwoToneIcon from "@mui/icons-material/QuestionAnswerTwoTone";

const Logo = () => {
  return (
    <Stack direction="row" alignItems="center">
      <QuestionAnswerTwoToneIcon color="primary" fontSize="small" />
      <Typography
        color="primary"
        variant="h6"
        component="h2"
        sx={{ fontFamily: "lobster" }}
      >
        Would You Rather?
      </Typography>
    </Stack>
  );
};

export default Logo;

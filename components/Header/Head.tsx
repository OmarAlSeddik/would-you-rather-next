// -- mui -- //
import {
  Avatar,
  ButtonBase,
  Card,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import QuestionAnswerTwoToneIcon from "@mui/icons-material/QuestionAnswerTwoTone";

const Head = () => {
  return (
    <Paper sx={{ borderRadius: 0 }}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ padding: "0.5rem 0", width: "90%", margin: "0 auto" }}
      >
        <QuestionAnswerTwoToneIcon color="primary" />
        <Typography
          color="primary"
          variant="h5"
          component="h2"
          sx={{ fontFamily: "lobster" }}
        >
          Would You Rather?
        </Typography>
        <ButtonBase
          disableRipple
          sx={{ textTransform: "none", marginLeft: "auto" }}
        >
          <Card>
            <Stack direction="row" alignItems="center">
              <Avatar variant="square">O</Avatar>
              <Typography sx={{ padding: "0 0.5rem" }}>[username]</Typography>
            </Stack>
          </Card>
        </ButtonBase>
      </Stack>
    </Paper>
  );
};

export default Head;

// -- mui -- //
import { CircularProgress, Stack, Typography } from "@mui/material";
// -- basic & custom hooks -- //
import { useMemo } from "react";

const Loading = (props: any) => {
  const loading = useMemo(() => {
    if (props.loadingQuestions) return "Loading Questions...";
    if (props.loadingQuestion) return "Loading Question...";
    if (props.loadingUsers) return "Loading Users...";
    return "Loading...";
  }, [props.loadingQuestion, props.loadingQuestions, props.loadingUsers]);

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Typography variant="h2" component="p">
        {loading}
      </Typography>
      <CircularProgress size={"10vh"} />
    </Stack>
  );
};

export default Loading;

import { CircularProgress, Stack, Typography } from "@mui/material";

const Loading = (props: any) => {
  const loading = () => {
    if (props.loadingQuestions) return "Loading Questions...";
    if (props.loadingUsers) return "Loading Users...";
    return "Loading...";
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Typography variant="h2" component="p">
        {loading()}
      </Typography>
      <CircularProgress size={100} />
    </Stack>
  );
};

export default Loading;

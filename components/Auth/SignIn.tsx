import { LoadingButton } from "@mui/lab";
import { Button, Card, Stack, TextField, Typography } from "@mui/material";

const SignIn = (props: any) => {
  return (
    <Card
      raised
      sx={{
        width: "21rem",
        maxWidth: "100vw",
        padding: "1rem 2rem",
        marginBottom: "1rem",
      }}
    >
      <Stack>
        <Typography
          align="center"
          variant="h6"
          component="h2"
          sx={{ marginBottom: "0.5rem" }}
        >
          Sign Into Your Account
        </Typography>
        <TextField
          size="small"
          id="email"
          label="Email"
          helperText="Requires a valid email format."
          sx={{ marginBottom: "0.5rem" }}
        />
        <TextField
          size="small"
          id="password"
          label="Password"
          helperText="Needs to be at least 6 characters long."
          sx={{ marginBottom: "0.5rem" }}
        />
        <LoadingButton
          variant="contained"
          loadingPosition="end"
          sx={{ textTransform: "none", marginBottom: "0.5rem" }}
        >
          Sign In
        </LoadingButton>
        <Button
          disableRipple
          variant="text"
          size="small"
          sx={{ textTransform: "none" }}
          onClick={props.handleToggleSignIn}
        >
          Create a new account
        </Button>
      </Stack>
    </Card>
  );
};

export default SignIn;

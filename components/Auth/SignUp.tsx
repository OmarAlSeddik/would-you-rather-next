import { LoadingButton } from "@mui/lab";
import { Button, Card, Stack, TextField, Typography } from "@mui/material";

const SignUp = (props: any) => {
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
          Sign Up
        </Typography>
        <TextField
          size="small"
          id="username"
          label="Username"
          helperText="No restrictions. Doesn't have to be unique."
          sx={{ marginBottom: "0.5rem" }}
        />
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
          Sign Up
        </LoadingButton>
        <Button
          variant="text"
          size="small"
          sx={{ textTransform: "none" }}
          onClick={props.handleToggleSignIn}
        >
          Sign into an existing account
        </Button>
      </Stack>
    </Card>
  );
};

export default SignUp;

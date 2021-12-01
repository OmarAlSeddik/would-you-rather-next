// -- mui -- //
import {
  Button,
  Card,
  MenuItem,
  TextField,
  Typography,
  Avatar,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// -- basic & custom hooks -- //
import useAvatars from "../../hooks/useAvatars";
// -- axios -- //
import axios from "axios";
// -- formik & yup -- //
import { useFormik } from "formik";
import * as yup from "yup";
// -- firebase -- //
import { auth } from "../../firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignUp = (props: any) => {
  const avatars = useAvatars();

  const [createUserWithEmailAndPassword, user, loading, databaseError] =
    useCreateUserWithEmailAndPassword(auth);

  const formik = useFormik({
    initialValues: { username: "", avatar: "1", email: "", password: "" },

    validationSchema: yup.object({
      username: yup.string().required("Username is required."),
      email: yup
        .string()
        .email("Enter a valid email.")
        .required("Email is required."),
      password: yup
        .string()
        .min(8, "Password should be at least 8 characters long.")
        .required("Password is required."),
    }),

    onSubmit: (values) => {
      createUserWithEmailAndPassword(values.email, values.password);
    },
  });

  // -- error handling -- //
  const emailInUse =
    databaseError &&
    databaseError.message === "Firebase: Error (auth/email-already-in-use).";

  const usernameError = formik.touched.username && !!formik.errors.username;
  const usernameHelperText =
    (formik.touched.username && formik.errors.username) ||
    "No restrictions. Doesn't have to be unique.";

  const emailError =
    (formik.touched.email && !!formik.errors.email) || emailInUse;
  const emailHelperText =
    (formik.touched.email && formik.errors.email) ||
    (emailInUse && "Email already in use.") ||
    "Requires a valid email format.";

  const passwordError = formik.touched.password && !!formik.errors.password;
  const passwordHelperText =
    (formik.touched.password && formik.errors.password) ||
    "Needs to be at least 8 characters long.";

  // -- runs if the sign up process is successful -- //
  if (user) {
    axios.put(
      `https://would-you-rather-next-default-rtdb.firebaseio.com/users/${user.user.uid}.json`,
      {
        username: formik.values.username,
        avatar: formik.values.avatar,
      }
    );

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
        <Typography
          variant="h6"
          component="h2"
          align="center"
          sx={{ color: "success.main", marginBottom: "0.5rem" }}
        >
          Your account has been created successfully!
        </Typography>
        <Button
          fullWidth
          variant="contained"
          sx={{ textTransform: "none" }}
          onClick={props.handleToggleSignIn}
        >
          Sign In
        </Button>
      </Card>
    );
  }

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
      <Typography
        align="center"
        variant="h6"
        component="h2"
        sx={{ marginBottom: "0.5rem" }}
      >
        Sign Up
      </Typography>
      <form onReset={formik.handleReset} onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          size="small"
          sx={{ marginBottom: "0.5rem" }}
          id="username"
          name="username"
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={usernameError}
          helperText={usernameHelperText}
        />
        <TextField
          fullWidth
          select
          size="small"
          sx={{ marginBottom: "0.5rem" }}
          id="avatar"
          name="avatar"
          label="Avatar"
          value={formik.values.avatar}
          onChange={formik.handleChange}
          helperText="Select your avatar."
        >
          {avatars.map((avatar: any) => (
            <MenuItem
              key={avatar.value}
              value={avatar.value}
              sx={{ margin: "0 auto" }}
            >
              <Avatar
                sx={{
                  width: "6rem",
                  height: "6rem",
                  margin: "0 auto",
                }}
              >
                {avatar.label}
              </Avatar>
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          size="small"
          sx={{ marginBottom: "0.5rem" }}
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={emailError}
          helperText={emailHelperText}
        />
        <TextField
          fullWidth
          size="small"
          sx={{ marginBottom: "0.5rem" }}
          id="password"
          name="password"
          type="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={passwordError}
          helperText={passwordHelperText}
        />
        <LoadingButton
          fullWidth
          variant="contained"
          loading={loading}
          sx={{ textTransform: "none", marginBottom: "0.5rem" }}
          type="submit"
        >
          {loading ? "Loading..." : "Sign Up"}
        </LoadingButton>
      </form>
      <Button
        fullWidth
        variant="text"
        size="small"
        sx={{ textTransform: "none" }}
        onClick={props.handleToggleSignIn}
      >
        Sign into an existing account
      </Button>
    </Card>
  );
};

export default SignUp;

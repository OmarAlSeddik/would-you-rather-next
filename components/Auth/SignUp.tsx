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
import { auth } from "../../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
// -- framer motion -- //
import { motion } from "framer-motion";
import { Box } from "@mui/system";

const SignUp = (props: any) => {
  const avatars = useAvatars();

  const [createUserWithEmailAndPassword, user, loading, databaseError] =
    useCreateUserWithEmailAndPassword(auth);

  const formik = useFormik({
    initialValues: { name: "", avatar: "1", email: "", password: "" },

    validationSchema: yup.object({
      name: yup
        .string()
        .max(14, "Name shouldn't be over 14 characters long.")
        .required("Name is required."),
      email: yup
        .string()
        .email("Enter a valid email.")
        .max(255, "That's a pretty long email...")
        .required("Email is required."),
      password: yup
        .string()
        .min(8, "Password should be at least 8 characters long.")
        .max(255, "Password length shouldn't exceed 255 characters.")
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

  const nameError = formik.touched.name && !!formik.errors.name;
  const nameHelperText =
    (formik.touched.name && formik.errors.name) ||
    "Max length: 14. Doesn't have to be unique.";

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

  const variants = {
    whileHover: { scale: 1.1 },
  };

  // -- runs if the sign up process is successful -- //
  if (user) {
    axios.put(
      `https://would-you-rather-next-default-rtdb.firebaseio.com/users/${user.user.uid}.json`,
      {
        id: user.user.uid,
        name: formik.values.name,
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
          component={motion.div}
          variants={variants}
          whileHover="whileHover"
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
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={nameError}
          helperText={nameHelperText}
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
        <Box component={motion.div} variants={variants} whileHover="whileHover">
          <LoadingButton
            fullWidth
            variant="contained"
            loading={loading}
            sx={{ textTransform: "none", marginBottom: "0.5rem" }}
            type="submit"
          >
            {loading ? "Loading..." : "Sign Up"}
          </LoadingButton>
        </Box>
      </form>
      <Button
        fullWidth
        variant="text"
        size="small"
        sx={{ textTransform: "none" }}
        onClick={props.handleToggleSignIn}
        component={motion.div}
        variants={variants}
        whileHover="whileHover"
      >
        Sign into an existing account
      </Button>
    </Card>
  );
};

export default SignUp;

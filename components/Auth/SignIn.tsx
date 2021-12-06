// -- mui -- //
import { Button, Card, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// -- formik & yup -- //
import { useFormik } from "formik";
import * as yup from "yup";
// -- firebase -- //
import { auth } from "../../firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
// -- framer motion -- //
import { motion } from "framer-motion";
import { Box } from "@mui/system";

const SignIn = (props: any) => {
  const [signInWithEmailAndPassword, user, loading, databaseError] =
    useSignInWithEmailAndPassword(auth);

  const formik = useFormik({
    initialValues: { email: "", password: "" },

    validationSchema: yup.object({
      email: yup
        .string()
        .email("Uh oh! You entered an invalid email!")
        .required("Email is required."),
      password: yup
        .string()
        .min(8, "Too short to be true...")
        .required("Password is required."),
    }),

    onSubmit: (values) => {
      signInWithEmailAndPassword(values.email, values.password);
    },
  });

  // -- error handling -- //
  const userNotFound =
    databaseError &&
    databaseError.message === "Firebase: Error (auth/user-not-found).";
  const disabled =
    databaseError &&
    databaseError.message ===
      "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).";
  const wrongPassword =
    databaseError &&
    databaseError.message === "Firebase: Error (auth/wrong-password).";

  const emailError =
    (formik.touched.email && !!formik.errors.email) || userNotFound || disabled;
  const emailHelperText =
    (formik.touched.email && formik.errors.email) ||
    (userNotFound && "User not found.") ||
    (disabled &&
      "Access temporarily disabled due to many failed login attempts.") ||
    "Requires a valid email format.";

  const passwordError =
    (formik.touched.password && !!formik.errors.password) || wrongPassword;
  const passwordHelperText =
    (formik.touched.password && formik.errors.password) ||
    (wrongPassword && "Wrong password.") ||
    "Needs to be at least 8 characters long.";

  const variants = {
    whileHover: { scale: 1.1 },
  };

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
      <form onSubmit={formik.handleSubmit}>
        <Typography
          align="center"
          variant="h6"
          component="h2"
          sx={{ marginBottom: "0.5rem" }}
        >
          Sign Into Your Account
        </Typography>
        <TextField
          fullWidth
          size="small"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={emailError}
          helperText={emailHelperText}
          sx={{ marginBottom: "0.5rem" }}
        />
        <TextField
          fullWidth
          size="small"
          id="password"
          name="password"
          type="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={passwordError}
          helperText={passwordHelperText}
          sx={{ marginBottom: "0.5rem" }}
        />
        <Box component={motion.div} variants={variants} whileHover="whileHover">
          <LoadingButton
            fullWidth
            variant="contained"
            loading={loading}
            sx={{ textTransform: "none", marginBottom: "0.5rem" }}
            type="submit"
          >
            {loading ? "Loading..." : "Sign In"}
          </LoadingButton>
        </Box>
      </form>
      <Button
        fullWidth
        disableRipple
        variant="text"
        size="small"
        sx={{ textTransform: "none" }}
        onClick={props.handleToggleSignIn}
        component={motion.div}
        variants={variants}
        whileHover="whileHover"
      >
        Create a new account
      </Button>
    </Card>
  );
};

export default SignIn;

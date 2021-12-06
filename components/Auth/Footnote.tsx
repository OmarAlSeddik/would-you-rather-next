// -- mui -- //
import { Typography, Stack, Link } from "@mui/material";
// -- framer motion -- //
import { motion } from "framer-motion";

const Footnote = (props: any) => {
  const variants = {
    whileHover: { scale: 1.1 },
  };

  const forgotPassword = (
    <Typography align="center">
      Forgot your password? Have a good think and try to remember.
    </Typography>
  );

  const avatarCredit = (
    <Stack alignItems="center">
      <Typography align="center">
        Avatar vectors created by:
        <Link
          target="_blank"
          href="https://www.freepik.com/pikisuperstar"
          rel="noopener noreferrer"
          sx={{ color: "primary.main", marginLeft: "0.5rem" }}
        >
          <Typography
            component={motion.div}
            variants={variants}
            whileHover="whileHover"
          >
            pikisuperstar
          </Typography>
        </Link>
      </Typography>
    </Stack>
  );

  return props.isSignIn ? forgotPassword : avatarCredit;
};

export default Footnote;

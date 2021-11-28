// mui imports //
import { Stack, Typography } from "@mui/material";
// local component imports //
import Demo from "./Demo";
import Logo from "./Logo";
import Or from "./Or";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
// hook imports //
import { useState } from "react";
import Footnote from "./Footnote";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggleSignIn = () => {
    setIsSignIn((previous) => !previous);
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Logo />
      <Demo />
      <Or />
      {isSignIn ? (
        <SignIn handleToggleSignIn={handleToggleSignIn} />
      ) : (
        <SignUp handleToggleSignIn={handleToggleSignIn} />
      )}
      <Footnote isSignIn={isSignIn} />
    </Stack>
  );
};

export default Auth;

// -- mui -- //
import { Stack } from "@mui/material";
// -- local components -- //
import Demo from "./Demo";
import Logo from "./Logo";
import Or from "./Or";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Footnote from "./Footnote";
// -- next -- //
import { useRouter } from "next/dist/client/router";
// -- basic & custom hooks -- //
import { useContext, useEffect, useState } from "react";
// -- context -- //
import AppContext from "../../context/AppContext";

const Auth = () => {
  // -- routing -- //
  const context = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (context.loggedInUserId) router.replace("/");
  }, [context.loggedInUserId, router]);

  // -- state -- //
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

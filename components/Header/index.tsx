// -- mui -- //
import { AppBar } from "@mui/material";
// -- local components -- //
import Head from "./Head";
import Navigation from "./Navigation";
// -- firebase -- //
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  if (!user) return <></>;

  return (
    <AppBar color="default" position="fixed">
      <Head />
      <Navigation />
    </AppBar>
  );
};

export default Header;

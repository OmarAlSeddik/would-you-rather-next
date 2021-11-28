import { AppBar } from "@mui/material";
import Head from "./Head";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <AppBar color="default" position="fixed">
      <Head />
      <Navigation />
    </AppBar>
  );
};

export default Header;

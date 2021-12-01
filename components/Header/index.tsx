// -- mui -- //
import { AppBar } from "@mui/material";
// -- local components -- //
import Head from "./Head";
import Navigation from "./Navigation";
// -- basic & custom hooks -- //
import { useContext } from "react";
// -- context -- //
import AppContext from "../../context/AppContext";

const Header = () => {
  const context = useContext(AppContext);

  if (!context.loggedInUserId) return <></>;

  return (
    <AppBar color="default" position="fixed">
      <Head />
      <Navigation />
    </AppBar>
  );
};

export default Header;

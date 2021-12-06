// -- mui -- //
import { Box, Divider, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
// -- local components -- //
import Logo from "./Logo";
import User from "./User";
import Navigation from "./Navigation";
import Github from "./Github";

const MobileView = () => {
  return (
    <>
      <Paper sx={{ width: "100vw", borderRadius: 0 }}>
        <Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
          <Logo />
          <Github />
          <User />
        </Stack>
        <Divider />
        <Navigation />
      </Paper>
    </>
  );
};

export default MobileView;

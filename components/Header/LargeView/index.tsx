// -- mui -- //
import { Paper, Stack } from "@mui/material";
// -- local components -- //
import Navigation from "./Navigation";
import Logo from "./Logo";
import User from "./User";
import Github from "./Github";

const LargeView = () => {
  return (
    <Paper sx={{ width: "100vw", borderRadius: 0 }}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ width: "95%", margin: "0 auto" }}
      >
        <Logo />
        <Navigation />
        <User />
        <Github />
      </Stack>
    </Paper>
  );
};

export default LargeView;

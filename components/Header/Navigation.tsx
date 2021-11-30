// -- mui -- //
import { Tab, Tabs } from "@mui/material";

const Navigation = () => {
  return (
    <Tabs
      variant="fullWidth"
      sx={{
        width: "35rem",
        maxWidth: "100vw",
        ".MuiTabs-indicator": {
          height: "100%",
          backgroundColor: "secondary.main",
        },
      }}
    >
      <Tab
        label="Home"
        disableRipple
        sx={{
          textTransform: "none",
          "&:hover": { color: "primary.main" },
        }}
      />
      <Tab
        label="Ask a Question"
        disableRipple
        sx={{
          textTransform: "none",
          "&:hover": { color: "primary.main" },
        }}
      />
      <Tab
        label="Leaderboard"
        disableRipple
        sx={{
          textTransform: "none",
          "&:hover": { color: "primary.main" },
        }}
      />
    </Tabs>
  );
};

export default Navigation;

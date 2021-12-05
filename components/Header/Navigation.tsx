// -- mui -- //
import { Tab, Tabs } from "@mui/material";
// -- next -- //
import { NextLinkComposed } from "../Link";
import { useRouter } from "next/dist/client/router";
// -- basic/custom hooks -- //
import { useEffect, useState } from "react";

const Navigation = () => {
  const pathname = useRouter().pathname;

  useEffect(() => {
    setPageValue(pathname);
  }, [pathname]);

  const [pageValue, setPageValue] = useState(pathname);

  const handlePageChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setPageValue(newValue);
  };

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
      value={pageValue}
      onChange={handlePageChange}
    >
      <Tab
        label="Home"
        disableRipple
        sx={{
          textTransform: "none",
          "&:hover": { color: "primary.main" },
        }}
        component={NextLinkComposed}
        to="/"
        value="/"
      />
      <Tab
        label="Ask a Question"
        disableRipple
        sx={{
          textTransform: "none",
          "&:hover": { color: "primary.main" },
        }}
        component={NextLinkComposed}
        to="/ask-question"
        value="/ask-question"
      />
      <Tab
        label="Leaderboard"
        disableRipple
        sx={{
          textTransform: "none",
          "&:hover": { color: "primary.main" },
        }}
        component={NextLinkComposed}
        to="/leaderboard"
        value="/leaderboard"
      />
    </Tabs>
  );
};

export default Navigation;

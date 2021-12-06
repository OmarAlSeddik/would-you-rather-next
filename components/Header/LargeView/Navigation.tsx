// -- mui -- //
import { Paper, Tab, Tabs } from "@mui/material";
// -- next -- //
import { NextLinkComposed } from "../../Link";
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
        width: "18rem",
        margin: "0 auto",
        ".MuiTabs-indicator": {
          height: "0",
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
          "&:hover": { color: "#000" },
          "&.Mui-selected": {
            color: "primary.main",
            fontWeight: "bold",
          },
        }}
        component={NextLinkComposed}
        to="/"
        value="/"
      />
      <Tab
        label="Ask"
        disableRipple
        sx={{
          textTransform: "none",
          "&:hover": { color: "#000" },
          "&.Mui-selected": {
            color: "primary.main",
            fontWeight: "bold",
          },
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
          "&:hover": { color: "#000" },
          "&.Mui-selected": {
            color: "primary.main",
            fontWeight: "bold",
          },
        }}
        component={NextLinkComposed}
        to="/leaderboard"
        value="/leaderboard"
      />
    </Tabs>
  );
};

export default Navigation;

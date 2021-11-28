// mui imports //
import { Card, Stack, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { Box } from "@mui/system";
// local component imports //
import Unanswered from "./unanswered";
import Answered from "./answered";
// hook imports //
import { useState } from "react";

const Home = () => {
  const [tapValue, setTabValue] = useState("unanswered");

  const handleTabValue = (
    event: React.MouseEvent<HTMLElement>,
    newTapValue: string | null
  ) => {
    if (newTapValue !== null) {
      setTabValue(newTapValue);
    }
  };

  return (
    <Box>
      <Card
        raised
        sx={{
          margin: "9rem auto 4.5rem",
          width: "56.25rem",
          maxWidth: "100vw",
          borderRadius: { xs: 0, md: "8px" },
        }}
      >
        <Stack>
          <ToggleButtonGroup
            color="primary"
            fullWidth
            exclusive
            value={tapValue}
            onChange={handleTabValue}
          >
            <ToggleButton
              disableRipple
              value="unanswered"
              sx={{ borderRadius: 0, textTransform: "none" }}
            >
              Unasnwered Questions
            </ToggleButton>
            <ToggleButton
              disableRipple
              value="answered"
              sx={{ borderRadius: 0, textTransform: "none" }}
            >
              Answered Questions
            </ToggleButton>
          </ToggleButtonGroup>
          {tapValue === "unanswered" ? <Unanswered /> : <Answered />}
        </Stack>
      </Card>
    </Box>
  );
};

export default Home;
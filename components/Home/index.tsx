// -- mui -- //
import { Card, Stack, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { Box } from "@mui/system";
// -- local components -- //
import Unanswered from "./unanswered";
import Answered from "./answered";
import Loading from "../Loading";
// -- basic & custom hooks -- //
import { useState } from "react";
import useUser from "../../hooks/useUser";
import useQuestions from "../../hooks/useQuestions";

const Home = () => {
  const [user, loadingUser] = useUser();
  const [questions, loadingQuestions] = useQuestions();

  const [tabValue, setTabValue] = useState("unanswered");

  const handleTabValue = (
    event: React.MouseEvent<HTMLElement>,
    newTabValue: string | null
  ) => {
    if (newTabValue !== null) {
      setTabValue(newTabValue);
    }
  };

  if (loadingUser || loadingQuestions)
    return <Loading loadingQuestions={true} />;

  const sortedQuestions = Object.values(questions).sort((a: any, b: any) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.valueOf() - dateA.valueOf();
  });

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
            value={tabValue}
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
          {tabValue === "unanswered" ? (
            <Unanswered user={user} questions={sortedQuestions} />
          ) : (
            <Answered user={user} questions={sortedQuestions} />
          )}
        </Stack>
      </Card>
    </Box>
  );
};

export default Home;

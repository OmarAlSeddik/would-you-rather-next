// -- mui -- //
import { Card, Typography, Stack, Divider, Table } from "@mui/material";
import { Box } from "@mui/system";
// -- local components -- //
import Body from "./Body";
import Head from "./Head";

const Leaderboard = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Card
        raised
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "56.25rem",
          maxWidth: "100vw",
          marginTop: "2rem",
          borderRadius: { xs: 0, md: "8px" },
        }}
      >
        <Stack>
          <Typography
            variant="h4"
            component="h1"
            align="center"
            sx={{
              padding: "1rem 0",
              color: "white",
              backgroundColor: "primary.main",
            }}
          >
            Leaderboard
          </Typography>
          <Divider />
          <Table>
            <Head />
            <Body />
          </Table>
        </Stack>
      </Card>
    </Box>
  );
};

export default Leaderboard;

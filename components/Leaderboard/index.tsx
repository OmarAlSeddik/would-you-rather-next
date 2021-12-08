// -- mui -- //
import { Card, Typography, Stack, Divider, Table } from "@mui/material";
import { Box } from "@mui/system";
// -- local components -- //
import Body from "./Body";
import Head from "./Head";
import Loading from "../Loading";
// -- basic/custom hooks -- //
import useUsers from "../../hooks/useUsers";

const Leaderboard = () => {
  const [users, loadingUsers] = useUsers();

  if (loadingUsers) return <Loading loadingUsers={true} />;

  return (
    <Card
      raised
      sx={{
        margin: "6rem auto 2rem",
        width: "56.25rem",
        maxWidth: "100vw",
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
          <Body users={users} />
        </Table>
      </Stack>
    </Card>
  );
};

export default Leaderboard;

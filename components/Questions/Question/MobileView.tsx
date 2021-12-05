// -- mui -- //
import { Stack, Typography, Button, Avatar, Divider } from "@mui/material";
// -- next -- //
import { NextLinkComposed } from "../../Link";

const MobileView = (props: any) => {
  return (
    <Stack divider={<Divider flexItem />}>
      <Typography variant="h5" component="h2" sx={{ padding: "0.5rem" }}>
        {props.author} Asks:
      </Typography>
      <Stack>
        <Typography variant="h6" component="p" sx={{ padding: "0.5rem" }}>
          Would you rather...
        </Typography>
        <Stack direction="row">
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ padding: "0.5rem" }}
          >
            <Avatar
              sx={{
                width: "6rem",
                height: "6rem",
              }}
            >
              {props.avatar}
            </Avatar>
          </Stack>
          <Stack
            justifyContent="space-between"
            sx={{ padding: "0.5rem", width: "100%" }}
          >
            <Typography align="center" variant="h5" component="p">
              {props.option1.length < 40
                ? props.option1
                : props.option1.slice(0, 37) + "..."}
            </Typography>
            <Typography align="center" variant="h6" component="p">
              -- Or --
            </Typography>
            <Button
              component={NextLinkComposed}
              to={props.id}
              variant="contained"
              sx={{ width: "50%", margin: "0 auto" }}
            >
              Display
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MobileView;

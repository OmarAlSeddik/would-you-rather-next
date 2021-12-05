// -- mui -- //
import { Stack, Typography, Button, Avatar, Divider } from "@mui/material";
// -- next -- //
import { NextLinkComposed } from "../../Link";

const LargeView = (props: any) => {
  return (
    <Stack divider={<Divider flexItem />}>
      <Typography variant="h5" component="h2" sx={{ padding: "1rem" }}>
        {props.author} Asks:
      </Typography>
      <Stack direction="row">
        <Stack alignItems="center" justifyContent="center">
          <Avatar
            variant="square"
            sx={{
              width: "12rem",
              maxWidth: "30vw",
              height: "12rem",
              maxHeight: "30vw",
            }}
          >
            {props.avatar}
          </Avatar>
        </Stack>
        <Stack sx={{ padding: "1rem", width: "100%" }}>
          <Typography variant="h6" component="p">
            Would you rather...
          </Typography>
          <Typography
            align="center"
            variant="h5"
            component="p"
            sx={{ margin: "auto 0" }}
          >
            {props.option1.length < 60
              ? props.option1
              : props.option1.slice(0, 57) + "..."}
          </Typography>
          <Typography align="center" variant="h6" component="p">
            -- Or --
          </Typography>
          <Button
            component={NextLinkComposed}
            to={props.id}
            variant="contained"
            sx={{ width: "50%", margin: "0 auto", textTransform: "none" }}
          >
            Display
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LargeView;

// -- mui -- //
import { Stack, Typography, Button, Avatar, Divider } from "@mui/material";
import { Box } from "@mui/system";
// -- next -- //
import { NextLinkComposed } from "../../Link";
// -- framer motion -- //
import { motion } from "framer-motion";

const LargeView = (props: any) => {
  const variants = { whileHover: { scale: 1.1 } };

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
          <Box
            sx={{ width: "50%", margin: "0 auto" }}
            component={motion.div}
            variants={variants}
            whileHover="whileHover"
          >
            <Button
              fullWidth
              component={NextLinkComposed}
              to={props.id}
              variant="contained"
              sx={{ textTransform: "none" }}
            >
              Display
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LargeView;

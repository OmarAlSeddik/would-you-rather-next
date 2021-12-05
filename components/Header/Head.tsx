// -- mui -- //
import {
  Avatar,
  ButtonBase,
  Card,
  Paper,
  Stack,
  Typography,
  Menu,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import QuestionAnswerTwoToneIcon from "@mui/icons-material/QuestionAnswerTwoTone";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
// -- basic/custom hooks -- //
import { useContext, useState } from "react";
import useUser from "../../hooks/useUser";
import useAvatar from "../../hooks/useAvatar";
// -- context -- //
import AppContext from "../../context/AppContext";

const Head = () => {
  const context = useContext(AppContext);
  const [user, loadingUser] = useUser();
  const avatar = useAvatar(user?.avatar);

  // -- menu control -- //
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = anchorEl ? true : false;

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper sx={{ borderRadius: 0 }}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ padding: "0.5rem 0", width: "90%", margin: "0 auto" }}
      >
        <QuestionAnswerTwoToneIcon color="primary" />
        <Typography
          color="primary"
          variant="h5"
          component="h2"
          sx={{ fontFamily: "lobster" }}
        >
          Would You Rather?
        </Typography>
        <ButtonBase
          disableRipple
          sx={{ textTransform: "none", marginLeft: "auto" }}
          onClick={handleOpen}
        >
          <Card>
            <Stack direction="row" alignItems="center">
              <Avatar variant="square">{loadingUser ? null : avatar}</Avatar>
              <Typography sx={{ padding: "0 0.5rem" }}>
                {loadingUser ? <CircularProgress /> : user.name}
              </Typography>
            </Stack>
          </Card>
        </ButtonBase>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={open}
          onClose={handleClose}
          sx={{ ".MuiMenu-list": { padding: 0 } }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              context.handleLogout();
            }}
          >
            <Stack direction="row" justifyContent="space-between">
              <LogoutRoundedIcon
                fontSize="small"
                sx={{ marginRight: 1, color: "primary.main" }}
              />
              <Typography>Logout</Typography>
            </Stack>
          </MenuItem>
        </Menu>
      </Stack>
    </Paper>
  );
};

export default Head;

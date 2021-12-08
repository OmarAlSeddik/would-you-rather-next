// -- mui -- //
import {
  ButtonBase,
  Card,
  Stack,
  Avatar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
// -- basic/custom hooks -- //
import { useState } from "react";
import useUser from "../../../hooks/useUser";
import useAvatar from "../../../hooks/useAvatar";
// -- firebase -- //
import { auth } from "../../../firebase";
import { signOut } from "@firebase/auth";
// -- framer motion -- //
import { motion } from "framer-motion";

const User = () => {
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

  const variants = {
    whileHover: { scale: 1.1 },
  };

  return (
    <>
      <ButtonBase
        disableRipple
        sx={{ textTransform: "none" }}
        onClick={handleOpen}
      >
        <Card
          component={motion.div}
          variants={variants}
          whileHover="whileHover"
        >
          <Stack direction="row" alignItems="center">
            <Avatar variant="square">{loadingUser ? null : avatar}</Avatar>
            <Typography sx={{ padding: "0 0.5rem" }}>
              {loadingUser ? "Loading..." : user.name}
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
            signOut(auth);
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
    </>
  );
};

export default User;

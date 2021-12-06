// -- mui -- //
import { TableBody, Avatar, Typography, Stack } from "@mui/material";
// -- local component -- //
import StyledTableRow from "./StyledTableRow";
import StyledTableCell from "./StyledTableCell";
// -- basic/custom hooks -- //
import useAvatars from "../../hooks/useAvatars";

const Body = (props: any) => {
  const avatars = useAvatars();
  const loadAvatar = (user: any) => {
    const loadedAvatarObject = avatars.find(
      (avatarObject) => avatarObject.value === user.avatar
    );

    return loadedAvatarObject?.label;
  };

  const sortedUsers = Object.values(props.users || {}).sort(
    (user1: any, user2: any) =>
      (user2.votes ? Object.keys(user2.votes).length : 0) +
      (user2.questions ? user2.questions.length : 0) -
      ((user1.votes ? Object.keys(user1.votes).length : 0) +
        (user1.questions ? user1.questions.length : 0))
  );

  return (
    <TableBody>
      {sortedUsers.map((user: any) => (
        <StyledTableRow
          key={user.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <StyledTableCell align="center">
            <Stack>
              <Typography
                sx={{
                  padding: "0.25rem 0.5rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "primary.main",
                  color: "white",
                  margin: "auto auto",
                }}
              >
                {(user.votes ? Object.keys(user.votes).length : 0) +
                  (user.questions ? user.questions.length : 0)}
              </Typography>
            </Stack>
          </StyledTableCell>
          <StyledTableCell scope="row">
            <Avatar>{loadAvatar(user)}</Avatar>
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            {user.name}
          </StyledTableCell>
          <StyledTableCell align="center">
            {user.votes ? Object.keys(user.votes).length : 0}
          </StyledTableCell>
          <StyledTableCell align="center">
            {user.questions ? user.questions.length : 0}
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default Body;

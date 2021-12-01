// -- mui -- //
import { Card, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// -- basic/custom hooks -- //
import { useContext, useState } from "react";
import useUsers from "../../hooks/useUsers";
// -- context -- //
import AppContext from "../../context/AppContext";
// -- firebase -- //
import { auth } from "../../firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Demo = () => {
  const context = useContext(AppContext);
  const users = useUsers();
  const [selectedUser, setSelectedUser] = useState<any>("");

  const handleSelectedUserChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedUser(event.target.value as string);
  };

  const userOptions = [
    users?.H0Ilz6FBjxQYJ2x3stRWEeHNppe2,
    users?.EW8tZOqc7edRdsEH2DtRvKSk6ni2,
    users?.lw4u7iPy4sdjUW5U8A9urpt5AxJ2,
  ];

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = () => {
    const email = selectedUser?.email;
    const password = "123456789";
    return signInWithEmailAndPassword(email, password);
  };

  if (user) context.handleLogin(user.user.uid);

  return (
    <Card
      raised
      sx={{
        width: "21rem",
        maxWidth: "100vw",
        padding: "1rem 2rem",
        marginBottom: "1rem",
      }}
    >
      <Stack>
        <Typography
          align="center"
          variant="h6"
          component="h2"
          sx={{ marginBottom: "0.5rem" }}
        >
          Sign Into a Demo Account.
        </Typography>
        <TextField
          select
          size="small"
          id="select-user"
          label="Select User"
          error={!!error}
          helperText="Select a demo user."
          sx={{ marginBottom: "0.5rem" }}
          onChange={handleSelectedUserChange}
        >
          {userOptions.map((demoUser: any, index) => (
            <MenuItem value={demoUser} key={index}>
              {demoUser?.name}
            </MenuItem>
          ))}
        </TextField>
        <LoadingButton
          variant="contained"
          loading={loading}
          sx={{ textTransform: "none" }}
          onClick={handleSubmit}
        >
          Sign In
        </LoadingButton>
      </Stack>
    </Card>
  );
};

export default Demo;

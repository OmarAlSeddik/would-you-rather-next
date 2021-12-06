// -- mui -- //
import { Card, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// -- basic/custom hooks -- //
import { useState } from "react";
import useUsers from "../../hooks/useUsers";
// -- firebase -- //
import { auth } from "../../firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
// -- framer motion -- //
import { motion } from "framer-motion";

const Demo = () => {
  const [users, loadingUsers] = useUsers();
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

  const variants = {
    whileHover: { scale: 1.1 },
  };

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
          value={selectedUser}
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
          loading={loading || loadingUsers}
          sx={{ textTransform: "none" }}
          onClick={handleSubmit}
          component={motion.div}
          variants={variants}
          whileHover="whileHover"
        >
          Sign In
        </LoadingButton>
      </Stack>
    </Card>
  );
};

export default Demo;

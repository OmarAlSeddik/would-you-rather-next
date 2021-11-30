// -- mui -- //
import { Card, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const Demo = () => {
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
          helperText="Select a demo user."
          sx={{ marginBottom: "0.5rem" }}
        >
          <MenuItem value="1">User 1</MenuItem>
          <MenuItem value="2">User 2</MenuItem>
          <MenuItem value="3">User 3</MenuItem>
        </TextField>
        <LoadingButton variant="contained" sx={{ textTransform: "none" }}>
          Sign In
        </LoadingButton>
      </Stack>
    </Card>
  );
};

export default Demo;

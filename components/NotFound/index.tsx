// -- mui -- //
import { Stack, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Stack
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Typography variant="h1" align="center" sx={{ color: "text.disabled" }}>
        404
      </Typography>
      <Typography variant="h2" sx={{ color: "text.secondary" }}>
        Page Not Found
      </Typography>
    </Stack>
  );
};

export default NotFound;

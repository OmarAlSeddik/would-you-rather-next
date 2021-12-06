// -- mui -- //
import { Link, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Github = () => {
  return (
    <Link
      sx={{
        color: "text.secondary",
        margin: "0 auto",
        "&:hover": { color: "primary.main" },
      }}
      target="_blank"
      href="https://github.com/OmarAlSeddik/would-you-rather-next"
      rel="noopener noreferrer"
    >
      <Stack alignItems="center">
        <GitHubIcon fontSize="large" />
      </Stack>
    </Link>
  );
};

export default Github;

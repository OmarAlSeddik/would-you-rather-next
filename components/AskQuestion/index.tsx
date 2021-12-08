// -- mui -- //
import { Card, Stack } from "@mui/material";
// -- local component -- //
import Head from "./Head";
import UnsubmittedBody from "./UnsubmittedBody";
import SubmittedBody from "./SubmittedBody";
import Loading from "../Loading";
// -- basic/custom hooks -- //
import { useState } from "react";
import useUser from "../../hooks/useUser";
import useAvatar from "../../hooks/useAvatar";

const AddQuestion = () => {
  const [user, loadingUser] = useUser();
  const avatar = useAvatar(user?.avatar);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (loadingUser) return <Loading />;

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ height: { xs: "85vh", md: "100vh" } }}
    >
      <Card
        raised
        sx={{
          width: "56.25rem",
          maxWidth: "100vw",
          marginTop: { xs: "3rem", md: 0 },
        }}
      >
        <Head user={user} avatar={avatar} />
        {isSubmitted ? (
          <SubmittedBody goBack={() => setIsSubmitted(false)} />
        ) : (
          <UnsubmittedBody user={user} submit={() => setIsSubmitted(true)} />
        )}
      </Card>
    </Stack>
  );
};

export default AddQuestion;

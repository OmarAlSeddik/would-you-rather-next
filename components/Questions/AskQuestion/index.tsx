// -- mui -- //
import { Card } from "@mui/material";
import { Box } from "@mui/system";
// -- local component -- //
import Head from "./Head";
import UnsubmittedBody from "./UnsubmittedBody";
import SubmittedBody from "./SubmittedBody";
// -- next -- //
import { useRouter } from "next/dist/client/router";
// -- basic/custom hooks -- //
import { useContext, useEffect, useState } from "react";
import useUser from "../../../hooks/useUser";
import useAvatar from "../../../hooks/useAvatar";
// -- context -- //
import AppContext from "../../../context/AppContext";

const AddQuestion = () => {
  // -- routing block -- //
  const context = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (!context.loggedInUserId) router.replace("/auth");
  }, [context.loggedInUserId, router]);

  const user = useUser();
  const avatar = useAvatar(user?.avatar);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Box sx={{ height: "100vh" }}>
      <Card
        raised
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "56.25rem",
          maxWidth: "100vw",
          marginTop: "3.25rem",
          borderRadius: { xs: 0, md: "8px" },
        }}
      >
        <Head user={user} avatar={avatar} />
        {isSubmitted ? (
          <SubmittedBody goBack={() => setIsSubmitted(false)} />
        ) : (
          <UnsubmittedBody user={user} submit={() => setIsSubmitted(true)} />
        )}
      </Card>
    </Box>
  );
};

export default AddQuestion;

// -- mui --//
import { Stack, Typography, Button } from "@mui/material";
// -- framer motion -- //
import { motion } from "framer-motion";

const SubmittedBody = (props: any) => {
  const variants = { whileHover: { scale: 1.1 } };

  return (
    <Stack sx={{ width: "90%", margin: "0 auto", padding: "3rem 0 1rem" }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        sx={{ marginBottom: "1rem", color: "success.main" }}
      >
        Your question has been created successfully!
      </Typography>
      <Button
        variant="contained"
        sx={{ width: "12rem", margin: "0 auto", textTransform: "none" }}
        onClick={props.goBack}
        component={motion.div}
        variants={variants}
        whileHover="whileHover"
      >
        Ask Another Question
      </Button>
    </Stack>
  );
};

export default SubmittedBody;

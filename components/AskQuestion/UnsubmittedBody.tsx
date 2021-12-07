// -- mui --//
import { Stack, Typography, TextField, Button } from "@mui/material";
// -- basic/custom hooks -- //
import { useRef, useState } from "react";
// -- axios -- //
import axios from "axios";
// -- framer motion -- //
import { motion } from "framer-motion";

const UnsubmittedBody = (props: any) => {
  const [option1Error, setOption1Error] = useState(false);
  const [option2Error, setOption2Error] = useState(false);

  const option1InputRef = useRef<HTMLInputElement>(null);
  const option2InputRef = useRef<HTMLInputElement>(null);

  const newQuestion = {
    id: props.user.id + new Date().getTime(),
    author: props.user.name,
    date: new Date(),
    avatar: props.user.avatar,
    option1: "",
    option2: "",
  };

  const addQuestion = () => {
    axios.put(
      `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/questions/${newQuestion.id}.json`,
      newQuestion
    );
  };

  const addQuestionToUser = () => {
    props.user.questions
      ? axios.put(
          `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/users/${props.user.id}/questions.json`,
          [...props.user.questions, newQuestion.id]
        )
      : axios.put(
          `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/users/${props.user.id}/questions.json`,
          [newQuestion.id]
        );
  };

  const handleSubmit = () => {
    const option1 = option1InputRef?.current?.value || "";
    const option2 = option2InputRef?.current?.value || "";
    if (!option1 || option1.length > 50 || option1.length < 5) {
      setOption1Error(true);
    } else if (!option2 || option2.length > 50 || option2.length < 5) {
      setOption2Error(true);
    } else {
      newQuestion.option1 = option1;
      newQuestion.option2 = option2;
      addQuestion();
      addQuestionToUser();
      props.submit();
    }
  };

  const variants = { whileHover: { scale: 1.1 } };

  return (
    <Stack sx={{ width: "90%", margin: "0 auto", padding: "3rem 0 1rem" }}>
      <Typography variant="h6" component="p" sx={{ marginBottom: "0.25rem" }}>
        Would you rather...
      </Typography>
      <TextField
        size="small"
        label="First Option"
        inputRef={option1InputRef}
        error={option1Error}
      />
      <Typography variant="h6" component="p" align="center">
        -- Or --
      </Typography>
      <TextField
        size="small"
        label="Second Option"
        sx={{ marginBottom: "1rem" }}
        inputRef={option2InputRef}
        error={option2Error}
      />
      <Typography variant="caption" align="center">
        Allowed question length range is 5-50 characters.
      </Typography>
      <Button
        variant="contained"
        sx={{ width: "10rem", margin: "0 auto", textTransform: "none" }}
        onClick={handleSubmit}
        component={motion.div}
        variants={variants}
        whileHover="whileHover"
      >
        Ask
      </Button>
    </Stack>
  );
};

export default UnsubmittedBody;

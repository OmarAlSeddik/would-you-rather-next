// -- mui --//
import { Stack, Typography, TextField, Button } from "@mui/material";

import { Box } from "@mui/system";
// -- axios -- //
import axios from "axios";
// -- formik & yup -- //
import { useFormik } from "formik";
import * as yup from "yup";
// -- framer motion -- //
import { motion } from "framer-motion";

const UnsubmittedBody = (props: any) => {
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

  const formik = useFormik({
    initialValues: { option1: "", option2: "" },

    validationSchema: yup.object({
      option1: yup
        .string()
        .min(5, "Should be at least 5 characters long.")
        .max(50, "Shouldn't be over 50 characters long.")
        .required("Required."),
      option2: yup
        .string()
        .min(5, "Should be at least 5 characters long.")
        .max(50, "Shouldn't be over 50 characters long.")
        .required("Required."),
    }),

    onSubmit: (values) => {
      handleSubmit(values.option1, values.option2);
    },
  });

  const option1Error = formik.touched.option1 && !!formik.errors.option1;
  const option1HelperText = formik.touched.option1 && formik.errors.option1;
  const option2Error = formik.touched.option2 && !!formik.errors.option2;
  const option2HelperText = formik.touched.option2 && formik.errors.option2;

  const handleSubmit = (option1: string, option2: string) => {
    newQuestion.option1 = option1;
    newQuestion.option2 = option2;
    addQuestion();
    addQuestionToUser();
    if (!option1Error && !option2Error) props.submit();
  };

  const variants = { whileHover: { scale: 1.1 } };

  return (
    <Stack sx={{ width: "90%", margin: "0 auto", padding: "3rem 0 1rem" }}>
      <Typography variant="h6" component="p" sx={{ marginBottom: "0.25rem" }}>
        Would you rather...
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          size="small"
          id="option1"
          name="option1"
          label="First Option"
          value={formik.values.option1}
          onChange={formik.handleChange}
          error={option1Error}
          helperText={option1HelperText}
        />
        <Typography variant="h6" component="p" align="center">
          -- Or --
        </Typography>
        <TextField
          fullWidth
          size="small"
          id="option2"
          name="option2"
          label="Second Option"
          value={formik.values.option2}
          onChange={formik.handleChange}
          error={option2Error}
          helperText={option2HelperText}
          sx={{ marginBottom: "1rem" }}
        />

        <Box
          sx={{ width: "10rem", margin: "0 auto" }}
          component={motion.div}
          variants={variants}
          whileHover="whileHover"
        >
          <Button
            fullWidth
            variant="contained"
            sx={{ textTransform: "none" }}
            type="submit"
          >
            Ask
          </Button>
        </Box>
      </form>
      <Typography variant="caption" align="center">
        Allowed question length range is 5-50 characters.
      </Typography>
    </Stack>
  );
};

export default UnsubmittedBody;

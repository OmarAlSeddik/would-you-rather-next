// -- mui -- //
import {
  Stack,
  Typography,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  Card,
} from "@mui/material";
// -- basic/custom hooks -- //
import { useState } from "react";
// -- axios & swr -- //
import axios from "axios";
import { mutate } from "swr";

const UnansweredBody = (props: any) => {
  const [answer, setAnswer] = useState("first");
  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer((event.target as HTMLInputElement).value);
  };

  const [disabledButton, setDisabledButton] = useState(false);

  const option1VotesUrl = `https://would-you-rather-next-default-rtdb.firebaseio.com/questions/${props.question.id}/option1Votes.json`;
  const option2VotesUrl = `https://would-you-rather-next-default-rtdb.firebaseio.com/questions/${props.question.id}/option2Votes.json`;
  const userVoteUrl = `https://would-you-rather-next-default-rtdb.firebaseio.com/users/${props.user.id}/votes/${props.question.id}.json`;

  const userUrl = `https://would-you-rather-next-default-rtdb.firebaseio.com/users/${props.user.id}.json`;
  const questionUrl = `https://would-you-rather-next-default-rtdb.firebaseio.com/questions/${props.question.id}.json`;

  const addVote = async () => {
    if (answer === "first")
      props.question.option1Votes
        ? await axios.put(option1VotesUrl, [
            ...props.question.option1Votes,
            props.user.id,
          ])
        : await axios.put(option1VotesUrl, [props.user.id]);

    if (answer === "second")
      props.question.option2Votes
        ? await axios.put(option2VotesUrl, [
            ...props.question.option2Votes,
            props.user.id,
          ])
        : await axios.put(option2VotesUrl, [props.user.id]);

    mutate(questionUrl);
  };

  const addVoteToUser = async () => {
    answer === "first"
      ? await axios.put(userVoteUrl, 1)
      : await axios.put(userVoteUrl, 2);
    mutate(userUrl);
  };

  const handleSubmit = async () => {
    setDisabledButton(true);
    addVote();
    addVoteToUser();
  };

  return (
    <Stack sx={{ width: "90%", margin: "0 auto", padding: "3rem 0 1rem" }}>
      <Typography variant="h5" component="h2" sx={{ marginBottom: "1rem" }}>
        Would you rather...
      </Typography>
      <RadioGroup
        name="controlled-radio-buttons-group"
        value={answer}
        onChange={handleAnswerChange}
      >
        <Card raised sx={{ marginBottom: "1rem" }}>
          <FormControlLabel
            value="first"
            control={<Radio />}
            label={props.question.option1 || ""}
            sx={{ width: "100%", padding: "1rem" }}
          />
        </Card>
        <Card raised sx={{ marginBottom: "1rem" }}>
          <FormControlLabel
            value="second"
            control={<Radio />}
            label={props.question.option2 || ""}
            sx={{ width: "100%", padding: "1rem" }}
          />
        </Card>
      </RadioGroup>
      <Typography variant="caption" align="center">
        You can not undo your vote.
      </Typography>
      <Button
        variant="contained"
        disabled={disabledButton}
        sx={{ width: "6rem", margin: "0 auto", textTransform: "none" }}
        onClick={handleSubmit}
      >
        Answer
      </Button>
    </Stack>
  );
};

export default UnansweredBody;
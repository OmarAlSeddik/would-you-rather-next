// -- mui -- //
import { Card } from "@mui/material";
// -- local component -- //
import MobileView from "./MobileView";
import LargeView from "./LargeView";
// -- basic/custom hooks //
import useAvatar from "../../../hooks/useAvatar";
import { useContext } from "react";
// -- context -- //
import ThemeContext from "../../../context/ThemeContext";

const Question = (props: any) => {
  const avatar = useAvatar(props.avatar);
  const context = useContext(ThemeContext);

  return (
    <Card raised sx={{ marginBottom: "1rem" }}>
      {context.isMobile ? (
        <MobileView
          avatar={avatar}
          id={props.id}
          author={props.author}
          option1={props.option1}
        />
      ) : (
        <LargeView
          avatar={avatar}
          id={props.id}
          author={props.author}
          option1={props.option1}
        />
      )}
    </Card>
  );
};

export default Question;

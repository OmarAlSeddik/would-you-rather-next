// -- mui -- //
import { Stack, Typography } from "@mui/material";
import QuestionAnswerTwoToneIcon from "@mui/icons-material/QuestionAnswerTwoTone";
// -- basic & custom hooks -- //
import { useContext } from "react";
// -- context -- //
import ThemeContext from "../../../context/ThemeContext";

const Logo = () => {
  const context = useContext(ThemeContext);

  const SmallMobileView = (
    <Typography
      color="primary"
      variant="h5"
      component="h2"
      sx={{
        fontFamily: "lobster",
      }}
    >
      WYR?
    </Typography>
  );

  const MobileView = (
    <Typography
      color="primary"
      variant="h6"
      component="h2"
      sx={{
        fontFamily: "lobster",
      }}
    >
      Would You Rather?
    </Typography>
  );

  return (
    <Stack direction="row" alignItems="center">
      <QuestionAnswerTwoToneIcon color="primary" fontSize="small" />
      {context.isSmallMobile ? SmallMobileView : MobileView}
    </Stack>
  );
};

export default Logo;

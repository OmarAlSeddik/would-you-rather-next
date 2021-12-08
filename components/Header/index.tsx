// -- mui -- //
import { AppBar } from "@mui/material";
// -- local components -- //
import LargeView from "./LargeView";
import MobileView from "./MobileView";
// -- basic & custom hooks -- //
import { useContext } from "react";
// -- context -- //
import ThemeContext from "../../context/ThemeContext";
// -- framer motion -- //
import { motion } from "framer-motion";

const Header = () => {
  const context = useContext(ThemeContext);

  const variants = {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%", transition: { delay: 0.25 } },
  };

  return (
    <AppBar color="transparent" elevation={0}>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {context.isMobile ? <MobileView /> : <LargeView />}
      </motion.div>
    </AppBar>
  );
};

export default Header;

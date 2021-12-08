// -- mui -- //
import {
  createTheme,
  alpha,
  responsiveFontSizes,
  useMediaQuery,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { indigo } from "@mui/material/colors";
// -- basic & custom hooks -- //
import { createContext, useMemo } from "react";

const ThemeContext = createContext({
  theme: {},
  isMobile: false,
  isSmallMobile: false,
});

export const ThemeContextProvider = (props: any) => {
  // theme block //
  let theme: any = useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: { xs: 0, sm: 368, md: 736, lg: 1200, xl: 1536 },
        },
        palette: {
          primary: {
            main: indigo[900],
          },
          background: {
            default: alpha(indigo[900], 0.2),
          },
        },
        shape: {
          borderRadius: 8,
        },
      }),
    []
  );

  theme = responsiveFontSizes(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeContext.Provider value={{ theme, isMobile, isSmallMobile }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

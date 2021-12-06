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
// -- hook -- //
import { createContext, useMemo } from "react";

const ThemeContext = createContext({
  theme: {},
  isMobile: false,
});

export const ThemeContextProvider = (props: any) => {
  // theme block //
  let theme: any = useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: { xs: 0, sm: 728, md: 900, lg: 1200, xl: 1536 },
        },
        palette: {
          primary: {
            main: indigo[900],
          },
          secondary: {
            main: alpha(indigo[900], 0.1),
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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeContext.Provider value={{ theme, isMobile }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

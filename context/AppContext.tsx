// mui imports //
import {
  createTheme,
  alpha,
  responsiveFontSizes,
  useMediaQuery,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { indigo } from "@mui/material/colors";
// hook imports //
import { createContext, useState, useMemo } from "react";

interface AppContextInterface {
  theme: {};
  isMobile: boolean;
  loggedInUserId: string;
  handleLogin: (id: string) => any;
  handleLogout: () => any;
}

const AppContext = createContext<AppContextInterface>({
  theme: {},
  isMobile: false,
  loggedInUserId: "",
  handleLogin: () => {},
  handleLogout: () => {},
});

export const AppContextProvider = (props: any) => {
  // theme block //
  let theme: any = useMemo(
    () =>
      createTheme({
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

  // auth block //
  const [loggedInUserId, setLoggedInUserId] = useState("");

  const handleLogin = (id: string) => {
    setLoggedInUserId(id);
  };

  const handleLogout = () => {
    setLoggedInUserId("");
  };

  return (
    <AppContext.Provider
      value={{ theme, isMobile, loggedInUserId, handleLogin, handleLogout }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppContext;

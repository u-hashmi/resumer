import { CssBaseline, ThemeProvider, createTheme, darkScrollbar } from "@mui/material";
import React, { useMemo, useState } from "react";
import MainArea from "./components/screens/MainArea";
import { StyledMainArea } from "./components/parts/StyledComponents";
import { green, grey } from "@mui/material/colors";

function App() {
  const [mode, setMode] = useState("dark");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: green[500],
            dark: green[700],
          },
          secondary: {
            main: "#ffffff",
          },
          background: {
            default: mode === "dark" ? "#101010" : "#f5f5f5",
            paper: mode === "dark" ? '#121212' : '#ffffff',
          },
          text: {
            secondary: mode === "dark" ? grey[300] : grey[500],
            disabled: mode === "dark" ?  grey[500] : grey[400],
            primary: mode === "dark" ?  grey[400] : grey[800],
          },
        },
        typography: {
          fontFamily: "Gabarito, sans-serif",
        },
        shadowMedium: mode === "dark" ? "0px 4px 12px rgba(0,0,0,0.30)" : "0px 2px 5px rgba(0,0,0,0.12)",
        components: {
          MuiCssBaseline: {
            styleOverrides: (themeParam) => ({
              body:
                themeParam.palette.mode === "dark"
                  ? darkScrollbar({
                      thumb: grey[800],
                      track: themeParam.palette.background.default,
                      trackRadius: 1,
                    })
                  : darkScrollbar({
                      thumb: grey[400],
                      track: themeParam.palette.background.default,
                      trackRadius: 1,
                    }),
            }),
          },
        },
      }),
    [mode]
  );

  const handleSetMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledMainArea>
        <MainArea handleSetMode={handleSetMode} />
      </StyledMainArea>
    </ThemeProvider>
  );
}

export default App;

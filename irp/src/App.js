// Code Starts
import React from "react";
import Login from "./Components/Login";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Login />
    </ThemeProvider>
  );
}

export default App;
// Code Ends

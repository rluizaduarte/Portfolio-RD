"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#5b207a",
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  }
});

export default theme;
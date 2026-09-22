"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#232323" },
    secondary: { main: "#5b207a" },   
  },
  typography: {
    fontFamily:
      '"Helvetica Neue", Helvetica, Arial, sans-serif',
    h4: {
      fontSize: "2.9rem",
    },
  },
});

export default theme;
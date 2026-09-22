"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1b1b1b" },
    secondary: { main: "#F46737" },   
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
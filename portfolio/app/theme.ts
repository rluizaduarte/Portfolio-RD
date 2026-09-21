"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#232323" },
    secondary: { main: "#5b207a" },   
  },
  typography: {
    fontFamily:
      'var(--font-main), "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
});

export default theme;
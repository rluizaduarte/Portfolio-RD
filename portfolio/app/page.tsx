import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}
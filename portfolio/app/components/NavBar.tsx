"use client";

import { AppBar, Box, Toolbar, Typography, TypographyProps, styled } from "@mui/material";
import theme from "../theme";

const StyledAppBar = styled(AppBar)(() => ({
  background: "transparent",
  boxShadow: "none",
}));

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "center",
  padding: "12px 48px",
}));

const NavLink = styled(Typography)<TypographyProps<"a", { component: "a" }>>(() => ({
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: 500,
  color: theme.palette.primary.contrastText,
  textDecoration: "none",
  position: "relative",
  transition: "color 0.25s ease",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: -4,
    width: 0,
    height: "1.5px",
    backgroundColor: theme.palette.secondary.main,
    transition: "width 0.25s ease",
  },
  "&:hover::after": {
    width: "100%",
  },
}));

const NavBar = () => {
  return (
    <StyledAppBar position="fixed" elevation={0}>
      <StyledToolbar>
        <Box sx={{ display: "flex", gap: "100px" }}>
          <NavLink component="a" href="#about">About</NavLink>
          <NavLink component="a" href="#skills">Skills</NavLink>
          <NavLink component="a" href="#projects">Projects</NavLink>
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default NavBar;
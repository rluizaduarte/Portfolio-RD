"use client";

import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material"

const StyledToobar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between"
}))

const NavBar = () => {
  return (
    <AppBar position="absolute">
      <StyledToobar>
        <Box sx={{ display: "flex", gap: "32px" }}>
          <Typography component="a" href="#about" sx={{ cursor: "pointer" }}>About</Typography>
          <Typography component="a" href="#skills" sx={{ cursor: "pointer" }}>Skills</Typography>
          <Typography component="a" href="#projects" sx={{ cursor: "pointer" }}>Projects</Typography>
        </Box>
      </StyledToobar>
    </AppBar>
  )
}

export default NavBar
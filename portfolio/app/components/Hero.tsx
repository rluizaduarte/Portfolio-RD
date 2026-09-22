"use client";

import styled from "@emotion/styled";
import Avatar from "../../public/avatar.jpg"
import Image from "next/image";
import { Button, Container, Grid, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import theme from "../theme";
import StyledButton from "./StyledButton";

export default function Hero() {
  
  const StyledHero = styled("div")(() => ({
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
  }))

  const StyledImg = styled(Image)(() => ({
    width: "100%",
    borderRadius: "50%"
  }))

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={4}>
              <StyledImg src={Avatar} alt=""/>
            </Grid>
            <Grid size={8}>
              <Typography variant="h1" sx={{ textAlign: "center", color:"primary.contrastText" }}>Rielly Duarte</Typography>
              <Typography variant="h2" sx={{ textAlign: "center", color:"primary.contrastText" }}>I'm a Computer Science student</Typography>
              <Grid container sx={{display: "flex", justifyContent:"center"}}>
                <Grid size={4} sx={{display: "flex", justifyContent:"center"}}>
                  {StyledButton(<>
                      <DownloadIcon />Download CV
                  </>,)} 
                </Grid>
                <Grid size={4} sx={{display: "flex", justifyContent:"center"}}>
                  {StyledButton(<>
                    <EmailIcon/>Reach me
                  </>,)} 
                </Grid>
              </Grid>
            </Grid>
        </Grid>
        </Container>
      </StyledHero>
    </>
  );
}
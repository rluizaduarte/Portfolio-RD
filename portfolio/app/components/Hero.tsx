"use client";

import styled from "@emotion/styled";
import Avatar from "../../public/avatar.jpg"
import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import theme from "../theme";
import StyledButton from "./StyledButton";
import { AnimatedBackground } from "./AnimatedBackground";

const CV_PATH = "/Rielly-CV.pdf";

export default function Hero() {
  
  const StyledHero = styled("div")(() => ({
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden", 
  }))

  const StyledImg = styled(Image)(() => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }))

  const handleDownload = () => {
    console.log("Download CV button clicked");
    const link = document.createElement('a');
    link.href = CV_PATH
    link.download = 'Rielly_Duarte_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReachMe = () => {
    const emailAddress = 'riellycontato@gmail.com';
    const subject = 'Subject';
    const body = 'Hey! Saw your portfolio...';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  }

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Box sx={{ position: "relative" }}>
            <Box sx={{ position: "absolute", width: "150%", top: -400, right: 0 }}>
              <AnimatedBackground />
            </Box>
          </Box>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ position: "relative" }}>
                <Box sx={{ position: "relative", textAlign: "center", width: "100%" }}>
                  <StyledImg src={Avatar} alt=""/>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h1" sx={{ textAlign: "center", color:"primary.contrastText", pb: 2 }}>Rielly Duarte</Typography>
              <Typography variant="h2" sx={{ textAlign: "center", color:"primary.contrastText" }}>I'm a Computer Science student</Typography>
              <Grid container sx={{display: "flex", justifyContent:"center", pt: 3}} spacing={3}>
                <Grid size={4} sx={{display: "flex", justifyContent:"center"}}>
                  <StyledButton onClick={() => handleDownload()}>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid size={4} sx={{display: "flex", justifyContent:"center"}}>
                  <StyledButton onClick={() => handleReachMe()}>
                    <EmailIcon />
                    <Typography>Reach Me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
        </Container>
      </StyledHero>
    </>
  );
}
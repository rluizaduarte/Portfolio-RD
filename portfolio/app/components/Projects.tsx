"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import theme from "../theme";

const projects = [
  {
    title: "Dice Game",
    image: "/projects/the-dice-game.png",
    description:
      "Two-player dice game built with Next.js for a college web & mobile programming assignment. Best of 5 rounds, with score tracking and a replay option.",
    github: "https://github.com/rluizaduarte/Programacao-Web-e-Mobile/tree/main/jogo-dos-dados",
    live: "programacao-web-e-mobile-tc61-one.vercel.app",
  },
  {
    title: "Beatriz",
    image: "/projects/beatriz.png",
    description: "A personal, one-page website inspired by 'Beatriz' by Jorge Vercillo — created as a heartfelt dedication to someone important to me. The layout and visual mood were designed to reflect the song's romantic tone, turning it into a small, meaningful digital gift.",
    github: "https://github.com/rluizaduarte/Beatriz",
  },
  {
    title: "Hangman Game",
    image: "/projects/hangman-game.png",
    description: "Classic Hangman game built with React, featuring a random word from a 30+ word list each round, an on-screen keyboard for guessing letters, and a visual tracker for previous guesses. Includes win/loss screens and a 'Play Again' button to reset the game state.",
    github: "https://github.com/rluizaduarte/Programacao-Web-e-Mobile/tree/main/jogo-da-forca",
    live: "jogo-da-forca-ten-kappa.vercel.app",
  },
];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        backgroundColor: theme.palette.primary.main,
        py: 12,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          sx={{
            color: "#fff",
            fontWeight: 700,
            textAlign: "center",
            mb: 8,
            fontSize: { xs: "2.5rem", md: "3.2rem" },
          }}
        >
          Projects
        </Typography>

        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          {projects.map((project, index) => {
            const isOpen = openIndex === index;

            return (
              <Grid key={project.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box
                  onClick={() => handleToggle(index)}
                  sx={{
                    border: "1.5px solid",
                    borderColor: isOpen ? "secondary.main" : "rgba(255,255,255,0.2)",
                    borderRadius: "10px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "border-color 0.25s ease",
                    "&:hover": {
                      borderColor: "secondary.main",
                    },
                  }}
                >
                  <Box sx={{ position: "relative", width: "100%", height: "180px" }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>

                  <Box sx={{ padding: "20px" }}>
                    <Typography variant="h6" sx={{ color: "#fff", fontWeight: 700 }}>
                      {project.title}
                    </Typography>

                    <Box
                      sx={{
                        overflow: "hidden",
                        maxHeight: isOpen ? "300px" : "0px",
                        opacity: isOpen ? 1 : 0,
                        transition: "max-height 0.35s ease, opacity 0.35s ease",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "rgba(255,255,255,0.75)", mt: 2, mb: 2, lineHeight: 1.7 }}
                      >
                        {project.description}
                      </Typography>

                      <Box sx={{ display: "flex", gap: 2 }}>
                        <Box
                          component="a"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            color: "secondary.main",
                            textDecoration: "none",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            "&:hover": { textDecoration: "underline" },
                          }}
                        >
                          <GitHubIcon sx={{ fontSize: 18 }} />
                          GitHub
                        </Box>

                        {project.live && (
                          <Box
                            component="a"
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                              color: "secondary.main",
                              textDecoration: "none",
                              fontSize: "0.85rem",
                              fontWeight: 600,
                              "&:hover": { textDecoration: "underline" },
                            }}
                          >
                            <LaunchIcon sx={{ fontSize: 18 }} />
                            Live site
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
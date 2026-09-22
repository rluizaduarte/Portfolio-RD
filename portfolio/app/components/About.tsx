"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const timelineData = [
  { year: "2023", text: "First contact with programming" },
  { year: "2024", text: "Started my Computer Science degree" },
  { year: "2025.1", text: "First project delivery with a real client" },
  { year: "2025.2", text: "Joined a competitive programming extension group — first participation at Brazilian Computer Society Programming Marathon" },
  { year: "2026.1", text: "Reached the 2nd phase of MFP at Unicamp (Women's Programming Marathon)" },
  { year: "2026.2", text: "Approved for PIBIC FACEPE" },
  { year: "Now", text: "5th semester student" },
];

export default function About() {
  const [visible, setVisible] = useState(timelineData.map(() => false));
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisible((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="section"
      id="about"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "140px 0 80px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative", paddingLeft: "32px" }}>
              <Box
                sx={{
                  position: "absolute",
                  left: "6px",
                  top: "6px",
                  bottom: "6px",
                  width: "2px",
                  backgroundColor: "secondary.main",
                  opacity: 0.25,
                }}
              />

              {timelineData.map((item, index) => {
                const isNow = item.year === "Now";

                return (
                  <Box
                    key={item.year}
                    ref={(el: HTMLDivElement | null) => {
                      itemsRef.current[index] = el;
                    }}
                    data-index={index}
                    sx={{
                      position: "relative",
                      paddingBottom: "32px",
                      opacity: visible[index] ? 1 : 0,
                      transform: visible[index] ? "translateY(0)" : "translateY(24px)",
                      transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        left: isNow ? "-36px" : "-32px",
                        top: isNow ? "2px" : "6px",
                        width: isNow ? "20px" : "14px",
                        height: isNow ? "20px" : "14px",
                        borderRadius: "50%",
                        backgroundColor: isNow ? "secondary.main" : "secondary.light",
                        boxShadow: "0 0 0 4px #fff",
                      }}
                    />
                    <Typography
                      variant={isNow ? "h4" : "subtitle1"}
                      sx={{ fontWeight: isNow ? 800 : 700, color: "secondary.main", lineHeight: 1.2 }}
                    >
                      {item.year}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#333", fontWeight: isNow ? 600 : 400 }}>
                      {item.text}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="subtitle1"
              sx={{ color: "secondary.main", fontWeight: 600, mb: 1, letterSpacing: 0.5 }}
            >
              Hi, I'm Rielly...
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: "#1b1b1b",
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: "2.8rem", md: "3.8rem" },
              }}
            >
              About me
            </Typography>
            <Typography variant="body1" sx={{ color: "#444", lineHeight: 1.9 }}>
              I'm a Computer Science student who enjoys turning ideas into working
              software — from web projects to research. Curiosity is what drives me,
              whether I'm competing in programming marathons or diving into a new
              research problem.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import theme from "../theme";

const timelineData = [
  { year: "2023", text: "First contact with programming" },
  { year: "2024", text: "Started my Computer Science degree" },
  { year: "2025.1", text: "First project delivery with a real client" },
  { year: "2025.2", text: "Joined a competitive programming extension group — first participation at Brazilian Computer Society Programming Marathon" },
  { year: "2026.1", text: "Reached the 2nd phase of MFP at Unicamp (Women's Programming Marathon)" },
  { year: "2026.2", text: "Approved for PIBIC FACEPE" },
  { year: "Now", text: "5th semester student" },
];

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 ${theme.palette.secondary.main}66; }
  70% { box-shadow: 0 0 0 14px ${theme.palette.secondary.main}00; }
  100% { box-shadow: 0 0 0 0 ${theme.palette.secondary.main}00; }
`;

const StyledAbout = styled("section")(() => ({
  minHeight: "100vh",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  padding: "140px 0 80px",
}));

const TimelineWrapper = styled(Box)(() => ({
  position: "relative",
  paddingLeft: "32px",
}));

const TimelineLine = styled(Box)(() => ({
  position: "absolute",
  left: "6px",
  top: "6px",
  bottom: "6px",
  width: "2px",
  backgroundColor: theme.palette.secondary.main,
  opacity: 0.25,
}));

const TimelineItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "inView" && prop !== "delay",
})<{ inView: boolean; delay: number }>(({ inView, delay }) => ({
  position: "relative",
  paddingBottom: "32px",
  opacity: 0,
  animation: inView ? `${fadeInUp} 0.6s ease forwards` : "none",
  animationDelay: `${delay}ms`,
  "&:last-of-type": {
    paddingBottom: 0,
  },
}));

const TimelineDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "current",
})<{ current?: boolean }>(({ current }) => ({
  position: "absolute",
  left: current ? "-36px" : "-32px",
  top: current ? "2px" : "6px",
  width: current ? "20px" : "14px",
  height: current ? "20px" : "14px",
  borderRadius: "50%",
  backgroundColor: theme.palette.secondary.light,
  boxShadow: "0 0 0 4px #fff",
  ...(current && {
    backgroundColor: theme.palette.secondary.main,
    animation: `${pulse} 2s infinite`,
  }),
}));

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function TimelineEntry({
  year,
  text,
  delay,
  isNow,
}: {
  year: string;
  text: string;
  delay: number;
  isNow?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <TimelineItem ref={ref} inView={inView} delay={delay}>
      <TimelineDot current={isNow} />
      <Typography
        variant={isNow ? "h4" : "subtitle1"}
        sx={{
          fontWeight: isNow ? 800 : 700,
          color: "secondary.main",
          lineHeight: 1.2,
        }}
      >
        {year}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#333", fontWeight: isNow ? 600 : 400 }}
      >
        {text}
      </Typography>
    </TimelineItem>
  );
}

export default function About() {
  return (
    <StyledAbout id="about">
      <Container maxWidth="lg">
        <Grid container spacing={8} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TimelineWrapper>
              <TimelineLine />
              {timelineData.map((item, index) => (
                <TimelineEntry
                  key={item.year}
                  year={item.year}
                  text={item.text}
                  delay={index * 100}
                  isNow={item.year === "Now"}
                />
              ))}
            </TimelineWrapper>
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
    </StyledAbout>
  );
}
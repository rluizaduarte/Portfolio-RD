"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import {
  SiTypescript,
  SiPython,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiFigma,
  SiJira,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus },
      { name: "C", icon: SiC },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Web & Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Figma", icon: SiFigma },
      {name: "Jira", icon: SiJira}
    ],
  },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Box component="section" id="skills" ref={sectionRef} sx={{ backgroundColor: "#fff", py: 12 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          sx={{
            color: "#1b1b1b",
            fontWeight: 700,
            textAlign: "center",
            mb: 8,
            fontSize: { xs: "2.5rem", md: "3.2rem" },
          }}
        >
          Skills
        </Typography>

        {skillGroups.map((group, groupIndex) => (
          <Box
            key={group.title}
            sx={{
              mb: 6,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.6s ease ${groupIndex * 0.15}s, transform 0.6s ease ${groupIndex * 0.15}s`,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: "secondary.main",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
                mb: 2,
              }}
            >
              {group.title}
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {group.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <Box
                    key={skill.name}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      border: "1.5px solid #e0e0e0",
                      borderRadius: "10px",
                      px: 2.5,
                      py: 1.5,
                      transition: "border-color 0.25s ease",
                      "&:hover": {
                        borderColor: "secondary.main",
                      },
                    }}
                  >
                    <Icon size={26}/>
                    <Typography variant="body1" sx={{ color: "#1b1b1b", fontWeight: 600 }}>
                      {skill.name}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
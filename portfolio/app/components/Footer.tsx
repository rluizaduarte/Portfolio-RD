"use client";

import { Box, Container, Typography} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import theme from "../theme";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.dark,
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography sx={{ color: "rgba(255,255,255,0.6)" }}>
            © 2026 Rielly Duarte. All rights reserved.
          </Typography>

          <Box
            component="a"
            href="https://github.com/rluizaduarte"
            target="_blank"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.7,
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
              transition: "color 0.25s ease",
              position: "relative",
              "&:hover": { color: "secondary.main" },
            }}
          >
            <GitHubIcon sx={{ fontSize: 20 }} />
            <Typography>GitHub</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
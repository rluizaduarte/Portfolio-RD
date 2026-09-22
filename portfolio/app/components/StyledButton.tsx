import { styled } from "@mui/material/styles";
import { ReactNode } from "react";

const StyledButtonBase = styled("button")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "3px",
  padding: "5px 15px",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  color: theme.palette.primary.contrastText,
  cursor: "pointer",
  zIndex: 0,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.secondary.main,
    transform: "translateX(-100%)",
    transition: "transform 0.3s ease",
    zIndex: -1,
  },
  "&:hover::before": {
    transform: "translateX(0)",
  },
}));

export default function StyledButton({ children }: { children: ReactNode }) {
  return <StyledButtonBase>{children}</StyledButtonBase>;
}
import { styled } from "@mui/material/styles";
import { ReactNode } from "react";

const StyledButtonBase = styled("button")(({ theme }) => ({
  position: "relative",
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
  transition: "border-color 0.25s ease, color 0.25s ease",
  "&:hover": {
    borderColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
  },
}));

export default function StyledButton({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <StyledButtonBase onClick={onClick}>
      {children}
    </StyledButtonBase>
  );
}
import { Box, Card, styled } from "@mui/material";

const StyledContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  gap: 1,
  padding: 15,
  borderRadius: 5,
  borderWidth: 1,
  backgroundColor: theme.palette.background.paper,
  borderColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)",
  borderStyle: "solid",
  boxShadow: theme.palette.mode === "dark" ? theme.shadows[4] : "rgba(0, 0, 0, 0.1) 0px 4px 12px",
}));

const StyledMainArea = styled(Card)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.background.default,
  padding: "20px 20px 50px 20px",
  flexDirection: "column",
  borderRadius: 0,
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: "hidden",
}));

const BoxRow = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "row",
  gap: 15,
}));

const BoxColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 15,
});

const BoxRowSpaced = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center"
});

export { StyledMainArea, StyledContainer, BoxRow, BoxColumn, BoxRowSpaced };

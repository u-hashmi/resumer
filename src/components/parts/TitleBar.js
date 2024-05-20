import { Box, Checkbox, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TitleBar = ({
  title,
  button,
  handler,
  button2 = null,
  handler2 = null,
  state = null,
  noFlex = false,
  optionalVal = null,
  setOptionalParam = null,
}) => {
  const flexProp = noFlex ? { flex: 0 } : { flex: 1 };

  return (
    <Box sx={{ gap: 1, display: "flex", flexDirection: "column", mt: 1, ...flexProp }}>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1, mt: 1, justifyContent: "space-between" }}>
        <Typography variant="h6" color="primary.main">
          {title}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 0 }}>
          {button === "add" && (
            <IconButton color="primary" onClick={handler}>
              <AddBoxIcon />
            </IconButton>
          )}
          {button2 === "expand" && (
            <IconButton color="none" onClick={handler2}>
              <ExpandMoreIcon
                sx={{
                  transform: `rotate(${state != null && state ? "180deg" : "0deg"})`,
                }}
              />
            </IconButton>
          )}
          {setOptionalParam ? (
            <Checkbox
                checked={optionalVal}
                onChange={(e) => {
                    setOptionalParam(e.target.checked);
                }}
            />
          ) : null}
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};
export default TitleBar;

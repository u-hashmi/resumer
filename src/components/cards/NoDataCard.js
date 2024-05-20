import React from "react";
import { BoxColumn } from "../parts/StyledComponents";
import { Typography } from "@mui/material";

function NoDataCard({title}) {
  return (
    <BoxColumn sx={{ p: 2, gap: 0 }}>
      <Typography variant="h6" color="primary.main">
        No {title} Data Added
      </Typography>
    </BoxColumn>
  );
}

export default NoDataCard;

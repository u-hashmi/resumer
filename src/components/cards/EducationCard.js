import React from "react";
import { BoxColumn, BoxRowSpaced } from "../parts/StyledComponents";
import { Box, Typography } from "@mui/material";

function EducationCard(props) {
  return (
    <BoxColumn sx={{ p: 1, pt: 2, gap: 0 }}>
      <Box>
        <BoxRowSpaced>
        <Typography variant="h6" color="primary.main">
          {props.entity.degree} in {props.entity.major}
        </Typography>
        <Typography variant="subtitle2">{props.entity.gpa}</Typography>
        </BoxRowSpaced>
        <Typography variant="subtitle2">{props.entity?.school}</Typography>
        <Typography variant="subtitle2">
          {props.entity.startDate} - {props.entity.endDate}
        </Typography>
      </Box>
    </BoxColumn>
  );
}

export default EducationCard;

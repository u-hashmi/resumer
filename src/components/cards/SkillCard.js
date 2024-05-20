import { Typography } from "@mui/material";
import React from "react";
import { BoxColumn } from "../parts/StyledComponents";

const SkillCard = (props) => {
  return (
    <BoxColumn sx={{ p: 1, pt: 3,}}>
      <Typography variant="h6" lineHeight={0} color="primary.main">
        {props.entity?.skillTitle}
      </Typography>
      <Typography variant="subtitle2">{props.entity?.allSkills}</Typography>
    </BoxColumn>
  );
};

export default SkillCard;

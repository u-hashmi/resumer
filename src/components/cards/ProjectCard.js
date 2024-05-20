import { Typography } from "@mui/material";
import React from "react";
import { BoxColumn } from "../parts/StyledComponents";

const ProjectCard = (props) => {
  return (
    <BoxColumn sx={{ p: 2, gap: 0 }}>
      <Typography variant="h6" color="primary.main">
        {props.entity.projectName}
      </Typography>
      <Typography variant="subtitle2">{props.entity.projectDescription}</Typography>
      <Typography variant="caption">{props.entity.projectLink}</Typography>
    </BoxColumn>
  );
};

export default ProjectCard;

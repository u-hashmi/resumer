import { Box, Typography } from '@mui/material';
import React from 'react';
import { BoxColumn } from '../parts/StyledComponents';

const ExperienceCard = (props) => {
    return (
      <BoxColumn sx={{p: 2}}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1, justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" color="primary.main">{props.entity.companyName}</Typography>
            <Typography variant="subtitle2">{props.entity.location}</Typography>
          </Box>
          <Typography variant="subtitle2">
            {props.entity.startDate} - {props.entity.endDate}
          </Typography>
          {props.entity.description.split("•").map((line, index) => {
            if (line.trim() === "") return null;
            return (
              <Typography key={index} variant="caption">
                • {line}
              </Typography>
            );
          })}
        </Box>
      </BoxColumn>
    );
  };

export default ExperienceCard
import React, { useState } from "react";
import { BoxColumn, BoxRow } from "./StyledComponents";
import TitleBar from "./TitleBar";
import { createInputField } from "./CommonFunctions";
import { Accordion, AccordionDetails, AccordionSummary, Button } from "@mui/material";

function PersonalInfoSection({ personalInfo, setPersonalInfo }) {
  const [expand, setExpand] = useState(true);
  const toggleAcordion = () => {
    setExpand(!expand);
  };

  const clearData = () => {
    setPersonalInfo({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      location: "",
      github: "",
      linkedin: "",
    });
  };

  return (
    <Accordion expanded={expand}>
      <AccordionSummary sx={{ flex: 1, display: "flex", width: "100%" }}>
        <TitleBar title="Personal Info" button2="expand" handler2={toggleAcordion} state={expand} />
      </AccordionSummary>
      <AccordionDetails sx={{pb: 4}}>
        <BoxColumn>
          <BoxRow>
            {createInputField("First Name", personalInfo, "firstName", setPersonalInfo)}
            {createInputField("Last Name", personalInfo, "lastName", setPersonalInfo)}
          </BoxRow>
          <BoxRow>
            {createInputField("Phone Number", personalInfo, "phoneNumber", setPersonalInfo)}
            {createInputField("Email", personalInfo, "email", setPersonalInfo)}
          </BoxRow>
          <BoxRow>
            {createInputField("Location", personalInfo, "location", setPersonalInfo)}
            {createInputField("Github", personalInfo, "github", setPersonalInfo)}
            {createInputField("Linkedin", personalInfo, "linkedin", setPersonalInfo)}
          </BoxRow>
          <BoxRow sx={{justifyContent: 'flex-end'}}>
            <Button variant="contained" color="primary" onClick={clearData}>
                Clear
            </Button>
        </BoxRow>
        </BoxColumn>       
      </AccordionDetails>
    </Accordion>
  );
}

export default PersonalInfoSection;

import React, { useEffect, useState } from "react";
import { StyledContainer } from "../parts/StyledComponents";
import PersonalInfoSection from "../parts/PersonalInfoSection";
import GenericSection from "../parts/GenericSection";
import { educationEntryConfig, experienceConfig, projectsConfig, skillConfig } from "../parts/AllConfigs";
import { Button } from "@mui/material";

function SettingArea({ setResumeData, setVisiblity }) {
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    location: "",
    github: "",
    linkedin: "",
  });
  const [showProjects, setShowProjects] = useState(false);

  const handleVisible = () => {
    setShowProjects(!showProjects);
    setVisiblity({
      projectsSection: showProjects,
    });
  }
  
  const clearAll = () => {
    setPersonalInfo({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      location: "",
      github: "",
      linkedin: "",
    });
    setSkills([]);
    setExperiences([]);
    setEducation([]);
    setProjects([]);
  };

  useEffect(() => {
    setResumeData({
      personalInfo: personalInfo,
      skills: skills,
      experiences: experiences,
      education: education,
      projects: projects,
    });
  }, [personalInfo, education, skills, experiences, projects, setResumeData]);

  return (
    <StyledContainer sx={{ flex: 1, maxHeight: 820, width: 800, gap: 2 }}>
      <PersonalInfoSection personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
      <PersonalInfoSection personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />

      <GenericSection config={skillConfig} entities={skills} setEntities={setSkills} ViewCard={skillConfig.viewCard} />
      
      <GenericSection
        config={experienceConfig}
        entities={experiences}
        setEntities={setExperiences}
        ViewCard={experienceConfig.viewCard}
      />

      <GenericSection
        config={educationEntryConfig}
        entities={education}
        setEntities={setEducation}
        ViewCard={educationEntryConfig.viewCard}
      />

      <GenericSection
        config={projectsConfig}
        entities={projects}
        setEntities={setProjects}
        ViewCard={projectsConfig.viewCard}
        optionalVal={showProjects}
        setOptionalParam={handleVisible}
      />
      <Button variant="contained" color="primary" onClick={clearAll}>
        Clear All
      </Button>
    </StyledContainer>
  );
}

export default SettingArea;

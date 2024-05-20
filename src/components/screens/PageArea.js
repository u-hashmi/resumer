import React from "react";
import { BoxColumn } from "../parts/StyledComponents";
import { Box, Divider, Typography } from "@mui/material";
import TitleBar from "../parts/TitleBar";

function PageArea({ resumeData, visiblity }) {
  const placeholderSkills = [
    {
      skillTitle: "Frontend",
      allSkills: "React, Angular, Vue",
    },
    {
      skillTitle: "Backend",
      allSkills: "Node, Express, Django, Flask",
    },
  ];

  const placeholderExperience = [
    {
      jobTitle: "Software Engineer",
      companyName: "Google",
      location: "Mountain View, CA",
      startDate: "01/2019",
      endDate: "Present",
      description: `
        • Worked on the Google search engine
        • Implemented new features
        • Fixed bugs
        • Create unit tests for new features and bug fixes
      `,
    },
    {
      jobTitle: "Software Engineer",
      companyName: "Facebook",
      location: "Menlo Park, CA",
      startDate: "01/2017",
      endDate: "01/2019",
      description: `
        • Worked on the Facebook news feed
        • Implemented new features
        • Fixed bugs
      `,
    },
  ];

  const placeholderEducation = [
    {
      degree: "Bachelor's Degree",
      major: "Computer Science",
      school: "University of California, Los Angeles",
      startDate: "09/2015",
      endDate: "06/2019",
    },
  ];

  const placeholderProjects = [
    {
      projectName: "Project 1",
      description: "Description 1",
      startDate: "01/2019",
      endDate: "Present",
    },
    {
      projectName: "Project 2",
      description: "Description 2",
      startDate: "01/2017",
      endDate: "01/2019",
    },
  ];

  resumeData.skills = resumeData.skills?.length !== 0 ? resumeData.skills : placeholderSkills;
  resumeData.experiences = resumeData.experiences?.length !== 0 ? resumeData.experiences : placeholderExperience;
  resumeData.education = resumeData.education?.length !== 0 ? resumeData.education : placeholderEducation;
  resumeData.projects = resumeData.projects?.length !== 0 ? resumeData.projects : placeholderProjects;

  return (
    <Box sx={{ flex: 1, p: 5, backgroundColor: '#fff' }}>
      <Typography variant="h4">
        {resumeData?.personalInfo?.firstName || "John"} {resumeData?.personalInfo?.lastName || "Doe"}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1, mt: 1 }}>
        <Typography variant="body2">{resumeData?.personalInfo?.phoneNumber || "(123) 456-7891"}</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="body2">{resumeData?.personalInfo?.email || "resumer.info@fixer.com"}</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="body2">{resumeData?.personalInfo?.location || "Los Angeles, CA"}</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="body2">github.com/{resumeData?.personalInfo?.github || "resumer.info"}</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="body2">linkedin.com/{resumeData?.personalInfo?.linkedin || "resumer.info"}</Typography>
      </Box>

      <TitleBar title="Skills" noFlex={true} />
      <BoxColumn sx={{ mt: 1, gap: 0 }}>
        {resumeData?.skills?.map((skill, index) => (
          <Box key={index} sx={{ display: "flex", gap: 1, alignItems: "baseline" }}>
            <Typography variant="body" color="text.secondary">
              {skill.skillTitle}:
            </Typography>
            <Typography variant="subtitle2">{skill.allSkills}</Typography>
          </Box>
        ))}
      </BoxColumn>

      <TitleBar title="Work Experience" noFlex={true} />
      <BoxColumn sx={{ mt: 1, gap: 0 }}>
        {resumeData?.experiences?.map((experience, index) => (
          <Box key={index}>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 1 }}>
              <Typography sx={{ textAlign: "center", display: "flex", alignItems: "baseline", gap: 0.7 }}>
                <Typography variant="h6" lineHeight={0} color="primary.main">
                  {experience?.jobTitle}
                </Typography>
                at
                <Typography variant="h6" lineHeight={0} color="primary.secondary">
                  {experience?.companyName},
                </Typography>
                {experience?.location}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 1,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            ></Box>
            <Typography variant="subtitle2">
              {experience?.startDate} - {experience?.endDate}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {experience?.description.split("•").map((line, index) => {
                if (line.trim() === "") return null;
                return (
                  <Typography key={index} variant="body3">
                    • {line}
                  </Typography>
                );
              })}
            </Box>
          </Box>
        ))}
      </BoxColumn>

      <TitleBar title="Education" noFlex={true} />
      <BoxColumn sx={{ mt: 1, gap: 0 }}>
        {resumeData?.education?.map((education, index) => (
          <Box key={index}>
            <Typography variant="h6" color="primary.main">
              {education?.degree}
            </Typography>
            <Typography variant="subtitle2">{education?.major}</Typography>
            <Typography variant="subtitle2">
              {education?.school}, {education?.location}
            </Typography>
            <Typography variant="subtitle2">
              {education?.startDate} - {education?.endDate}
            </Typography>
          </Box>
        ))}
      </BoxColumn>

      {visiblity.projectsSection && (
        <>
          <TitleBar title="Projects" noFlex={true} />
          <BoxColumn sx={{ mt: 1, gap: 0 }}>
            {resumeData?.projects?.map((project, index) => (
              <Box key={index}>
                <Typography variant="h6" color="primary.main">
                  {project?.projectName || "Project Name"}
                </Typography>
                <Typography variant="subtitle2">{project?.description || "Project Description"}</Typography>
                <Typography variant="subtitle2">
                  {project?.startDate || "01/2019"} - {project?.endDate || "Present"}
                </Typography>
              </Box>
            ))}
          </BoxColumn>
        </>
      )}
    </Box>
  );
}

export default PageArea;

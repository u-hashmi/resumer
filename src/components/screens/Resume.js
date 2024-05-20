import React from "react";
import { Page, Text, View, Document, StyleSheet, Font } from "@react-pdf/renderer";

// Define the styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontWeight: 700,
    fontSize: 12,
  },
  section: {
    marginBottom: 2,
  },
  underline: {
    fontSize: 6,
    fontFamily: "Gabarito",
    fontWeight: "normal",
    marginBottom: 3,
  },
  title: {
    fontSize: 22,
    fontFamily: "Gabarito",
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: "Gabarito",
    fontWeight: "bold",
    color: "#2c2c2c",
    fontSize: 14,
    marginBottom: -5,
  },
  text: {
    fontFamily: "Gabarito",
    fontWeight: "normal",
    fontSize: 10,
    marginBottom: 2,
  },
  divider: {
    flexDirection: "row",
    backgroundColor: "#000",
    textAlign: "center",
  },
  oneRow: {
    flexDirection: "row",
    gap: 4,
    alignItems: "baseline",
    textAlign: "center",
  },
  skillTitle: {
    fontSize: 12,
    fontFamily: "Gabarito",
    fontWeight: "bold",
    marginBottom: 2,
    
  },
  jobTitle: {
    fontFamily: "Gabarito",
    fontWeight: "bold",
    fontSize: 12,
  },
  companyName: {
    fontFamily: "Gabarito",
    fontWeight: "normal",
    fontSize: 10,
  },
  projectTitle: {
    fontWeight: "bold",
  },
});

Font.register({
  family: "Gabarito",
  fonts: [
    { src: require("../../assets/fonts/Gabarito-Regular.ttf") },
    { src: require("../../assets/fonts/Gabarito-Bold.ttf"), fontWeight: 700 },
  ],
});

const Resume = ({ resumeData, visiblity }) => {
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

  const longLine = "_".repeat(160);

  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>
          {resumeData?.personalInfo?.firstName || "John"} {resumeData?.personalInfo?.lastName || "Doe"}
        </Text>
        <View style={styles.section}>
          <Text style={styles.text}>
            {resumeData?.personalInfo?.phoneNumber || "(123) 456-7891"}
            {" | "}
            {resumeData?.personalInfo?.email || "resumer.info@fixer.com"}
            {" | "}
            {resumeData?.personalInfo?.location || "Los Angeles, CA"}
            {" | "}
            {resumeData?.personalInfo?.github || "resumer.info"}
            {" | "}
            {resumeData?.personalInfo?.linkedin || "resumer.info"}
          </Text>
        </View>
        <Text style={styles.subtitle}>Skills</Text>
        <Text style={styles.underline}>{longLine}</Text>
        <View style={styles.section}>
          {resumeData?.skills?.map((skill, index) => (
            <View key={index} style={styles.oneRow}>
              <Text style={styles.skillTitle}>{skill.skillTitle}:</Text>
              <Text style={styles.text}>{skill.allSkills}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.subtitle}>Work Experience</Text>
        <Text style={styles.underline}>{longLine}</Text>
        <View style={styles.section}>
          {resumeData?.experiences?.map((experience, index) => (
            <View key={index} style={styles.section}>
              <View style={styles.oneRow}>
                <Text style={styles.jobTitle}>{experience?.jobTitle}</Text>
                <Text style={styles.companyName}>
                  at {experience?.companyName}, {experience?.location}
                </Text>
              </View>
              <Text style={styles.text}>
                {experience?.startDate} - {experience?.endDate}
              </Text>
              <View>
                {experience?.description.split("•").map((line, index) => {
                  if (line.trim() === "") return null;
                  return (
                    <Text key={index} style={styles.text}>
                      • {line.trim()}
                    </Text>
                  );
                })}
              </View>
            </View>
          ))}
        </View>

        <Text style={styles.subtitle}>Education</Text>
        <Text style={styles.underline}>{longLine}</Text>
        <View style={styles.section}>
          {resumeData?.education?.map((education, index) => (
            <View key={index} style={styles.section}>
                 <Text style={styles.jobTitle}>{education?.degree} {education?.major}</Text>
                <Text style={styles.text}>{education?.school}</Text>
              <Text style={styles.text}>
                {education?.startDate} - {education?.endDate}
              </Text>
            </View>
          ))}
        </View>

        {visiblity.projectsSection && (
          <>
            <Text style={styles.subtitle}>Projects</Text>
            <Text style={styles.underline}>{longLine}</Text>
            <View style={styles.section}>
              {resumeData?.projects?.map((project, index) => (
                <View key={index} style={styles.section}>
                  <Text style={styles.projectTitle}>{project?.projectName || "Project Name"}</Text>
                  <Text style={styles.text}>{project?.description || "Project Description"}</Text>
                  <Text style={styles.text}>
                    {project?.startDate || "01/2019"} - {project?.endDate || "Present"}
                  </Text>
                </View>
              ))}
            </View>
          </>
        )}
      </Page>
    </Document>
  );
};

export default Resume;

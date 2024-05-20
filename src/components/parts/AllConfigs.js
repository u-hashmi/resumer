import SkillCard from "../cards/SkillCard";
import EducationCard from "../cards/EducationCard";
import ExperienceCard from "../cards/ExperienceCard";
import ProjectCard from "../cards/ProjectCard";

const educationEntryConfig = {
  title: "Education",
  entityObject: {
    school: "",
    degree: "",
    major: "",
    gpa: "",
    location: "",
    startDate: "",
    endDate: "",
  },
  viewCard: EducationCard,
  config: [
    {
      orientation: "row",
      fields: [
        {
          title: "School",
          key: "school",
        },
        {
          title: "Location",
          key: "location",
        },
      ],
    },
    {
      orientation: "row",
      fields: [
        {
          title: "Degree",
          key: "degree",
        },
        {
          title: "Major",
          key: "major",
        },
        {
            title: "GPA",
            key: "gpa",
            required: false,
        }
      ],
    },
    {
      orientation: "row",
      fields: [
        {
          title: "Start Date",
          key: "startDate",
        },
        {
          title: "End Date",
          key: "endDate",
        },
      ],
    },
  ],
};

const skillConfig = {
  title: "Skills",
  entityObject: {
    skillTitle: "",
    allSkills: "",
  },
  viewCard: SkillCard,
  config: [
    {
      orientation: "row",
      fields: [
        {
          title: "Title",
          key: "skillTitle",
        },
      ],
    },
    {
      orientation: "row",
      fields: [
        {
          title: "All Skills",
          key: "allSkills",
          multiline: true,
        },
      ],
    },
  ],
};

const experienceConfig = {
  title: "Experience",
  entityObject: {
    companyName: "",
    jobTitle: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  },
  viewCard: ExperienceCard,
  config: [
    {
      orientation: "row",
      fields: [
        {
          title: "Company Name",
          key: "companyName",
        },
        {
          title: "Job Title",
          key: "jobTitle",
        },
      ],
    },
    {
      orientation: "row",
      fields: [
        {
          title: "Start Date",
          key: "startDate",
        },
        {
          title: "End Date",
          key: "endDate",
        },
        {
          title: "Location",
          key: "location",
        },
      ],
    },
    {
      orientation: "row",
      fields: [
        {
          title: "Description",
          key: "description",
          multiline: true,
        },
      ],
    },
  ],
};

const projectsConfig = {
  title: "Projects",
  entityObject: {
    projectName: "",
    projectDescription: "",
    projectLink: "",
  },
  viewCard: ProjectCard,
  config: [
    {
      orientation: "row",
      fields: [
        {
          title: "Project Name",
          key: "projectName",
        },
        {
          title: "Project Link",
          key: "projectLink",
        },
      ],
    },
    {
      orientation: "row",
      fields: [
        {
          title: "Description",
          key: "projectDescription",
          multiline: true,
        },
      ],
    },
  ],
};

export { educationEntryConfig, skillConfig, experienceConfig, projectsConfig };

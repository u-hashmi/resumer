import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import PageArea from "./PageArea";
import SettingArea from "./SettingArea";
import { BoxColumn, BoxRowSpaced } from "../parts/StyledComponents";
import Resume from "./Resume";
import { PDFViewer } from "@react-pdf/renderer";

const MainArea = ({ handleSetMode }) => {
  const [resumeData, setResumeData] = useState({
    personalInfo: null,
    skills: [],
    experiences: [],
    education: [],
    projects: [],
  });

  const [visiblity, setVisiblity] = useState({
    projectsSection: false,
  });

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          height: "100%",
          gap: 2,
          flexDirection: "row",
        }}
      >
        <BoxColumn>
          <BoxRowSpaced>
            <Typography variant="h6">Settings</Typography>
            <Button variant="contained" color="primary" sx={{ width: 200 }} onClick={handleSetMode}>
              Dark Mode
            </Button>
          </BoxRowSpaced>
          <SettingArea setResumeData={setResumeData} setVisiblity={setVisiblity} />
        </BoxColumn>
        <BoxColumn sx={{ flex: 2 }}>
          <Typography variant="h6">Preview</Typography>
          {/* <PageArea resumeData={resumeData} visiblity={visiblity} /> */}
          <PDFViewer width="100%" height="100%">
            <Resume resumeData={resumeData} visiblity={visiblity} />
          </PDFViewer>
        </BoxColumn>
      </Box>
    </Box>
  );
};

export default MainArea;

import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import TitleBar from "./TitleBar";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { createInputField } from "./CommonFunctions";
import NoDataCard from "../cards/NoDataCard";

const GenericSection = ({ config, entities, setEntities, ViewCard, optionalVal = true, setOptionalParam = null }) => {
  const theme = useTheme();
  const [expand, setExpand] = useState(false);
  const [isExisting, setIsExisting] = useState(false);
  const [editingEntities, setEditingEntities] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [entityData, setEntityData] = useState(config.entityObject);

  const toggleAcordion = () => {
    setExpand(!expand);
  };

  const getKeys = () => {
    const keys = [];
    config.config.forEach((configGroup) => {
      configGroup.fields.forEach((field) => {
        if (field.required !== false) {
          keys.push(field.key);
        }
      });
    });
    return keys;
  };

  const handleEntityAdd = () => {
    if (getKeys().some((key) => !entityData[key])) {
      setErrorText(`Please fill out all fields`);
      return;
    }
    setEntities([...entities, entityData]);
    setEntityData(config.entityObject);
    setEditingEntities(false);
    setErrorText("");
  };

  const handleEntryOpen = (index = undefined) => {
    setExpand(true);
    if (index !== undefined) {
      setEntities(entities.filter((_, i) => i !== index));
      setEntityData(entities[index]);
      setIsExisting(true);
    }
    setEditingEntities(true);
  };

  const cancelEntityEdit = () => {
    if (editingEntities) {
      if (getKeys().some((key) => !entityData[key])) {
        setEditingEntities(false);
        setErrorText("");
        return;
      }
      setEntities([...entities, entityData]);
      setEditingEntities(false);
      setErrorText("");
    } else {
      setEntityData(config.entityObject);
      setEditingEntities(false);
      setErrorText("");
    }
  };

  const handleProjectDelete = (index) => {
    setEntities(entities.filter((_, i) => i !== index));
  };

  return (
    <Accordion expanded={expand}>
      <AccordionSummary sx={{ flex: 1, display: "flex", width: "100%" }}>
        <TitleBar
          title={config.title}
          button="add"
          handler={() => handleEntryOpen()}
          button2="expand"
          handler2={toggleAcordion}
          state={expand}
          optionalVal={optionalVal}
          setOptionalParam={setOptionalParam}
        />
      </AccordionSummary>
      <AccordionDetails sx={{ flex: 1, pb: 3, display: "flex", flexDirection: "column", gap: 1 }}>
        {entities.length === 0 ? (
          <Card sx={{ p: 1, boxShadow: theme.shadowMedium }} variant="outlined">
            <NoDataCard title={config.title} />
          </Card>
        ) : (
          <>
            {entities.map((entity, index) => (
              <Card sx={{ p: 1, boxShadow: theme.shadowMedium }} variant="outlined" key={index}>
                <ViewCard entity={entity} index={index} />
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <IconButton variant="contained" color="primary" onClick={() => handleEntryOpen(index)}>
                      <DriveFileRenameOutlineIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleProjectDelete(index)}>
                      <DeleteIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                  </Box>
                </Box>
              </Card>
            ))}
          </>
        )}

        {editingEntities && (
          <Box sx={{ gap: 1, display: "flex", flexDirection: "column" }}>
            {errorText && (
              <Typography variant="subtitle1" color="error">
                {errorText}
              </Typography>
            )}
            {config.config.map((config, index) => {
              let flexDirection = "column";
              if (config.orientation === "row") {
                flexDirection = "row";
              }

              return (
                <Box key={index} sx={{ display: "flex", flexDirection: flexDirection, gap: 1 }}>
                  {config.fields.map((field, index) => {
                    return createInputField(field.title, entityData, field.key, setEntityData, field.type, field.multiline);
                  })}
                </Box>
              );
            })}
            <Box sx={{ display: "flex", flexDirection: "row", gap: 1, flex: 1 }}>
              <Button variant="contained" color="secondary" onClick={(index) => cancelEntityEdit(index)} fullWidth>
                Cancel
              </Button>
              <Button variant="contained" color="primary" onClick={handleEntityAdd} fullWidth>
                {isExisting ? "Update" : "Add"}
              </Button>
            </Box>
          </Box>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default GenericSection;

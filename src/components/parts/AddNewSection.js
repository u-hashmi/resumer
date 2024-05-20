import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { createInputField } from "./CommonFunctions";
import { BoxColumn, BoxRow } from "./StyledComponents";

function AddNewSection({ newSectionEntryOpen, setNewSectionEntryOpen }) {
  const [fields, setFields] = useState([]);
  const [isExisting, setIsExisting] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [entryItem, setEntryItem] = useState({
    order: 0,
    title: "",
    key: "",
    multiline: false,
    orientation: "column",
  });

  const createFieldEntry = () => {
    if(entryItem.title === "" || entryItem.key === "") {
        setErrorText("Field Title and Key are required.");
        return;
    }
    setIsExisting(false);
    setErrorText("");
    setFields([...fields, entryItem]);
    setEntryItem({
      order: 0,
      title: "",
      key: "",
      multiline: false,
      orientation: "column",
    });
  };

  const handleEditField = (index) => {
    console.log(fields[index]);
    setEntryItem(fields[index]);
    setFields(fields.filter((item, i) => i !== index));
    setIsExisting(true);
  };

  const createSection = ()  => {
    setNewSectionEntryOpen(false);
  };

  return (
    <Box>
      {newSectionEntryOpen && (
        <Modal
          open={newSectionEntryOpen}
          onClose={() => setNewSectionEntryOpen(false)}
          sx={{ justifySelf: "center", alignSelf: "center" }}
        >
          <Card sx={{ p: 5, gap: 2, width: 800, justifySelf: "center", display: "flex", flexDirection: "column" }}>
            {createInputField("Section Title", {}, "sectionTitle", () => {})}
            <Card sx={{ p: 2, gap: 2 }} variant="outlined">
              <Typography variant="h6">Fields</Typography>
              {fields.length > 0 &&
                fields.map((field, index) => {
                  return (
                    <BoxColumn sx={{ justifyContent: "center", p: 2, gap: 0 }} key={index}>
                      <BoxRow sx={{ gap: 1 }}>
                        <Typography variant="subtitle1" color="primary.main">
                          Order:
                        </Typography>
                        <Typography variant="subtitle1">{field.order}</Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography variant="subtitle1" color="primary.main">
                          Title:
                        </Typography>
                        <Typography variant="subtitle1">{field.title}</Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography variant="subtitle1" color="primary.main">
                          Key:
                        </Typography>
                        <Typography variant="subtitle1">{field.key}</Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography variant="subtitle1" color="primary.main">
                          IsMultiline:
                        </Typography>
                        <Typography variant="subtitle1">{field.multiline ? "True" : "False"}</Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography variant="subtitle1" color="primary.main">
                          Orientation:
                        </Typography>
                        <Typography variant="subtitle1">{field.orientation}</Typography>
                        <Divider orientation="vertical" flexItem />
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          onClick={() => setFields(fields.filter((item, i) => i !== index))}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          onClick={() => handleEditField(index)}
                        >
                          Edit
                        </Button>
                      </BoxRow>
                    </BoxColumn>
                  );
                })}
            </Card>
            <BoxColumn>
              <BoxRow>
                <TextField 
                    label="Order" 
                    variant="outlined" 
                    size = "small"
                    type="number"
                    value={parseInt(entryItem?.order) || 0} 
                    onChange={(e) => setEntryItem({ ...entryItem, order: e.target.value })}
                />

                {createInputField(" Title", entryItem, "title", setEntryItem)}
                {createInputField("Key", entryItem, "key", setEntryItem)}
              </BoxRow>
              <BoxRow>
                <FormControl>
                  <FormLabel>Other</FormLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={false}
                        checked={entryItem.multiline}
                        onChange={(e) => setEntryItem({ ...entryItem, multiline: e.target.checked })}
                      />
                    }
                    label="Multiline"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Orientation</FormLabel>
                  <RadioGroup
                    defaultValue="column"
                    sx={{ flexDirection: "row" }}
                    onChange={(e) => setEntryItem({ ...entryItem, orientation: e.target.value })}
                    value={entryItem.orientation}
                  >
                    <FormControlLabel value="row" control={<Radio />} label="Horizontal" />
                    <FormControlLabel value="column" control={<Radio />} label="Vertical" />
                  </RadioGroup>
                </FormControl>
              </BoxRow>
              {
                errorText && (
                  <Typography variant="subtitle1" color="error">
                    {errorText}
                  </Typography>
                )
              }
            </BoxColumn>
            <BoxRow sx={{ justifyContent: "space-between" }}>
              <Button variant="contained" color="primary" onClick={createFieldEntry}>
              {isExisting ? "Update" : "Add"} Fields
              </Button>
              <BoxRow>
                <Button variant="contained" color="primary" onClick={() => setNewSectionEntryOpen(false)}>
                  Close
                </Button>
                <Button variant="contained" color="primary" onClick={createSection}>
                Add
                </Button>
              </BoxRow>
            </BoxRow>
          </Card>
        </Modal>
      )}
    </Box>
  );
}

export default AddNewSection;

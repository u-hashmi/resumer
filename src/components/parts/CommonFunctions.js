import { TextField } from "@mui/material";

const createInputField = (label, objValue, infoName, changeMethod, type = "string", multiLine = false,) => {
  const handleValueChange = (e, changeMethod, objValue, infoName) => {
    changeMethod({ ...objValue, [infoName]: e.target.value });
  };

  return (
    <TextField
      label={label}
      variant="outlined"
      size="small"
        type={type}
      value={objValue[infoName]}
      fullWidth
      multiline={multiLine}
      rows={multiLine ? 4 : 1}
      onChange={(e) => handleValueChange(e, changeMethod, objValue, infoName)}
    />
  );
};

export { createInputField };

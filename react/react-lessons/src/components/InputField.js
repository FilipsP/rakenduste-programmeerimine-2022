import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";

const InputField = () => {
  const [text, setText] = useState("");

  const handleInput = (event) => {
    setText(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "40px",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Text input"
        variant="outlined"
        onChange={handleInput}
      />
      <h3>{text}</h3>
    </Box>
  );
};

export default InputField;

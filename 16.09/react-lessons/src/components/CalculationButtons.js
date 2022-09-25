import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const CalculationButtons = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => setCount(count - 1)}>-1</Button>
          <Button onClick={() => setCount(count - 100)}>-100</Button>
        </ButtonGroup>
        <h1>{JSON.stringify(count)}</h1>
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => setCount(count + 1)}>+1</Button>
          <Button onClick={() => setCount(count + 100)}>+100</Button>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default CalculationButtons;

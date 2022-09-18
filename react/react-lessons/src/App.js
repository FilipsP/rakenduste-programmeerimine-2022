import "./App.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";

/*
const App = () => {
  return(
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <PropExample name = "Filipp"></PropExample>
      </header>
    </div>
  );
}
*/

const App = () => {
  //const [show, setShow] = React.useState(true)
  const [show, setShow] = useState(true);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "25px",
        height: "100vh",
      }}
    >
      <PropExample name="Filipp"></PropExample>
      <Button
        variant="contained"
        color="success"
        onClick={() => setShow(!show)}
      >
        Toggle popup {JSON.stringify(show)}
      </Button>

      <MimicPopup show={show} setShow={setShow} />

      <MimicPopup2 show={show} />
    </Box>
  );
};

const MimicPopup = ({ show, setShow }) => {
  return (
    <>
      {show && (
        <>
          <Typography>Showing popup</Typography>
          <Button
            variant="contained"
            color="success"
            onClick={() => setShow(false)}
          >
            Hide popup
          </Button>
        </>
      )}
    </>
  );
};

const MimicPopup2 = ({ show }) => {
  if (show === true) {
    return <h1>Showing</h1>;
  } else {
    return <h1>Hidden</h1>;
  }
};

// * 1 variant
const PropExample = (props) => <h1>Hello {props.name}</h1>;

// * 2 variant
/*
const PropExample = (props) => {
    const {name} = props
    return <h1>Hello {name}</h1>
}
*/

// * 3 variant
/*
const PropExample = ({name}) => <h1>Hello {name}</h1>

PropExample.defaultProps = {
  name: 'Some name'
}
*/
// * PropTypes

export default App;

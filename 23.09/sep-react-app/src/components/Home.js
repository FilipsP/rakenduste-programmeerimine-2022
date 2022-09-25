import { useState } from "react"
import { Box, Button } from "@mui/material"
import Toggle from "./Toggle"
import Counter from "./Counter"
const Home = () => {
  const [show, setShow] = useState(true)
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "25px",
          height: "50vh"
        }}
      >
        <Counter />
        {show && <Toggle />}
        <Button
          color="error"
          variant="contained"
          onClick={() => setShow(!show)}
        >
          Toggle toggle
        </Button>
      </Box>
    </>
  )
}

export default Home

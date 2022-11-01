import { Box, Button, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"

const TestPage = () => {
  return (
    <>
      <LocalStorageForm />
    </>
  )
}

const LocalStorageForm = () => {
  const [localStorageVal, setLocalStorageVal] = useState(() => {
    const getLocalStorageVal = localStorage.getItem("localStorageVal")
    const parsedLocalStorageVal = JSON.parse(getLocalStorageVal)
    return parsedLocalStorageVal || " "
  })
  useEffect(() => {
    localStorage.setItem("localStorageVal", JSON.stringify(localStorageVal))
  }, [localStorageVal])
  return (
    <Box
      sx={{
        margin: "50px",
        width: "50vw",
        gap: "20px"
      }}
    >
      <Typography variant="h6">LocalStorage test</Typography>
      <form>
        <TextField
          id="localStorageTest"
          type="text"
          placeholder="Enter text"
          label="Text"
          value={localStorageVal}
          onChange={e => setLocalStorageVal(e.target.value)}
        ></TextField>
        <Button
          type="submit"
          sx={{
            marginLeft: "10px",
            height: "55px"
          }}
        >
          Add
        </Button>
      </form>
      <Typography sx={{ marginTop: "20px" }}></Typography>
    </Box>
  )
}

export default TestPage

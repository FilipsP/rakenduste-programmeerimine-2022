import { useEffect, useState } from "react"
import { Card, Typography, FormControl, TextField, Button } from "@mui/material"

const Form = props => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    console.log({ name, email })
  }, [name, email])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card
          variant="outlined"
          sx={{
            maxWidth: "450px",
            margin: "auto",
            marginTop: "100px",
            padding: "20px"
          }}
        >
          <Typography
            variant="h4"
            align="center"
            marginBottom="20px"
          >
            Form
          </Typography>
          <FormControl sx={{ gap: "20px", width: "100%" }}>
            <TextField
              required
              fullWidth
              variant="outlined"
              id="firstName"
              type="text"
              placeholder="Enter your name"
              label="Name"
            ></TextField>
            <TextField
              required
              fullWidth
              variant="outlined"
              id="password"
              type="password"
              placeholder="Enter your password"
              label="Password"
            ></TextField>
            <Button
              variant="outlined"
              sx={{ width: "50%", margin: "auto" }}
              type="submit"
            >
              Login
            </Button>
          </FormControl>
        </Card>
      </form>
    </>
  )
}

export default Form

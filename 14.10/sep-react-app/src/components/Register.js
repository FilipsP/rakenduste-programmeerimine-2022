import { useEffect, useState } from "react"
import { Card, Typography, FormControl, TextField, Button } from "@mui/material"
import axios from "axios"

const Register = props => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [registrationStatus, setRegistrationStatus] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()

    axios
      .post("http://localhost:8080/auth/signup", {
        name: name,
        email: email,
        password: password
      })
      .then(res => {
        setRegistrationStatus("Successfully registered!")
      })
      .catch(err => {
        for (let i = 0; i < Object.keys(err.response.data.errors).length; i++) {
          setRegistrationStatus(err.response.data.errors[i].msg)
        }
      })
  }

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
            Register
          </Typography>

          <Typography
            variant="h6"
            align="center"
            margin="10px"
          >
            {registrationStatus}
          </Typography>

          <FormControl sx={{ gap: "20px", width: "100%" }}>
            <TextField
              required
              fullWidth
              variant="outlined"
              placeholder="Enter your name"
              label="Name"
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            ></TextField>
            <TextField
              required
              fullWidth
              variant="outlined"
              placeholder="Enter your email"
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></TextField>
            <TextField
              required
              fullWidth
              variant="outlined"
              placeholder="Enter your password"
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></TextField>
            <Button
              variant="outlined"
              sx={{ width: "50%", margin: "auto" }}
              type="submit"
            >
              Register
            </Button>
          </FormControl>
        </Card>
      </form>
    </>
  )
}

export default Register

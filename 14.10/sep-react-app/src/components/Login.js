import { useEffect, useState, useContext } from "react"
import { Card, Typography, FormControl, TextField, Button } from "@mui/material"
import axios from "axios"
import { UserContext } from "../App"
import Cookie from "universal-cookie"
import { redirect } from "react-router-dom"
const cookie = new Cookie()

const Login = props => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [loginStatus, setLoginStatus] = useState("")
  const [currentUser, setCurrentUser] = useContext(UserContext)

  const handleSubmit = async e => {
    e.preventDefault()

    axios
      .post("http://localhost:8080/auth/login", {
        name: name,
        password: password
      })
      .then(res => {
        setLoginStatus(res.data.status)

        if (res.data.status === "Successfully logged in!") {
          cookie.set("token", res.data.token, { path: "/" })

          localStorage.setItem("user", res.data.user)
          setCurrentUser(localStorage.getItem("user"))
          window.location.href = "/authPage"
        }
      })
      .catch(err => {
        setLoginStatus("Something went wrong")
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
            Login
          </Typography>

          <Typography
            variant="h6"
            align="center"
            margin="10px"
          >
            {loginStatus}
          </Typography>
          <FormControl sx={{ gap: "20px", width: "100%" }}>
            <TextField
              required
              fullWidth
              variant="outlined"
              name="name"
              value={name}
              type="text"
              placeholder="Enter your name"
              label="Name"
              onChange={e => setName(e.target.value)}
            ></TextField>
            <TextField
              required
              fullWidth
              variant="outlined"
              name="password"
              type="password"
              value={password}
              placeholder="Enter your password"
              label="Password"
              onChange={e => setPassword(e.target.value)}
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

export default Login

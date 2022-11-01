import "./App.css"
import React, { useEffect } from "react"
import { Route, Routes, Link } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import { Typography, Box, Button } from "@mui/material"
import Login from "./components/Login"
import Register from "./components/Register"
import ToDo from "./components/ToDo"
import TestPage from "./pages/TestPage"
import AuthPage from "./pages/AuthPage"
import axios from "axios"
import ProtectedRoute from "./components/ProtectedRoute"
import Cookies from "universal-cookie"
const cookies = new Cookies()
export const UserContext = React.createContext()

const App = () => {
  const [currentUser, setCurrentUser] = React.useState("Unregistered user")
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setCurrentUser(localStorage.getItem("user"))
      console.log(localStorage.getItem("user"))
    }
  }, [])

  axios({
    method: "get",
    url: "http://localhost:8080/api",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data)
  })
  return (
    <>
      <UserContext.Provider value={[currentUser, setCurrentUser]}>
        <Header />
        <Logout />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/helloWorld"
            element={<HelloWorld />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/testPage"
            element={<TestPage />}
          />
          <Route
            path="/"
            element={<ProtectedRoute />}
          >
            <Route
              path="/authPage"
              element={<AuthPage />}
            />
            <Route
              path="/todo"
              element={<ToDo />}
            />
          </Route>

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </UserContext.Provider>
    </>
  )
}

const HelloWorld = () => {
  return (
    <Typography
      sx={{
        marginTop: "200px"
      }}
    >
      Hello World
    </Typography>
  )
}

const Logout = () => {
  return (
    <Button
      variant="contained"
      color="warning"
      sx={{
        margin: "10px",
        float: "right"
      }}
      onClick={() => {
        cookies.remove("token")
        localStorage.removeItem("user")
        window.location.href = "/"
        //window.location.reload()
      }}
    >
      Logout
    </Button>
  )
}

const NotFound = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "200px",
          gap: "40px"
        }}
      >
        <Typography
          variant="h2"
          color="error"
        >
          Page not found
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
        >
          Back to main page
        </Button>
      </Box>
    </>
  )
}

export default App

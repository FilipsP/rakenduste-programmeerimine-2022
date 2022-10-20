import "./App.css"
import React from "react"
import { Route, Routes, Link } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import { Typography, Box, Button } from "@mui/material"
import TableComponent from "./components/TableComponent"
import Contact from "./components/Contact"
import Gallery from "./pages/Gallery"
import Form from "./components/Form"

export const UserContext = React.createContext()

const App = () => {
  const [currentUser, setCurrentUser] = React.useState("Phil")
  return (
    <>
      <Header />
      <UserContext.Provider value={[currentUser, setCurrentUser]}>
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
            path="/table"
            element={<TableComponent />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/gallery"
            element={<Gallery />}
          />
          <Route
            path="/form"
            element={<Form />}
          />
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

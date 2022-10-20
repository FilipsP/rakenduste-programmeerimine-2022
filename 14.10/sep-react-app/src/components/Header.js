import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material"
import { useContext } from "react"
import UserContext from "../App"

const Header = () => {
  //const [currentUser, setCurrentUser] = useContext(UserContext)
  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
      }}
    >
      <Toolbar>
        <Typography variant="h6">Hi</Typography>
      </Toolbar>
      <Box>
        <Button
          component={Link}
          to="/"
          variant="filled"
        >
          Home
        </Button>
        <Button
          component={Link}
          to="table"
          variant="filled"
        >
          List
        </Button>
        <Button
          component={Link}
          to="contact"
          variant="filled"
        >
          Contact
        </Button>
        <Button
          component={Link}
          to="gallery"
          variant="filled"
        >
          Gallery
        </Button>
      </Box>
    </AppBar>
  )
}

export default Header

import { Link } from "react-router-dom"
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem
} from "@mui/material"

const Header = () => {
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
        <Typography variant="h6">Header</Typography>
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

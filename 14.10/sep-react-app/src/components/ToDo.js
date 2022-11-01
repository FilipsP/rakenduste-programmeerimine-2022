import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  Checkbox,
  List,
  ListItem
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import axios from "axios"
import { useState, useEffect } from "react"
import Cookies from "universal-cookie"
const cookies = new Cookies()
const ToDo = () => {
  const [userId, setUserId] = useState("")
  const [todoInput, setTodoInput] = useState("")
  const [todoList, setTodoList] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:8080/TODO", {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`
        }
      })
      .then(res => {
        setTodoList(
          res.data.todos.filter(todo => todo.userId === res.data.userID)
        )
        setUserId(res.data.userID)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleSubmit = e => {
    e.preventDefault()

    axios
      .post("http://localhost:8080/TODO", {
        title: todoInput,
        date: new Date().now,
        userId: userId
      })
      .then(res => {
        setTodoList([...todoList, res.data])
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          maxWidth: "80vw",
          margin: "auto",
          marginTop: "100px",
          padding: "20px"
        }}
      >
        <Typography
          variant="h5"
          align="center"
          marginBottom="20px"
        >
          ToDo List
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box display="flex">
            <TextField
              required
              fullWidth
              variant="outlined"
              name="todo"
              type="text"
              placeholder="Enter your task"
              value={todoInput}
              onChange={e => setTodoInput(e.target.value)}
            ></TextField>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disableElevation
              sx={{ marginLeft: "10px" }}
            >
              Add
            </Button>
          </Box>
        </form>
        <List>
          {todoList.map(todo => (
            <ListItem key={todo._id}>
              <Box sx={{ width: "100%" }}>
                <Card
                  variant="outlined"
                  sx={{
                    padding: "10px",
                    display: "flex",
                    gap: "10px",
                    justifyContent: "flex-end"
                  }}
                >
                  <Checkbox />
                  <Typography
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    {todo.title}
                  </Typography>
                  <Button color="warning">
                    <EditIcon />
                  </Button>
                  <Button color="error">
                    <DeleteIcon />
                  </Button>
                </Card>
              </Box>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  )
}

export default ToDo

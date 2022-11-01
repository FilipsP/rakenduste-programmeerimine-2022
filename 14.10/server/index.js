const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const app = express()
require("dotenv").config()

const auth = require("./routes/auth.routes")
const TODO = require("./routes/TODO.routes")

app.use(morgan("dev"))
app.use(express.json())

//DB
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xuegqgk.mongodb.net/?retryWrites=true&w=majority`
mongoose
  .connect(uri)
  .then(() => console.log("Database connection established"))
  .catch((e) => console.error(e))

app.use("/auth", auth)
app.use("/TODO", TODO)

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.post("/", (req, res) => {
  res.send("Hello World(post)!")
})

app.get("/flights/:from-:to", (req, res) => {
  console.log(req.body)

  res.send({
    params: req.params,
    body: req.body,
  })
})

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server 123" })
})

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server started at port ${process.env.SERVER_PORT}`)
})

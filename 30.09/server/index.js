const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const app = express()
const PORT = 8080
require("dotenv").config()

const cats = require("./routes/cats.routes")
const dogs = require("./routes/dogs.routes")

app.use(morgan("dev"))
app.use(express.json())

//DB
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xuegqgk.mongodb.net/?retryWrites=true&w=majority`
mongoose
  .connect(uri)
  .then(() => console.log("Database connection established"))
  .catch((e) => console.error(e))

app.use("/cats", cats)
app.use("/dogs", dogs)

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

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})

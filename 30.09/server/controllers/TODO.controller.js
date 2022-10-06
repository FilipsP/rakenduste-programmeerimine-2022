const mongoose = require("mongoose")

const TODOSchema = new mongoose.Schema({
  title: String,
  date: String,
  importance: Number,
  completed: Boolean,
})

const TODO = mongoose.model("TODO", TODOSchema)

exports.create = async (req, res) => {
  const { title, date, importance } = req.body
  const todo = await TODO.create({ title, date, importance, completed: false })
  res.send(todo)
}

exports.read = async (req, res) => {
  const todos = await TODO.find({}, { _id: 0, __v: 0 })
  res.send(todos)
}

exports.update = async (req, res) => {
  const { title } = req.params
  const todo = await TODO.findOneAndUpdate({ title }, { completed: true })
  res.send(todo)
}

exports.delete = async (req, res) => {
  const { title } = req.params
  const todo = await TODO.findOneAndDelete({ title })
  res.send(todo)
}

const mongoose = require("mongoose")

const TODOSchema = new mongoose.Schema({
  title: { type: String, required: true },
  importance: Number,
  completed: Boolean,
  userId: { type: String, required: true },
  timestamp: { type: String, default: Date.now },
})

const TODO = mongoose.model("TODO", TODOSchema)

exports.create = async (req, res) => {
  const { title, date, userId } = req.body
  const todo = await TODO.create({ title, date, userId, completed: false })
  res.send(todo)
}

exports.read = async (req, res) => {
  const todos = await TODO.find({}, { __v: 0 })
  res.json({todos: todos, userID: req.userId})
}

exports.update = async (req, res) => {
  const { title } = req.params
  const todo = await TODO.findOneAndUpdate({ title }, { completed: true })
  res.send(todo)
}

exports.delete = async (req, res) => {
 // const { title } = req.params
  const {_id} = req.body
  const todo = await TODO.findOneAndDelete({ _id })
  res.send(todo)
}

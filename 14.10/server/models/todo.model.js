const { Schema, model } = require("mongoose")
const bcrypt = require("bcrypt")

const todoSchema = new Schema({
  taskText: { type: String, required: true },
  completed: { type: Boolean, required: true },
  userId: { type: Number, required: true },
  timestamp: { type: String, default: Date.now },
})

todoSchema.statics.createTodo = async ({ taskText, completed, userId }) => {
  return new Promise(async (resolve, reject) => {
    const newTodo = new Todo({ taskText, completed, userId })
    newTodo.save((err) => {
      if (err) return reject(err)
      resolve(newTodo)
    })
  })
}

const Todo = model("Todo", todoSchema)
module.exports = Todo

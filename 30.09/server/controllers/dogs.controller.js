const mongoose = require("mongoose")

const doggieSchema = new mongoose.Schema({
  name: String,
})

const Doggie = mongoose.model("Doggie", doggieSchema)

exports.create = async (req, res) => {
  const { name } = req.params

  const doggie = await Doggie.create({ name })

  res.send(doggie)
}

exports.read = async (req, res) => {
  const doggies = await Doggie.find({}, { _id: 0, __v: 0 })
  res.send(doggies)
}

exports.update = async (req, res) => {}

exports.delete = async (req, res) => {}

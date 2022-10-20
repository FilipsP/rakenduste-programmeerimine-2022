const User = require('../models/user.model')
const bcrypt = require('bcrypt')

exports.signup = async (req, res) => {
  User.signup(req.body)
    .then((data) => res.send(`Seems to be done ${data}`))
    .catch((err) => res.send(`Failed ${err}`))
}

exports.login = async (req, res) => {
  const { name, password } = req.body
  const user = await User.findOne({ name })
  if (!user) return res.send('User not found')
  const match = await bcrypt.compare(password, user.password)
  if (!match) return res.send('Wrong password')
  res.send('Logged in')
}
exports.protected = async (req, res) => {}
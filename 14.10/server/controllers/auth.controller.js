const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.signup = async (req, res) => {
  User.signup(req.body)
    .then((data) => res.send(`Seems to be done ${data}`))
    .catch((err) => res.send(`Failed ${err}`))
}

exports.login = async (req, res) => {
  const { name, password } = req.body
  const user = await User.findOne({ name })
  if (!user) return res.json({status: "User not found"})
  const match = await bcrypt.compare(password, user.password)
  if (!match) return res.json({status: "Wrong password"})
  const token = jwt.sign(
    { id: user._id, name: user.name, email: user.email },
    process.env.TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  )
  res.json({token: token, status: "Successfully logged in!", user: name})
}

exports.protected = async (req, res) => {
  res.send(req.user)
}

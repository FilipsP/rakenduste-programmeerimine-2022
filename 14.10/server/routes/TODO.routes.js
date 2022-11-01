const express = require("express")
const router = express.Router()
const TODOController = require("../controllers/TODO.controller")
const jwt = require("jsonwebtoken");


const getMiddleware = (req, res, next) => {
  console.log("Getting DataBase res for req.user")
  next()
}


const userIdMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]
  if (!token) return res.send("No token provided")
  jwt.verify(token, process.env.TOKEN_SECRET, (err, payload) => {
    if (err) return res.send("Failed to authenticate token")
    req.userId = payload.id
    next()
  })
}

router.get("/", userIdMiddleware, TODOController.read)
router.post("/",TODOController.create)
router.put("/:title", TODOController.update)
router.post("/:title", TODOController.delete)

module.exports = router

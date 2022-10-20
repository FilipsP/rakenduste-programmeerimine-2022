const express = require("express")
const { body, validationResult } = require("express-validator")
const { JsonWebTokenError } = require("jsonwebtoken")
const router = express.Router()
const authController = require("../controllers/auth.controller")
const jwt = require("jsonwebtoken")

router.use((req, res, next) => {
  console.log("Time: ", Date.now())
  next()
})

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]
  if (!token) return res.send("No token provided")

  jwt.verify(token, process.env.TOKEN_SECRET, (err, payload) => {
    if (err) return res.send("Failed to authenticate token")
    req.user = payload
    next()
  })
}

router.post(
  "/signup",
  body("name")
    .isLength({ min: 3 })
    .trim()
    .escape()
    .withMessage("Name must be at least 3 chars long"),
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Must be a valid email address"),
  body("password")
    .isLength({ min: 8 })
    .trim()
    .escape()
    .withMessage("Password too short"),
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
  },
  authController.signup
)
router.post("/login", authController.login)
router.get("/protected", authMiddleware, authController.protected)

module.exports = router

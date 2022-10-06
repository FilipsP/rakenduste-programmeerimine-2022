const express = require("express")
const router = express.Router()
const TODOController = require("../controllers/TODO.controller")
/*
router.use((req, res, next) => {
  const { status } = req.body

  if (status !== "admin") throw new Error("Wrong status")

  req.status = { status: "admin" }

  console.log("Time: ", Date.now())
  next()
})
*/
const getMiddleware = (req, res, next) => {
  console.log("Getting DataBase res for req.user")
  next()
}

router.get("/", getMiddleware, TODOController.read)
router.post("/", TODOController.create)
router.put("/:title", TODOController.update)
router.post("/:title", TODOController.delete)

module.exports = router

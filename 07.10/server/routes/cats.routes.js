const express = require("express")
const router = express.Router()
const catsController = require("../controllers/cats.controller")

router.use((req, res, next) => {
  const { name } = req.body

  if (name !== "Phil") throw new Error("Wrong name")

  req.user = { name: "Phil", role: "owner" }

  console.log("Time: ", Date.now())
  next()
})

const getMiddleware = (req, res, next) => {
  console.log("Getting DataBase res for req.user")
  next()
}

router.get("/", getMiddleware, catsController.read)
router.post("/:name", catsController.create)
router.put("/:name", catsController.update)
router.delete("/:name", catsController.delete)

module.exports = router

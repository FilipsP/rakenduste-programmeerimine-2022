const express = require("express")
const router = express.Router()
const dogsController = require("../controllers/dogs.controller")

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

router.get("/", getMiddleware, dogsController.read)
router.post("/:name", dogsController.create)
router.put("/:name", dogsController.update)
router.delete("/:name", dogsController.delete)

module.exports = router

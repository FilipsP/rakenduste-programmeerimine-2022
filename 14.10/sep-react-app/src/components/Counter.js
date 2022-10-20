import React, { useEffect, useState } from "react"
import propTypes from "prop-types"
import { Button } from "@mui/material"

const Counter = props => {
  const [counter, setcounter] = useState(0)
  const increaseCounter = () => setcounter(counter + 1)

  useEffect(() => {
    document.title = `You clicked ${counter} times`
  })

  useEffect(() => {
    console.log("Guess how many times I run?")
  })

  useEffect(() => {
    console.log("Filled dependency array")
  })

  return (
    <Button
      color="success"
      variant="contained"
      onClick={increaseCounter}
    >
      +1
    </Button>
  )
}

Counter.propTypes = {}

export default Counter

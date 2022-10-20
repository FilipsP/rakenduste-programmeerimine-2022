import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Typography } from "@mui/material"

const Toggle = props => {
  const handleKeyDown = e => console.log(e.code)

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return <Typography>Listening to keydown presses</Typography>
}

export default Toggle

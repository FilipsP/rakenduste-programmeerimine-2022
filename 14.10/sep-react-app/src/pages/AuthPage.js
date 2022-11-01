import { Typography } from "@mui/material"
import { useEffect } from "react"
import axios from "axios"
import Cookies from "universal-cookie"
const cookies = new Cookies()

const AuthPage = () => {
  useEffect(() => {
    axios
      .get("http://localhost:8080/auth/protected", {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`
        }
      })
      .then(res => {
        console.log("Success")
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <Typography
        variant="h3"
        align="center"
      >
        Auth page
      </Typography>
    </>
  )
}
export default AuthPage

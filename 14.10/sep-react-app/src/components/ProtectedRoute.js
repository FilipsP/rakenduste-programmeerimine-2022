import { Navigate, Outlet } from "react-router-dom"
import Cookies from "universal-cookie"
const cookie = new Cookies()

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return <>{cookie.get("token") ? <Outlet /> : <Navigate to="/login" />}</>
}

export default ProtectedRoute

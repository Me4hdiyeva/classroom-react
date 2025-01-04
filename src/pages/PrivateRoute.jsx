import { Outlet , Navigate } from "react-router-dom"

const PrivateRoute = () => {
    const user = localStorage.getItem("user");
     return user? <Navigate to="/"/> :<Outlet/> 
}

export default PrivateRoute

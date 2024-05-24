import { useContext } from "react";
import { CreatAuthContext } from "../Firebase/Context";
import { Navigate, useLocation } from "react-router-dom";



const Privateroute = ({children}) => {
    const {user} = useContext(CreatAuthContext);
    const location = useLocation()
    if(user){
        return children
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default Privateroute;
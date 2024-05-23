import { createBrowserRouter } from "react-router-dom";
import Root from "./assets/Root/Root";
import Home from "./assets/Home/Home";
import Errorpage from "./assets/Components/Errorpage";

const router = createBrowserRouter([
    {
        path : '/',
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>
        ,
        children:[
            {
                path: "/",
                element : <Home></Home>
            }
        ]
    }
])


export default router;
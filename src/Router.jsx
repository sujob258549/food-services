import { createBrowserRouter } from "react-router-dom";
import Root from "./assets/Root/Root";
import Home from "./assets/Home/Home";
import Errorpage from "./assets/Components/Errorpage";
import Ourmenu from "./assets/Ourmenu/Ourmenu";

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
            , 

            {
                path: '/ourmenu',
                element: <Ourmenu></Ourmenu>
            }
        ]
    }
])


export default router;
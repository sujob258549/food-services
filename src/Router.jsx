import { createBrowserRouter } from "react-router-dom";
import Root from "./assets/Root/Root";
import Home from "./assets/Home/Home";
import Errorpage from "./assets/Components/Errorpage";
import Ourmenu from "./assets/Ourmenu/Ourmenu";
import OurShop from "./assets/Ourshop/OurShop";
import SignUp from "./assets/SignInandSignOut/SignUp";
import Login from "./assets/SignInandSignOut/Login";


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
            },
            {
                path: '/ourshop/:cetagory',
                element :<OurShop></OurShop>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
            ,
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])


export default router;
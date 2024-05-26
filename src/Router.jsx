import { createBrowserRouter } from "react-router-dom";
import Root from "./assets/Root/Root";
import Home from "./assets/Home/Home";
import Errorpage from "./assets/Components/Errorpage";
import Ourmenu from "./assets/Ourmenu/Ourmenu";
import OurShop from "./assets/Ourshop/OurShop";
import SignUp from "./assets/SignInandSignOut/SignUp";
import Login from "./assets/SignInandSignOut/Login";
import MainDasbord from "./assets/Dasbord/MainDasbord";
import UserHome from "./assets/Dasbord/UserHome";
import PrementHistory from "./assets/Dasbord/PrementHistory";
import Hycary from "./assets/Dasbord/Hycary";
import AddReview from "./assets/Dasbord/AddReview";
import Mybooking from "./assets/Dasbord/Mybooking";
import Resarvation from "./assets/Dasbord/Resarvation";
import PrementResurvation from "./assets/Dasbord/PrementResurvation";
import Errorpagedasbord from "./assets/Dasbord/Errorpagedasbord";
import AdimnMainDasbord from "./assets/AdimnDasbord/AdimnMainDasbord";
import AdminHome from "./assets/AdimnDasbord/AdminHome";
import AddItem from "./assets/AdimnDasbord/AddItem";
import ManageItem from "./assets/AdimnDasbord/ManageItem";
import Bookingmanege from "./assets/AdimnDasbord/Bookingmanege";
import AllUser from "./assets/AdimnDasbord/AllUser";
import Update from "./assets/AdimnDasbord/Update";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>
        ,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
            ,

            {
                path: '/ourmenu',
                element: <Ourmenu></Ourmenu>
            },
            {
                path: '/ourshop/:cetagory',
                element: <OurShop></OurShop>
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
    },
    {
        path: 'dashbord',
        element: <MainDasbord></MainDasbord>,
        errorElement: <Errorpagedasbord></Errorpagedasbord>,
        children: [
            {
                path: 'home',
                element: <UserHome></UserHome>

            },
            {
                path: 'reservation',
                element: <Resarvation></Resarvation>

            }
            , {
                path: 'prementhistory',
                element: <PrementHistory></PrementHistory>

            }
            , {
                path: 'mycart',
                element: <Hycary></Hycary>

            }
            , {
                path: 'addreview',
                element: <AddReview></AddReview>

            }
            , {
                path: 'mybooking',
                element: <Mybooking></Mybooking>

            }
            , {
                path: 'prement',
                element: <PrementResurvation></PrementResurvation>

            }

        ]
    },
    {
        path: 'admindashbord',
        element: <AdimnMainDasbord></AdimnMainDasbord>,
        children: [
            {
                path: 'adminHome',
                element: <AdminHome></AdminHome>

            }
            ,
            {
                path: 'additem',
                element: <AddItem></AddItem>

            }
            ,
            {
                path: 'manegeitem',
                element: <ManageItem></ManageItem>

            }
            ,
            {
                path: 'manegebook',
                element: <Bookingmanege></Bookingmanege>

            }
            ,
            {
                path: 'alluser',
                element: <AllUser></AllUser>

            }
            ,
            {
                path: 'update',
                element: <Update></Update>

            }
           

        ]
    }

])


export default router;
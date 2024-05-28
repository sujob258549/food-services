import { BiBookHeart } from "react-icons/bi";
import { FaCalendarAlt, FaHome, FaShoppingCart } from "react-icons/fa";
import { FaBagShopping, FaRankingStar } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import UserHome from "./UserHome";
import './dasbord.css'
import { IoMan } from "react-icons/io5";
import Usecart from "../Castomhuk/Usecart";


const MainDasbord = () => {
    const [, cart]  = Usecart()
    return (
        <div>
            <div className="flex md:flex-row flex-col min-h-screen gap-10 bg-gray-100 w-[90%]  mx-auto  lg:px-10">
                {/* Sidebar */}
                <div className="md:flex md:flex-col md:w-64 ">
                    <div className="flex flex-col flex-1 overflow-y-auto">
                        <nav className="flex flex-col md:flex-1 overflow-y-auto  px-6 bg-[#D19F54] md:px-2  py-10 gap-10">
                            <div>
                                <NavLink href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                    Dashboard
                                </NavLink>
                            </div>
                            <div className="flex md:flex-col flex-wrap flex-1 gap-5">
                                <NavLink to={'/dashbord/home'} className="text-black font-cinzel text-xl font-medium md:ml-5 flex"> <span className="pr-2"><FaHome className="text-2xl"></FaHome></span> User Home</NavLink>
                                <NavLink to={'/dashbord/reservation'} className="text-black font-cinzel text-xl font-medium md:ml-5 flex"> <span className="pr-2"><FaCalendarAlt className="text-2xl"></FaCalendarAlt></span> Reservation</NavLink>
                                <NavLink to={'/dashbord/prementhistory'} className="text-black font-cinzel text-xl font-medium md:ml-5 flex"> <span className="pr-2"><FaBagShopping className="text-2xl"></FaBagShopping></span>Payment History</NavLink>
                                <NavLink to={'/dashbord/mycart'} className="text-black font-cinzel text-xl font-medium md:ml-5 flex"> <span className="pr-2"><FaShoppingCart className="text-2xl"></FaShoppingCart></span> My Cart({cart.length})</NavLink>
                                <NavLink to={'/dashbord/addreview'} className="text-black font-cinzel text-xl font-medium md:ml-5 flex"> <span className="pr-2"><FaRankingStar className="text-2xl"></FaRankingStar></span> Add Review</NavLink>
                                <NavLink to={'/dashbord/mybooking'} className="text-black font-cinzel text-xl font-medium md:ml-5 flex"> <span className="pr-2"><BiBookHeart className="text-2xl"></BiBookHeart></span>My Booking</NavLink>
                                <hr />
                                <NavLink to={'/'} className="text-black font-cinzel text-xl font-medium md:ml-5 flex"> <span className="pr-2"><FaHome className="text-2xl"></FaHome ></span>Home</NavLink>
                                <NavLink to={'/dashbord/contact'} className="text-black font-cinzel text-xl font-medium md:ml-5 flex"> <span className="pr-2"><IoMan className="text-2xl"></IoMan></span> Contact us</NavLink>
                            </div>
                        </nav>
                    </div>
                </div>

                {/* Main content */}
                <div className="flex-1  py-10">


                    <Outlet></Outlet>

                </div>

            </div>
        </div>
    );
};

export default MainDasbord;
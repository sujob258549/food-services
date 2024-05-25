import { BiBookHeart } from "react-icons/bi";
import { FaCalendarAlt, FaHome, FaShoppingCart } from "react-icons/fa";
import { FaBagShopping, FaRankingStar } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import UserHome from "./UserHome";


const MainDasbord = () => {
    return (
        <div>
            <div className="flex h-screen bg-gray-100 w-[90%] px-5  mt-5 pt-10 mx-auto">
                {/* Sidebar */}
                <div className="hidden md:flex flex-col w-64 bg-gray-800 rounded-2xl">
                    <div className="flex flex-col flex-1 overflow-y-auto">
                        <nav className="flex flex-col flex-1 overflow-y-auto bg-[#D19F54] px-2 py-4 gap-10 rounded-2xl">
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
                            <div className="flex flex-col flex-1 gap-5">
                                <NavLink to={'/dashbord/home'} className="text-black font-cinzel text-xl font-medium md:ml-5 flex"> <span className="pr-2"><FaHome className="text-2xl"></FaHome></span> User Home</NavLink>
                                <NavLink to={'/dashbord/reservation'} className="text-black font-cinzel text-xl font-medium md:ml-5 flex"> <span className="pr-2"><FaCalendarAlt className="text-2xl"></FaCalendarAlt></span> Reservation</NavLink>
                                <NavLink to={'/dashbord/prementhistory'} className="text-black font-cinzel text-xl font-medium md:ml-5 flex"> <span className="pr-2"><FaBagShopping className="text-2xl"></FaBagShopping></span>Payment History</NavLink>
                                <NavLink to={'/dashbord/mycart'} className="text-black font-cinzel text-xl font-medium md:ml-5 flex"> <span className="pr-2"><FaShoppingCart className="text-2xl"></FaShoppingCart></span> My Cart</NavLink>
                                <NavLink to={'/dashbord/addreview'} className="text-black font-cinzel text-xl font-medium md:ml-5 flex"> <span className="pr-2"><FaRankingStar className="text-2xl"></FaRankingStar></span> Add Review</NavLink>
                                <NavLink to={'/dashbord/mybooking'} className="text-black font-cinzel text-xl font-medium md:ml-5 flex"> <span className="pr-2"><BiBookHeart className="text-2xl"></BiBookHeart></span>My Booking</NavLink>
                            </div>
                        </nav>
                    </div>
                </div>

                {/* Main content */}
                <div className="flex-1">

                    <main className="flex flex-1 flex-col py-6 px-8 md:px-10 bg-gray-100">
                        <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
                        <Outlet></Outlet>
                    </main>
                </div>

            </div>
        </div>
    );
};

export default MainDasbord;
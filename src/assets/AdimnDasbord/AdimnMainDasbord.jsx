import { BiBookHeart } from "react-icons/bi";
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart } from "react-icons/fa";
import { FaBagShopping, FaRankingStar } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { IoMan } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink, Outlet } from "react-router-dom";



const AdimnMainDasbord = () => {
    return (
        <div>
            <div className="flex min-h-screen gap-10 bg-gray-100 w-[90%]  mx-auto  lg:px-10">
                {/* Sidebar */}
                <div className="hidden md:flex flex-col w-64 ">
                    <div className="flex flex-col flex-1 overflow-y-auto">
                        <nav className="flex flex-col flex-1 overflow-y-auto bg-[#D19F54] px-2  py-10 gap-10">
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
                                  Admin  Dashboard
                                </NavLink>
                            </div>
                            <div className="flex flex-col flex-1 gap-5">
                                <NavLink to={'/admindashbord/adminHome'} className="text-black font-cinzel text-xl font-medium md:ml-5 flex"> <span className="pr-2"><FaHome className="text-2xl"></FaHome></span> Admin Home</NavLink>
                                <NavLink  to={'/admindashbord/AddItem'} className="text-black font-cinzel text-xl font-medium md:ml-5 flex"> <span className="pr-2"><ImSpoonKnife className="text-2xl"></ImSpoonKnife></span> add items</NavLink>
                                <NavLink  to={'/admindashbord/manegeitem'} className="text-black font-cinzel text-xl font-medium md:ml-5 flex"> <span className="pr-2"><TfiMenuAlt className="text-2xl"></TfiMenuAlt></span>manage items</NavLink>
                                <NavLink to={'/admindashbord/manegebook'}  className="text-black font-cinzel text-xl font-medium md:ml-5 flex"> <span className="pr-2"><FaBook className="text-2xl"></FaBook></span>manage bookinges</NavLink>
                                <NavLink to={'/admindashbord/alluser'} className="text-black font-cinzel text-xl font-medium md:ml-5 flex"> <span className="pr-2"><IoMan className="text-2xl"></IoMan></span> All user</NavLink>
                               
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

export default AdimnMainDasbord;
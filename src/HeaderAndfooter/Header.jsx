import { Link, NavLink } from 'react-router-dom';
import mainlogo from '../../src/assets/image/mainlogo.png'

import './style.css'

import logoimg from '../assets/image/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
import logoimg2 from '../assets/image/icon/Vector.png'
import { useContext } from 'react';
import { CreatAuthContext } from '../assets/Firebase/Context';
import { FaShoppingCart } from 'react-icons/fa';
import Usecart from '../assets/Castomhuk/Usecart';
import UseAllcorts from '../assets/Castomhuk/UseAllcorts';



const Header = () => {
    const { user, signout } = useContext(CreatAuthContext);
    const [, allcart] = UseAllcorts()
    const navber = <>

        <NavLink to={'/'}>Home</NavLink>
        {/* <NavLink >CONTACT US</NavLink>
<NavLink>DASHBOARD</NavLink> */}
        <NavLink to={'/ourmenu'}>Our Menu</NavLink>
        <NavLink to={'/ourshop/:cetagory'}>Our Shop</NavLink>

        {
            user && (
                <>

                    <Link to={'/admindashbord/adminHome'}>Adimn</Link>

                    <Link  to={'/dashbord/home'} className="flex"> User
                        <FaShoppingCart className='ml-3'></FaShoppingCart>
                        <div className="badge badge-secondary">{allcart.length}</div>
                    </Link>


                    <Link to={'/dashbord/home'} className="btn p-0 bg-transparent hover:bg-transparent border-none">

                    </Link>


                </>
            )
        }
    </>

    return (
        <div className=''>
            <div className="navbar fixed z-50 px-5 md:px-10 max-w-[1280px] mx-auto bg-opacity-40 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navber
                            }
                        </ul>
                    </div>
                    <img className='w-40' src={mainlogo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navber
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <button onClick={signout} className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-gradient-to-r border from-blue-500 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
                            <span className="ml-2 mr-5">Sign out</span>
                        </button>
                    ) : (
                        <Link to="/login" className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-gradient-to-r border from-blue-500 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
                            <span className="ml-2 mr-5">Sign in</span>
                        </Link>
                    )}
                    {user && <span class="relative inline-block">
                        <img src={user.photoURL ? user.photoURL : logoimg2} class="object-cover w-16 h-16 rounded-full border-4 border-white bg-slate-600" />
                        <span class="absolute animate-pulse top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                    </span>}
                </div>
            </div>
        </div>
    );
};

export default Header;


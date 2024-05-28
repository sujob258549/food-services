import { BsFillBookFill } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { FaCalendarAlt, FaShoppingCart } from "react-icons/fa";
import { PiBookOpenUserFill } from "react-icons/pi";
import './user.css'
import { useContext } from "react";
import { CreatAuthContext } from "../Firebase/Context";
import Usecart from "../Castomhuk/Usecart";


const UserHome = () => {
    const {user} = useContext(CreatAuthContext);
    const [refetch , cart] = Usecart()
    return (
        <div className="px-5">
            <h1 className="text-xl font-medium font-cinzel">Hi welcome bake!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
                <div className="flex gap-5 rounded-md py-5 px-10 items-center bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
                    <div>
                        <PiBookOpenUserFill className="text-3xl font-bold" ></PiBookOpenUserFill>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-center">{cart.length}</h3>
                        <p className="text-2xl text-center">Menu</p>
                    </div>
                </div>
                <div className="flex gap-5 rounded-md py-5 px-10 items-center bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
                    <div>
                        <PiBookOpenUserFill className="text-3xl font-bold" ></PiBookOpenUserFill>
                    </div>
                    <div>
                        <h3 className="text-4xl text-center font-bold">205</h3>
                        <p className="text-2xl  text-center">Shop</p>
                    </div>
                </div>
                <div className="flex gap-5 rounded-md py-5 px-10 items-center bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                    <div>
                        <PiBookOpenUserFill className="text-3xl font-bold" ></PiBookOpenUserFill>
                    </div>
                    <div>
                        <h3 className="text-4xl  text-center font-bold">205</h3>
                        <p className="text-2xl  text-center ">Contact</p>
                    </div>
                </div>
            </div>
            {/* profile and activitis */}
            <div className="md:flex  py-10 items-center">
                <div className="text-center flex-1 radioun-r bg-[#FFEDD5] min-h-80 flex flex-col justify-center">
                    <div>
                        <div class="avatar online">
                            <div class="w-24 rounded-full">
                                <img src={user.photoURL} />
                            </div>

                        </div>
                        <h3 className="text-3xl font-cinzel  font-semibold ">{user.displayName}</h3>
                    </div>
                </div>
                <div className="md:border-4 border-b-4  md:min-h-80 md:h-full border-[#D1A054]">

                </div>
                <div className="bg-[#FEF9C3] p-10  min-h-80">
                    <h3 className="text-4xl font-semibold font-cinzel pb-8">Your Activition</h3>
                    <div className="space-y-3 ">
                        <div>
                            <h3 className="font-cinzel text-2xl text-[#0088fe] font-medium flex"><FaShoppingCart className="mr-2"></FaShoppingCart> Order <span>0</span></h3>
                        </div>
                        <div>
                            <h3 className="font-cinzel text-2xl text-[#00c4a1] font-medium flex"><CiStar  className="mr-2"></CiStar >Reviews <span>0</span></h3>
                        </div>
                        <div>
                            <h3 className="font-cinzel text-2xl text-[#FFBB28] font-medium flex"><FaCalendarAlt className="mr-2"></FaCalendarAlt> Booking <span>0</span></h3>
                        </div>
                        <div>
                            <h3 className="font-cinzel text-2xl text-[#FF8042] font-medium flex"><BsFillBookFill className="mr-2"></BsFillBookFill> Payment <span>0</span></h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserHome;
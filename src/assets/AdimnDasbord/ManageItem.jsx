import { MdDelete } from "react-icons/md";
import Sheredtitle from "../Components/Sheredtitle";
import { LuPenSquare } from "react-icons/lu";
import { Link } from "react-router-dom";


const ManageItem = () => {
    return (
        <div className="">
            <Sheredtitle subhading={'---My Cart---'} hading={'WANNA ADD MORE?'}></Sheredtitle>
            <div className="bg-white pb-10 pt-5">
                <div className=" py-5 md:pr-5">
                    <h2 className="text-3xl md:ml-10  font-bold py-5 font-cinzel">Total orders:  <span>0</span></h2>

                </div>
                <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">

                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="bg-[#D1A054]">
                                <th className="text-[14px] text-center w-1/12 py-4 px-1 font-bold text-white uppercase">INdex</th>
                                <th className="text-[14px] w-1/12 py-4 px-1 text-left font-bold text-white uppercase">ITEM IMAGE</th>
                                <th className="text-[14px] w-1/6 py-4 px-1 text-left font-bold text-white uppercase">ITEM NAME</th>
                                <th className="text-[14px] w-1/6 py-4 px-1 text-left font-bold text-white uppercase">PRICE</th>
                                <th className="text-[14px] w-1/12 py-4 px-1 text-left font-bold text-white uppercase">ACTION</th>
                                <th className="text-[14px] w-1/12 py-4 px-1 text-left font-bold text-white uppercase">ACTION</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">

                            <tr>
                                <td className="py-4 px-1 border-b text-center border-gray-200">1</td>
                                <td className="py-4 px-1 border-b border-gray-200">
                                    <div className="avatar">
                                        <div className="w-12 rounded">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-1 border-b border-gray-200 truncate">janedoe@gmail.com</td>
                                <td className="py-4 px-1 border-b border-gray-200">555-555-5555</td>
                                <td className="py-4 px-1 border-b border-gray-200">
                                    <Link to={'/admindashbord/update'} className="btn bg-[#D1A054] flax text-white"><LuPenSquare className="text-2xl"></LuPenSquare></Link>
                                </td>
                                <td className="py-4 px-1 border-b border-gray-200">
                                    <button className="btn bg-red-700 flax text-white"><MdDelete className="text-2xl"></MdDelete></button>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 px-1 border-b text-center border-gray-200">1</td>
                                <td className="py-4 px-1 border-b border-gray-200">
                                    <div className="avatar">
                                        <div className="w-12 rounded">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-1 border-b border-gray-200 truncate">janedoe@gmail.com</td>
                                <td className="py-4 px-1 border-b border-gray-200">555-555-5555</td>
                                <td className="py-4 px-1 border-b border-gray-200">
                                    <button className="btn bg-[#D1A054] flax text-white"><LuPenSquare className="text-2xl"></LuPenSquare></button>
                                </td>
                                <td className="py-4 px-1 border-b border-gray-200">
                                    <button className="btn bg-red-700 flax text-white"><MdDelete className="text-2xl"></MdDelete></button>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 px-1 border-b text-center border-gray-200">1</td>
                                <td className="py-4 px-1 border-b border-gray-200">
                                    <div className="avatar">
                                        <div className="w-12 rounded">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-1 border-b border-gray-200 truncate">janedoe@gmail.com</td>
                                <td className="py-4 px-1 border-b border-gray-200">555-555-5555</td>
                                <td className="py-4 px-1 border-b border-gray-200">
                                    <button className="btn bg-[#D1A054] flax text-white"><LuPenSquare className="text-2xl"></LuPenSquare></button>
                                </td>
                                <td className="py-4 px-1 border-b border-gray-200">
                                    <button className="btn bg-red-700 flax text-white"><MdDelete className="text-2xl"></MdDelete></button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;
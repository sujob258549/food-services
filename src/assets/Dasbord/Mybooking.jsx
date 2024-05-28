import { MdDelete } from "react-icons/md";
import Sheredtitle from "../Components/Sheredtitle";


const Mybooking = () => {
    return (
        <div className="">
            <Sheredtitle subhading={'---My Cart---'} hading={'WANNA ADD MORE?'}></Sheredtitle>
            <div className="bg-white pb-10 pt-5">
                <div className="flex justify-between flex-wrap items-center py-5 md:pr-5">
                    <h2 className="text-xl md:text-3xl md:ml-10  font-bold py-5 font-cinzel">Total orders:  <span>0</span></h2>
                    <h2 className="text-xl md:text-3xl md:ml-10  font-bold py-5 font-cinzel">total price: $<span>0</span></h2>
                    <button className="btn bg-[#D1A054] text-xl font-medium font-cinzel text-white">Pay</button>
                </div>
                <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">

                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="bg-[#D1A054]">
                                <th className="w-1/12 py-4 px-6 text-left font-bold text-white uppercase text-sm lg:text-xl"></th>
                                <th className="w-1/6 py-4 px-6 text-left font-bold text-white uppercase text-sm lg:text-xl">ITEM IMAGE</th>
                                <th className="w-1/4 py-4 px-6 text-left font-bold text-white uppercase text-sm lg:text-xl">ITEM NAME</th>
                                <th className="w-1/4 py-4 px-6 text-left font-bold text-white uppercase text-sm lg:text-xl">PRICE</th>
                                <th className="w-1/4 py-4 px-6 text-left font-bold text-white uppercase text-sm lg:text-xl">ACTION</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">1</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">
                                    <div className="avatar">
                                        <div className="w-12 rounded">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl truncate">johndoe@gmail.com</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">555-555-5555</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">
                                    <button className="btn bg-red-700 flax text-white"><MdDelete className="text-2xl"></MdDelete></button>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">1</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">
                                    <div className="avatar">
                                        <div className="w-12 rounded">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl truncate">janedoe@gmail.com</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">555-555-5555</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">
                                    <button className="btn bg-red-700 flax text-white"><MdDelete className="text-2xl"></MdDelete></button>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">1</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">
                                    <div className="avatar">
                                        <div className="w-12 rounded">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl truncate">janedoe@gmail.com</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">555-555-5555</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">
                                    <button className="btn bg-red-700 flax text-white"><MdDelete className="text-2xl"></MdDelete></button>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">1</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">
                                    <div className="avatar">
                                        <div className="w-12 rounded">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl truncate">janedoe@gmail.com</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">555-555-5555</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">
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

export default Mybooking;
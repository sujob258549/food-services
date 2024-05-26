import { MdDelete } from "react-icons/md";
import Sheredtitle from "../Components/Sheredtitle";
import { GiHumanPyramid } from "react-icons/gi";


const AllUser = () => {
    return (
        <div className="">
            <Sheredtitle subhading={'---How many??---'} hading={'MANAGE ALL USERS'}></Sheredtitle>
            <div className="bg-white pb-10 pt-5">
                <div className="py-5 md:pr-5">
                    <h2 className="text-3xl md:ml-10  font-bold py-5 font-cinzel">Total orders:  <span>0</span></h2>
                    
                </div>
                <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">

                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="bg-[#D1A054]">
                                <th className="w-1/12 py-4 px-6 text-left font-bold text-white uppercase"></th>
                                <th className="w-1/6 py-4 px-6 text-left font-bold text-white uppercase">NAME</th>
                                <th className="w-1/4 py-4 px-6 text-left font-bold text-white uppercase">EMAIL</th>
                                <th className="w-1/4 py-4 px-6 text-left font-bold text-white uppercase">ROLE</th>
                                <th className="w-1/4 py-4 px-6 text-left font-bold text-white uppercase">ACTION</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr>
                                <td className="py-4 px-6 border-b border-gray-200">1</td>
                                <td className="py-4 px-6 border-b border-gray-200">Sujon</td>
                                <td className="py-4 px-6 border-b border-gray-200 truncate">johndoe@gmail.com</td>
                                <td className="py-4 px-6 border-b border-gray-200">
                                    <button className="btn bg-[#D1A054] flax text-white"><GiHumanPyramid className="text-2xl"></GiHumanPyramid></button>
                                </td>
                                <td className="py-4 px-6 border-b border-gray-200">
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

export default AllUser;
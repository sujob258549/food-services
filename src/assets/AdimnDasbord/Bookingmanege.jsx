import { MdDelete } from "react-icons/md";
import Sheredtitle from "../Components/Sheredtitle";
import { LuPenSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
import { CgArrowTopRight } from "react-icons/cg";
import { FiCheck } from "react-icons/fi";


const Bookingmanege = () => {
    return (
        <div className="">
            <Sheredtitle subhading={'---My Cart---'} hading={'WANNA ADD MORE?'}></Sheredtitle>
            <div className="bg-white pb-10 pt-5">
                <div className=" py-5 md:pr-5">
                    <h2 className="text-xl md:text-3xl md:ml-10  font-bold py-5 font-cinzel">Total orders:  <span>0</span></h2>

                </div>
                <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">

                <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
    <thead className="bg-[#D1A054] text-white">
        <tr>
            <th scope="col" className="px-3 py-3 text-left text-xs font-medium  uppercase tracking-wider">
            USER EMAIL
            </th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-medium  uppercase tracking-wider">
            PHONE NUMBER
            </th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-medium  uppercase tracking-wider">
            BOOKING DATE
            </th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-medium  uppercase tracking-wider">
            BOOKING TIME
            </th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-medium  uppercase tracking-wider">
            ACTIVITY
            </th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-medium  uppercase tracking-wider">
            ACTION
            </th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
        <tr>
           
            <td className="px-3 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">user010@gmail.com</div>
            </td>
            <td className="px-2 py-4 whitespace-nowrap">
                <div className="text-sm ">01822299900</div>
            </td>
            <td className="px-2 py-4 whitespace-nowrap text-left">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                0+/11/06
                </span>
            </td>
            <td className="px-2 text-left py-4 whitespace-nowrap text-sm ">
            00 : 00
            </td>
            <td className="px-2 text-left py-4  text-sm ">
            Pending
            </td>
            <td className="px-2 py-4 text-left whitespace-nowrap  text-sm font-medium">
                <p href="#" className="ml-2 text-white btn rounded-full bg-[#287855]"><FiCheck></FiCheck> </p>

            </td>
        </tr>
        

    </tbody>
</table>
                </div>
            </div>
        </div>
    );
};

export default Bookingmanege;
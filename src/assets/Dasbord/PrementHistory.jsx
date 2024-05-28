import Sheredtitle from "../Components/Sheredtitle";


const PrementHistory = () => {
    return (
        <div className="">
            <Sheredtitle subhading={'---At a Glance!---'} hading={'PAYMENT HISTORY'}></Sheredtitle>
            <div className="bg-white pb-10 pt-5">
                <h2 className="text-xl md:text-3xl md:ml-10  font-bold py-5 font-cinzel">Total Payments: <span>0</span></h2>
                <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">

                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="bg-[#D1A054]">
                                <th className="w-1/4 py-4 px-6 text-left font-bold text-white uppercase text-sm lg:text-xl">Name</th>
                                <th className="w-1/4 py-4 px-6 text-left font-bold text-white uppercase text-sm lg:text-xl">Email</th>
                                <th className="w-1/4 py-4 px-6 text-left font-bold text-white uppercase text-sm lg:text-xl">Phone</th>
                                <th className="w-1/4 py-4 px-6 text-left font-bold text-white uppercase text-sm lg:text-xl">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">John Doe</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl truncate">johndoe@gmail.com</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">555-555-5555</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">
                                    <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">Jane Doe</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl truncate">janedoe@gmail.com</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">555-555-5555</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">
                                    <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">Inactive</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">Jane Doe</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl truncate">janedoe@gmail.com</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">555-555-5555</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">
                                    <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">Inactive</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">Jane Doe</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl truncate">janedoe@gmail.com</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">555-555-5555</td>
                                <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">
                                    <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">Inactive</span>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PrementHistory;
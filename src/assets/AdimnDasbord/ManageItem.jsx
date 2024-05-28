import { MdDelete } from "react-icons/md";
import Sheredtitle from "../Components/Sheredtitle";
import { LuPenSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
import useAllmenu from "../Castomhuk/useAllmenu";
import UsseAxeos from './../Castomhuk/UsseAxeos';
import Swal from "sweetalert2";


const ManageItem = () => {
    const [refetch, menu] = useAllmenu()
    const axiosSecur = UsseAxeos()
    const handelDeleteMenu = data => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecur.delete(`/menu/${data}`)
                    .then(result => {
                        console.log(result.data);

                        if (result.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    })

            }
        });
    }
    console.log(menu);
    return (
        <div className="">
            <Sheredtitle subhading={'---My Cart---'} hading={'WANNA ADD MORE?'}></Sheredtitle>
            <div className="bg-white pb-10 pt-5">
                <div className=" py-5 md:pr-5">
                    <h2 className="text-xl md:text-3xl md:ml-10  font-bold py-5 font-cinzel">Total orders:  <span>{menu.length}</span></h2>

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

                            {
                                menu.map((item, i) => (
                                    <tr>
                                        <td className="py-4 px-1 border-b text-center border-gray-200">{i + 1}</td>
                                        <td className="py-4 px-1 border-b border-gray-200">
                                            <div className="avatar">
                                                <div className="w-12 rounded">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-1 border-b border-gray-200 truncate">s{item.name}</td>
                                        <td className="py-4 px-1 border-b border-gray-200">{item.price}</td>
                                        <td className="py-4 px-1 border-b border-gray-200">
                                            <Link to={'/admindashbord/update'} className="btn bg-[#D1A054] flax text-white"><LuPenSquare className="text-2xl"></LuPenSquare></Link>
                                        </td>
                                        <td className="py-4 px-1 border-b border-gray-200">
                                            <button onClick={() => handelDeleteMenu(item._id)} className="btn bg-red-700 flax text-white"><MdDelete className="text-2xl"></MdDelete></button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;
import { MdDelete } from "react-icons/md";
import Sheredtitle from "../Components/Sheredtitle";
import { GiHumanPyramid } from "react-icons/gi";
import { useQuery } from "@tanstack/react-query";
import UsseAxeos from './../Castomhuk/UsseAxeos';
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUser = () => {
    // 10 staack query
    const axiosSecur = UsseAxeos()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const data = await axiosSecur.get('/users')
            return data.data
        },

    })


    const handeldeleteUser = id => {
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
                axiosSecur.delete(`/users/${id}`)
                    .then(result => {
                        console.log(result.data);

                        if (result.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });
    }
    const handelmodifide = modifid => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Are you create Admin"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecur.patch(`/users/${modifid}`)
                    .then(result => {
                        console.log(result.data);

                        if (result.data.modifiedCount) {
                            refetch()
                            Swal.fire({
                                title: "success!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });
    }


    console.log(users);
    return (
        <div className="">
            <Sheredtitle subhading={'---How many??---'} hading={'MANAGE ALL USERS'}></Sheredtitle>
            <div className="bg-white pb-10 pt-5">
                <div className="py-5 md:pr-5">
                    <h2 className="text-xl md:text-3xl md:ml-10  font-bold py-5 font-cinzel">Total orders:  <span>{users.length}</span></h2>

                </div>
                <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">

                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="bg-[#D1A054]">
                                <th className="w-1/12 py-4 px-6 text-left font-bold text-white uppercase text-sm lg:text-xl"></th>
                                <th className="w-3/12 py-4 px-6 text-left font-bold text-white uppercase text-sm lg:text-xl">NAME</th>
                                <th className="w-3/12 py-4 px-6 text-left font-bold text-white uppercase text-sm lg:text-xl">EMAIL</th>
                                <th className="w-1/12 py-4 px-6 text-left font-bold text-white uppercase text-sm lg:text-xl">ROLE</th>
                                <th className="w-2/12 py-4 px-6 text-left font-bold text-white uppercase text-sm lg:text-xl">ACTION</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {
                                users.map((data, i) => (
                                    <tr>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">{i + 1}</td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">{data.name}</td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl truncate">{data.email}</td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">
                                            {
                                                data?.role ? "admin" : <button onClick={() => handelmodifide(data._id)} className="btn bg-[#D1A054] flax text-white"><FaUsers className="text-2xl"></FaUsers></button>
                                            }
                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">
                                            <button onClick={() => handeldeleteUser(data._id)} className="btn bg-red-700 flax text-white"><MdDelete className="text-2xl"></MdDelete></button>
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

export default AllUser;
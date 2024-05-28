import { MdDelete } from "react-icons/md";
import Sheredtitle from "../Components/Sheredtitle";
import Usecart from "../Castomhuk/Usecart";
import Swal from "sweetalert2";
import { axiosSecur } from "../Castomhuk/UsseAxeos";


const Hycary = () => {
    
    const [refetch, cart] = Usecart()
    console.log(cart);
    const handeldelete = id => {
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
                axiosSecur.delete(`/carts/${id}`)
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
    const totalPrise = cart.reduce((total, item) => total + item.ProductPrise, 0)
    return (
        <div className="">
            <Sheredtitle subhading={'---My Cart---'} hading={'WANNA ADD MORE?'}></Sheredtitle>
            <div className="bg-white pb-10 pt-5">
                <div className="flex justify-between flex-wrap items-center py-5 md:pr-5">
                    <h2 className="text-xl md:text-3xl md:ml-10  font-bold py-5 font-cinzel">Total orders:  <span>{cart.length}</span></h2>
                    <h2 className="text-xl md:text-3xl md:ml-10  font-bold py-5 font-cinzel">total price: <span>{Math.round(totalPrise)}$</span></h2>
                    <button className="btn bg-[#D1A054] text-xl font-medium font-cinzel text-white">Pay</button>
                </div>
                <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">

                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="bg-[#D1A054]">
                                <th className="w-[3%] py-4 px-6 text-left font-bold text-white uppercase text-sm "></th>
                                <th className="w-2/12 text-center py-4 px-6  font-bold text-white uppercase text-sm ">ITEM IMAGE</th>
                                <th className="w-1/4 py-4 px-6 text-left font-bold text-white uppercase text-sm ">ITEM NAME</th>
                                <th className="w-1/12 py-4 px-6 text-left font-bold text-white uppercase text-sm ">PRICE</th>
                                <th className="w-1/12 py-4 px-6 text-left font-bold text-white uppercase text-sm ">ACTION</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {
                                cart.map((data, index) => (
                                    <tr>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">{index + 1}</td>
                                        <td className="py-4 px-6 text-center border-b border-gray-200 text-[12px] lg:text-xl">
                                            <div className="avatar">
                                                <div className="w-12 rounded">
                                                    <img src={data.productImg} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">{data.email}</td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">{data.ProductPrise}$</td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[12px] lg:text-xl">
                                            <button onClick={() => handeldelete(data._id)} className="btn bg-red-700 flax text-white"><MdDelete className="text-2xl"></MdDelete></button>
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

export default Hycary;
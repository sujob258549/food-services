import { useContext } from "react";
import { CreatAuthContext } from "../Firebase/Context";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { from } from "env-var";

const ProductCard = ({ products, producthading }) => {

    const { user } = useContext(CreatAuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const handleproductCard = product => {
        if (user && user.email) {


            console.log(product);
        }
        else {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes Logged it",
                cancelButtonText: "No, cancel!",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    
                        navigate('/login',{state:{from: location}})
                    
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire({
                        title: "Cancelled",
                        text: "Your imaginary file is safe :)",
                        icon: "error"
                    });
                }
            });
        }
    }
    return (
        <div>
            <h3 className="text-center  py-10 font-cinzel font-bold px-10 text-4xl  uppercase">{producthading}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                {
                    products.map(product => (
                        <>
                            <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg">
                                <img className="object-cover w-full h-72" src={product.image} alt="avatar" />

                                <div className="py-5 text-center">
                                    <h2 className="px-5 text-2xl font-bold ">{product.name}</h2>
                                    <span className="px-5 text-sm">{product.recipe}</span>
                                </div>
                                <div className="flex justify-center pb-5 ">
                                    <button onClick={() => handleproductCard(product)} className="btn border-b-4 border-b-[#BB8506] hover:bg-[#1F2937] bg-slate-100 uppercase text-xl font-medium text-[#BB8506] mx-auto">add to cart</button>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductCard;
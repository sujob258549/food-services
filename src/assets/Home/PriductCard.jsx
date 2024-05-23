import { useEffect, useState } from "react";
import Sheredtitle from "../Components/Sheredtitle";


const PriductCard = () => {

    const [products, setProduct] = useState([]);
    console.log(products);
    useEffect(() => {
        fetch('../../../public/menu.json')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])
    return (
        <>
            <Sheredtitle

                subhading={'---Should Try---'}
                hading={'CHEF RECOMMENDS'}


            ></Sheredtitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                {
                    products.slice(0,3).map(product => (
                        <>
                            <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg">
                                <img className="object-cover w-full h-72" src={product.image} alt="avatar" />

                                <div className="py-5 text-center">
                                    <h2 className="px-5 text-2xl font-bold ">{product.name}</h2>
                                    <span className="px-5 text-sm">{product.recipe}</span>
                                </div>
                                <div className="flex justify-center pb-5 ">
                                <button className="btn border-b-4 border-b-[#BB8506] hover:bg-[#1F2937] bg-slate-100 uppercase text-xl font-medium text-[#BB8506] mx-auto">add to cart</button>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>

        </>
    );
};

export default PriductCard;
import { useEffect, useState } from "react";
import './slider.css'
import Sheredtitle from "../Components/Sheredtitle";
import useMenu from "../Castomhuk/useMenu";


const Popular = () => {

    const [menu] = useMenu();
    const populerProduct = menu.filter(product => product.category === 'popular') 

    // const [manu, setManu] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:3000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             const filterData = data.filter(item => item.category === 'popular')
    //             setManu(filterData)
    //         })
    // }, [])
    return (
        <>
            <Sheredtitle

                subhading={'---Check it out---'}
                hading={'FROM OUR MENU'}

            >

            </Sheredtitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-5 md:pt-10">
                {
                    populerProduct.map(items => (
                        <>

                            <div className="">
                                <div className="flex gap-5">
                                    <div className="flex gap-5">
                                        <img className="w-20 h-20 border-radious" src={items.image} alt="" />
                                        <div>
                                            <h2 className="text-xl font-bold">{items.name}----------------</h2>
                                            <p>{items.recipe}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-[#BB8506]">{items.price}</h2>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
            <div className="flex justify-center py-10  md:py-20">

                <button type="button" className="text-xl focus:outline-black  font-bold rounded-lg py-2.5 px-4 border-b-4 border-black text-black hover:bg-slate-500 hover:text-white duration-500">View Full  Menu</button>
            </div>

        </>
    );
};

export default Popular;
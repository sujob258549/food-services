import { Link } from "react-router-dom";


const Item = ({item, cetagory}) => {
    return (
        <>
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-10">
            {
                item.map(items => (
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
        <div className="py-10 md:py-14 flex justify-center">
        <Link to={`/ourshop/${cetagory}`} type="button" className="text-[16px] focus:outline-black  font-semibold rounded-lg py-2.5 px-4 border-b-4 border-black text-black hover:bg-slate-500 hover:text-white duration-500">ORDER YOUR FAVOURITE FOOD</Link>
        </div>
        
        </>
    );
};

export default Item;
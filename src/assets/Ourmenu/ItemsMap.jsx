import { Link } from "react-router-dom";
import Item from "../Components/Item";


const ItemsMap = ({ items, catagory }) => {
    console.log(items , catagory);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                {

                    items.map(product => (
                      <Item item={product}></Item>
                    ))

                }
            </div>
            <div className="py-10 md:py-14 flex justify-center">
                <Link to={`/ourshop/${catagory}`} type="button" className="text-[16px] focus:outline-black  font-semibold rounded-lg py-2.5 px-4 border-b-4 border-black text-black hover:bg-slate-500 hover:text-white duration-500">ORDER YOUR FAVOURITE FOOD</Link>
            </div>
        </div>
    );
};

export default ItemsMap;
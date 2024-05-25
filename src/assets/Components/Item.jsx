


const Item = ({ item }) => {
    return (
        <>
            <div className="">
                <div className="flex gap-5">
                    <div className="flex gap-5">
                        <img className="w-20 h-20 border-radious" src={item.image} alt="" />
                        <div>
                            <h2 className="text-xl font-bold">{item.name}----------------</h2>
                            <p>{item.recipe}</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-[#BB8506]">{item.price}</h2>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Item;
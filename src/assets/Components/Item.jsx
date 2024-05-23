

const Item = ({item}) => {
    return (
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
    );
};

export default Item;
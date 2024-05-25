import ProductCard from "../Components/ProductCard";


const OurShopMap = ({ products, producthading }) => {
    return (
        <div>
            <h3 className="text-center  py-10 font-cinzel font-bold px-10 text-4xl  uppercase">{producthading}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                {
                    products.map(product => (
                       <ProductCard product={product}></ProductCard>
                    ))
                }
            </div>
        </div>
    );
};

export default OurShopMap;
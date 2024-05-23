

const Sheredtitle = ({subhading , hading}) => {
    return (
        <div className="flex flex-col py-5 md:py-10 space-y-3  items-center">
            <p className="text-xl italic text-[#D99904]">{subhading}</p>
            <h3 className="border-y-2 py-2 px-10 text-4xl font-medium uppercase">{hading}</h3>
        </div>
    );
};

export default Sheredtitle;
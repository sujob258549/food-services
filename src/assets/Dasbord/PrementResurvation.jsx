import { FaAddressCard } from "react-icons/fa";

const PrementResurvation = () => {
    return (
        <div>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
                <h2 className="font-semibold text-black capitalize text-center text-4xl">PAYMENT</h2>


                <form>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 py-10">

                        <div>

                            <label className="input input-bordered flex items-center gap-2">
                            <FaAddressCard/>
                                <input type="number" className="grow" placeholder="Card number" />
                            </label>
                        </div>

                        <div>
                            <input type="date" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className="mx-auto flex justify-center">
                        <button className=" text-xl font-bold  leading-5 text-white transition-colors duration-300 transform bg-[#570DF8] rounded-md hover:bg-gray-600 w-[420px] h-[50px] focus:outline-none focus:bg-gray-600">pay</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default PrementResurvation;
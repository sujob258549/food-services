


const Update = () => {
    return (
        <div>
            <div className="mx-14 mt-10 bg-white rounded-lg">
                <div className="p-8">
                    <div className="">
                        <label className="text-xl font-semibold">Recipe name</label><br />
                        <input
                            type="text"
                            name="name"
                            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                            placeholder="Recipe name *"
                        />

                    </div>
                    <div className="my-6 grid md:grid-cols-2 grid-cols-1 gap-4">

                        <div className="">
                            <label className="text-xl font-semibold">Category*</label><br />
                            <select
                                name="select"
                                id="select1"
                                className="mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                            >
                                <option className="font-semibold text-slate-300">Category</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xl font-semibold">Price*</label>
                            <input
                                type="text"
                                name="name"
                                className="mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                                placeholder="Price"
                            />

                        </div>
                    </div>
                    <div>
                        <label className="text-xl font-semibold">Recipe Details*</label>
                        <textarea
                            name="textarea"
                            id="text"
                            cols="30"
                            rows="10"
                            className="mb-5 mt-2 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300"
                        >
                            Recipe Details
                        </textarea>
                    </div>
                {/* file input */}
                    <input type="file" placeholder="You can't touch this" className=" mb-10  file-input-bordered w-full max-w-xs"  />
                    <div className="text-center">
                        <button className="cursor-pointer bg-gradient-to-r btn rounded-none text-xl text-white from-[#835D23] to-[#B58130] font-semibold">
                        Update Recipe Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;

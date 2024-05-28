import { useForm } from "react-hook-form";
import Sheredtitle from "../Components/Sheredtitle";
import UsePublickAxios from "../Castomhuk/UsePublickAxios";
import UsseAxeos from "../Castomhuk/UsseAxeos";
import Swal from "sweetalert2";


// imgge hosting api
const imgage_hosting_kye = import.meta.env.VITE_image_api_kye;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imgage_hosting_kye}`
// console.log(image_hosting_api);

const AddItem = () => {
// axious api
    const axiosPublick = UsePublickAxios()
    const axiosSecur = UsseAxeos()

    const {
        register, formState: { errors }, handleSubmit, } = useForm()

    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] }
        console.log(imageFile);
        const res = await axiosPublick.post(image_hosting_api, imageFile, {
            headers: { 'content-type': 'multipart/form-data' }
        })
        console.log(res);
        if(res.data.success){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              const Adddata = {
                name: data.name,
                recipe : data.textarea,
                image: res.data.data.display_url,
                category: data.select,
                price: data.price
              }

              const menudata = await axiosSecur.post('/menu',Adddata)
              console.log(menudata.data);
        }
    }

    return (
        <div>
            <Sheredtitle subhading={"---What's new?---"} hading={'ADD AN ITEM'}></Sheredtitle>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-14 mt-10 bg-white rounded-lg">
                <div className="p-8">
                    <div className="">
                        <label className="text-xl font-semibold">Recipe name</label><br />
                        <input
                            {...register("name", { required: true })}
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
                                {...register("select", { required: true })}
                                name="select"
                                id="select1"
                                className="mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                            >
                                <option className="font-semibold text-slate-300">Category</option>
                                <option value={'dessert'} className="font-semibold text-slate-300">dessert</option>
                                <option value={'pizza'} className="font-semibold text-slate-300">pizza</option>
                                <option value={'soup'} className="font-semibold text-slate-300">soup</option>
                                <option value={'salad'} className="font-semibold text-slate-300">salad</option>
                                <option value={'drinks'} className="font-semibold text-slate-300">drinks</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xl font-semibold">Price*</label>
                            <input
                                {...register("price", { required: true })}
                                type="text"
                                name="price"
                                className="mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                                placeholder="Price"
                            />

                        </div>
                    </div>
                    <div>
                        <label className="text-xl font-semibold">Recipe Details*</label>
                        <textarea
                            {...register("textarea", { required: true })}
                            name="textarea"
                            id="text"
                            cols="30"
                            rows="10"
                            className="mb-5 mt-2 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold "
                        >
                            Recipe Details
                        </textarea>
                    </div>
                    {/* file input */}

                    <input
                        {...register("image", { required: true })}
                        type="file" name="image" placeholder="You can't touch this" className=" mb-10  file-input-bordered w-full max-w-xs" />
                    <div className="">
                        <button className="cursor-pointer bg-gradient-to-r btn rounded-none text-xl text-white from-[#835D23] to-[#B58130] font-semibold">
                            Add Item
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddItem;

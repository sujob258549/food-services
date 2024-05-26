import { Controller, useForm } from "react-hook-form";
import Sheredtitle from "../Components/Sheredtitle";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FcSwitchCamera } from "react-icons/fc";


const AddReview = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            name: '',
            rating: 0,
        },
    });

    function onSubmit(data) {
        console.log(data);
    }
    return (
        <div>
            <Sheredtitle subhading={'---Sharing is Caring!!!---'} hading={'GIVE A REVIEW...'}></Sheredtitle>
            <form className="p-5 md:p-10 lg:p-20 bg-white rounded-md" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col justify-center items-center">
                    <div id="rating_label" className="text-xl font-cinzel font-bold">Rate us</div>
                    <Controller
                        control={control}
                        name="rating"
                        rules={{
                            validate: (rating) => rating > 0,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Rating
                                value={value}
                                style={{ maxWidth: 160 }}
                                isRequired
                                onChange={onChange}
                                visibleLabelId="rating_label"
                                onBlur={onBlur}
                            />
                        )}
                    />
                    {errors.rating && <div>Rating is required.</div>}
                </div>
                <div className="pt-5">
                    <label htmlFor="name" >
                        <label className="text-xl font-medium pb-4">Which recipe you liked most?</label><br />
                        <input type="text" placeholder="Recipe you liked most" {...register('name', { required: true })} className="input input-bordered w-full mt-2" />
                    </label>
                    {errors.name && <div>Name is required.</div>}
                </div>
                <div className="pt-5">

                <label htmlFor="name">
                    <label  className="text-xl font-medium pb-4">Do you have any suggestion for us?</label><br />
                    <input type="text" placeholder="Sugggestion" {...register('suggestion', { required: true })} className="input input-bordered w-full mt-2" />
                </label>
                {errors.suggestion && <div>Name is required.</div>}
                </div>
                <div className="pt-5">

                <label htmlFor="name">
                    <label className="text-xl font-medium pb-4">Kindly express your care in a short way.</label><br />
                    <textarea type="text" placeholder="Review in detail" {...register('express', { required: true })} className="input input-bordered mt-2 w-full h-32 " />
                </label>
                {errors.express && <div>express is required.</div>}
                </div>


                <button className="bg-gradient-to-r mt-5 md:mt-8 from-[#835D23] btn rounded-none text-xl flex text-white to-[#B58130]" type="submit">
                Send Review <FcSwitchCamera></FcSwitchCamera>
                </button>
            </form>
        </div>
    );
};

export default AddReview;





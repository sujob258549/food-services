import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Make sure to install and import the correct Rating component

const Comments = () => {
    const {
        register,
        father,
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
        // alert(JSON.stringify(data, undefined, 2));
        console.log(data);
    }

    return (
        <div className='py-10 text-center '>
            <form onSubmit={handleSubmit(onSubmit)} className='border p-5 rounded-md w-96 space-y-5'>
                <label className="input input-bordered flex items-center gap-2 font-medium">
                    Name
                    <input type="text" id="name" {...register('name', { required: true })} />
                </label>
                <label className="input input-bordered flex items-center gap-2 font-medium">
                    Name
                    <input type="text" id="father" {...register('father', { required: true })} />
                </label>
                <label className="input input-bordered flex items-center gap-2 font-medium">
                    Name
                    <input type="text" id="mother" {...register('mother', { required: true })} />
                </label>
                <label className="input input-bordered flex items-center gap-2 font-medium">
                    Name
                    <input type="text" id="sister" {...register('sister', { required: true })} />
                </label>
                <div>
                    <div id="rating_label" className='text-xl font-semibold'>Rating</div>
                    <div className='flex justify-center'>

                        <Controller
                            control={control}
                            name="rating"
                            rules={{
                                validate: (rating) => rating > 0,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Rating
                                    value={value}
                                    style={{ maxWidth: 180 }}
                                    isRequired
                                    onChange={onChange}
                                    visibleLabelId="rating_label"
                                    onBlur={onBlur}
                                />
                            )}
                        />
                        {errors.rating && <div>Rating is required.</div>}


                    </div>                </div>

                <button class="mt-8 inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                    href="#">
                    Add reviews
                </button>
            </form>
        </div>
    );
};

export default Comments;

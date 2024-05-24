import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import iconeimg from '../../assets/image/icon/quote-left 1.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// rating
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Sheredtitle from '../Components/Sheredtitle';

export default function RatingCarodal() {
    const [manu, setManu] = useState([]);
    console.log(manu);
    useEffect(() => {
        fetch('http://localhost:3000/rating')
            .then(res => res.json())
            .then(data => {
                const filterData = data.filter(item => item)
                setManu(filterData)
            })
    }, [])
    return (
        <>
            <Sheredtitle
                subhading={'---What Our Clients Say---'}

                hading={'TESTIMONIALS'}

            ></Sheredtitle>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    manu.map(item => (
                        <SwiperSlide>

                            <div className='flex flex-col justify-center space-y-4'>
                                <div className='flex justify-center'>
                                    <Rating
                                        style={{ maxWidth: 120 }}
                                        value={item.rating}
                                        isDisabled
                                    />
                                </div>
                                <div className='flex justify-center'>
                                    <img className='w-20' src={iconeimg} alt="" />
                                </div>
                                <p className='text-center md:px-20 px-2'>{item.details}</p>
                                <h2 className='text-center text-2xl text-[#CD9003] font-semibold'>{item.name}</h2>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    );
}

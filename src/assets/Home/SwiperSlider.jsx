
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../assets/image/home/slide1.jpg'
import slide2 from '../../assets/image/home/slide2.jpg'
import slide3 from '../../assets/image/home/slide3.jpg'
import slide4 from '../../assets/image/home/slide4.jpg'
import slide5 from '../../assets/image/home/slide5.jpg'

import './slider.css'


// import required modules
import { Pagination } from 'swiper/modules';
import Sheredtitle from '../Components/Sheredtitle';

export default function SwiperSlider() {
  return (
    <>
      <Sheredtitle
        subhading={'---From 11:00am to 10:00pm---'}
        hading={"ORDER ONLINE"}
      >

      </Sheredtitle>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='w-full' src={slide1} alt="" />
          <h3 className='text-3xl uppercase text-shodows -m-14 font-medium text-center text-white '>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src={slide2} alt="" />
          <h3 className='text-3xl  uppercase text-shodows -m-14 font-medium text-center text-white '>desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src={slide3} alt="" />
          <h3 className='text-3xl uppercase text-shodows -m-14 font-medium text-center text-white '>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src={slide4} alt="" />
          <h3 className='text-3xl uppercase text-shodows -m-14 font-medium text-center text-white '>Soups</h3>
        </SwiperSlide>

        <SwiperSlide>
          <img className='w-full' src={slide4} alt="" />
          <h3 className='text-3xl uppercase text-shodows -m-14 font-medium text-center text-white '>Salads</h3>
        </SwiperSlide>

        <SwiperSlide>
          <img className='w-full' src={slide4} alt="" />
          <h3 className='text-3xl uppercase text-shodows -m-14 font-medium text-center text-white '>Salads</h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide4} alt="" />
          {/* <h3 className='text-3xl uppercase text-shodows -m-14 font-medium text-center text-white '>Salads</h3> */}
        </SwiperSlide>

      </Swiper>
    </>
  );
}

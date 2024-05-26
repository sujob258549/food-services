import React from 'react';
import Sheredtitle from '../Components/Sheredtitle';
import { Link } from 'react-router-dom';
import { BsTable } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosTime } from 'react-icons/io';

const Resarvation = () => {
    return (
        <div>
            <Sheredtitle subhading={'---Reservation---'} hading={'BOOK A TABLE'}></Sheredtitle>
            <div className="border-2 border-blue-400 rounded-lg">
                <div className="mt-10 text-center font-bold">Reservation Form</div>
                <div className="mt-3 text-center text-4xl font-bold">Make a Reservation</div>
                <div className="p-8">
                    <div className="flex gap-4">
                        <input
                            type="date"
                            name="date"
                            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                        />
                        <input
                            type="time"
                            name="time"
                            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                        />
                        <select
                            name="select"
                            id="select"
                            className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                        >
                            <option className="font-semibold text-slate-300">Please Select</option>
                        </select>
                    </div>
                    <div className="my-6 flex gap-4">
                        <input
                            type="text"
                            name="name"
                            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                            placeholder="Full Name *"
                        />
                        <input
                            type="number"
                            name="phone"
                            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                            placeholder="Phone *"
                        />
                        <input
                            type="email"
                            name="email"
                            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                            placeholder="Email *"
                        />
                    </div>
                    <div className="text-center mt-10">
                        <Link to={'/dashbord/prement'} className="cursor-pointer bg-gradient-to-r text-xl btn rounded-none from-[#835D23] to-[#B58130] font-bold text-white">
                            Book A Table <BsTable></BsTable>
                        </Link>
                    </div>
                </div>
            </div>
            <Sheredtitle subhading={'---Visit Us---'} hading={'OUR LOCATION'}></Sheredtitle>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-5'>

                <div className='bg-[#D1A054] p-5'>
                    <FaPhoneAlt className='w-full text-white text-center mx-auto '></FaPhoneAlt>
                </div>
                <div className='bg-[#D1A054] p-5'>
                    <FaLocationDot className='w-full text-white text-center mx-auto '></FaLocationDot>
                </div>
                <div className='bg-[#D1A054] p-5'>
                    <IoIosTime className='w-full text-white text-center mx-auto '></IoIosTime>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-5 py-10 md:py-20 bg-slate-100'>
                <div className='text-center'>
                    <h3 className='text-2xl font-medium'>PHONE</h3>
                    <p className='text-[16px]'>+38 (012) 34 56 789</p>
                </div>
                <div className='text-center'>
                    <h3 className='text-2xl font-medium'>ADDRESS</h3>
                    <p className='text-[16px]'>+38 (012) 34 56 789</p>
                </div>
                <div className='text-center'>
                    <h3 className='text-2xl font-medium'>WORKING HOURS</h3>
                    <p className='text-[16px]'>Mon - Fri: 08:00 - 22:00</p>
                    <p className='text-[16px]'>Sat - Sun: 10:00 - 23:00</p>
                </div>
            </div>
        </div>
    );
};

export default Resarvation;
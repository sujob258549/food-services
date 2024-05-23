import React from 'react';
import Sheredtitle from '../Components/Sheredtitle';
import ourmenuImg from '../../assets/image/home/featured.jpg';

const OurMenu = () => {
    return (
        <div className='from-our-menu mt-20 md:my-20 pt-10 md:py-20 bg-fixed'>
            <Sheredtitle
                subhading={'---Check it out---'}
                hading={'FROM OUR MENU'}
            >
            </Sheredtitle>

            <section className="body-font ">
                <div className="container mx-auto flex md:px-10 lg:px-24 px-5 md:py-10 md:flex-row-reverse gap-10 flex-col items-center">
                    <div className="lg:flex-grow mt-5 md:mt-0 md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="text-xl font-extrabold tracking-tight mb-3 md:text-2xl text-white">
                            March 20, 2023
                            WHERE CAN I GET SOME?
                        </h1>
                        <p className="mb-8 md:pl-0 pl-2 pr-2 leading-relaxed dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </p>
                        <div className="flex justify-center">
                            <button type="button" className="text-xl text-white focus:outline-black font-bold rounded-lg py-2.5 px-4 border-b-4 border-white hover:bg-slate-500 hover:text-white duration-500">View Full Menu</button>
                        </div>
                    </div>
                    <div className="mb-5 md:mb-0 md:w-1/2 w-3/6">
                        <img className="w-full rounded" alt="hero" src={ourmenuImg} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurMenu;
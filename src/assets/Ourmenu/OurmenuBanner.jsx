import React from 'react';
import { Parallax } from 'react-parallax';

const OurmenuBanner = ({ img, header, paragrap }) => {
    return (

        <Parallax
            blur={{ min: -80, max: 80 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div>
                <div className="hero h-[650px]" >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content bg-[#14010149] p-20 rounded-md">
                        <div className="space-y-10">
                            <h1 className="mb-5 text-white font-cinzel text-3xl md:text-[88px] uppercase font-bold">{header}</h1>
                            <p className="mb-5 text-white font-cinzel">{paragrap}</p>

                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default OurmenuBanner;
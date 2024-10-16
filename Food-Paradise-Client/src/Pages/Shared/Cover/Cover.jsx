import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, shortDes }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
            className='mb-20'
        >
            <div
                className="hero h-[300px] md:h-[500px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl md:text-5xl font-semibold uppercase text-white">{title}</h1>
                        <p className="mb-5 font-semibold text-slate-200">
                            {shortDes}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;
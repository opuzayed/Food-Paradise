import React from 'react';

const Cover = ({img, title}) => {
    return (
        <div
        className="hero h-[700px] mb-20"
        style={{
          backgroundImage: `url(${img})`,
        }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase text-white">{title}</h1>
            <p className="mb-5 font-bold">
             Would You Like To Try A Dish?
            </p>
           
          </div>
        </div>
      </div>
    );
};

export default Cover;
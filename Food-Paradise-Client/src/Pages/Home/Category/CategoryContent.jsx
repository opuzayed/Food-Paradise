import React from 'react';

const SliderContent = ({img, title}) => {
    return (
        <div className='relative'>
            <img src={img} alt="" />
            <span className='absolute bottom-0 left-0 w-full py-5 text-3xl uppercase text-center text-white font-bold'>{title}</span>
        </div>
    );
};

export default SliderContent;
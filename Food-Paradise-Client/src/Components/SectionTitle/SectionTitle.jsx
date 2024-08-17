import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='md:w-3/12 mx-auto text-center my-20'>
            <p className='text-cyan-500 mb-2'>---{subHeading}---</p>
            <h3 className='text-3xl uppercase border-y-2 py-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;
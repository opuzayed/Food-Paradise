import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center my-10'>
            <p className='text-sm text-accent-color mb-2 uppercase'>--- {subHeading} ---</p>
            <h3 className='text-3xl uppercase border-y-2 py-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;
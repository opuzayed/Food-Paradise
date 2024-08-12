import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='text-center'>
            <p className='text-cyan-500'>---{subHeading}---</p>
            <h3 className='text-3xl uppercase border-y-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;
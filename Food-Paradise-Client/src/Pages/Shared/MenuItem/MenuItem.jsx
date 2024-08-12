import React from 'react';

const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius:'0px 200px 200px 200px'}} src={image} className ='w-[100px]' alt="" />
            <div>
                <h3 className='uppercase'>{name}-----------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-cyan-500'>${price}</p>
        </div>
    );
};

export default MenuItem;
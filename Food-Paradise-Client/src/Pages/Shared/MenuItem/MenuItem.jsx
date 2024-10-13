import React from 'react';

const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className='flex flex-col text-center lg:text-left lg:flex-row space-x-2'>
            <img style={{borderRadius:'0px 200px 200px 200px'}} src={image} className ='w-[200px] lg:w-[100px] mx-auto lg:mx-0 object-cover mb-4 lg:mb-0 shadow-small-img' alt={name} />
            <div>
                <h3 className='uppercase font-semibold mb-1'>{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-cyan-500'>${price}</p>
        </div>
    );
};

export default MenuItem;
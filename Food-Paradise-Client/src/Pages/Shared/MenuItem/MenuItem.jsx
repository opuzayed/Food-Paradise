import React from 'react';

const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div>
            <img src={image} className='w-[100px]' alt="" />
            <div>
                <h3 className='uppercase'>{name}--------------------------</h3>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;
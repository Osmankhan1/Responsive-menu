import React from 'react';
import Feature from '../Feature/Feature';

export const PriceOption = ({ option }) => {
    const { option_name, price } = option;
    return (
        <div className='bg-amber-500 rounded-md p-4 text-white text-center'>
            <h2>
                <span className='text-5xl'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h2 className='text-2xl'>{option_name}</h2>
            {features.map(feature => <Feature feature={feature}></Feature>)}
        </div>
    );
};

import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {option_name, price, features} = option;
    return (
        <div className='bg-blue-600 rounded-xl p-4 text-white text-center flex flex-col'>
            <h2>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-3xl'> /mon</span>
            </h2>
            <h2 className='text-2xl p-3 font-semibold'>{option_name}</h2>
            <div className='pl-6 mt-3 flex-grow'>
            {
                features.map(feature => <Feature feature={feature}></Feature>)
            }
            </div>
            <button className='bg-red-600 py-2 w-full font-bold text-white rounded-xl hover:bg-red-800 mt-3'>Buy Now</button>

  

        </div>
        
    );
};

export default PriceOption;
import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {

    
        const priceOptions = [
          {
            "id": 1,
            "option_name": "Basic Membership",
            "features": [
              "Access to gym facilities",
              "Unlimited use of cardio equipment",
              "Locker room access",
              "Free towel service",
              "Standard customer support"
            ],
            "price": 29
          },
          {
            "id": 2,
            "option_name": "Premium Membership",
            "features": [
              "Access to gym facilities",
              "Unlimited use of cardio equipment",
              "Locker room access",
              "Free towel service",
              "Access to group fitness classes",
              "Personalized workout plan",
              "Priority customer support",
              "Monthly fitness assessment"
            ],
            "price": 49
          },
          {
            "id": 3,
            "option_name": "Family Membership",
            "features": [
              "Access to gym facilities for the whole ",
              "Unlimited use of cardio equipment",
              "Locker room access",
              "Free towel service",
              "Access to group fitness classes",
              "Personalized workout plans for",
              "Priority customer support",
              "Childcare services",
              "Discounted personal training sessions"
            ],
            "price": 79
          },
          {
            "id": 4,
            "option_name": "Student Membership",
            "features": [
              "Access to gym facilities",
              "Unlimited use of cardio equipment",
              "Locker room access",
              "Free towel service",
              "Access to group fitness classes",
              "Valid student ID required",
              "Standard customer support",
              "Bi-weekly fitness workshops"
            ],
            "price": 19
          }
        ]
      
      

    return (
        <div>
            <h2 className='text-3xl md:text-5xl text-red-600 font-extrabold text-center mt-5 '>Best price in the city</h2>
           <div className='grid  md:grid-cols-4  gap-3 m-14'>
           {
                priceOptions.map(option => <PriceOption option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;
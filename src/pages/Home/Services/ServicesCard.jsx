import React from 'react';

const ServicesCard = ({ service }) => {
    const { img, title, price } = service
    return (
        <div className="card w-96 bg-base-100 border-2 border-grey p-3">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="text-start py-5">
                <h2 className='text-2xl font-bold'>{title}</h2>
                <p className='text-[#FF3811] font-bold'>Price: {price}</p>
            </div>
        </div>
    );
};

export default ServicesCard;
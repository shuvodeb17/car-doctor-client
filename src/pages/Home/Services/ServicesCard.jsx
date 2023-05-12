import React from 'react';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const ServicesCard = ({ service }) => {
    const {_id, img, title, price } = service
    return (
        <div className="card w-96 bg-base-100 border-2 border-grey p-3">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className='flex items-center'>
                <div className="text-start py-5 flex-1">
                    <h2 className='text-2xl font-bold'>{title}</h2>
                    <p className='text-[#FF3811] font-bold'>Price: {price}</p>
                </div>
                <div className='cursor-pointer'>
                    <Link to={`/service-details/${_id}`}>
                    <ArrowSmallRightIcon className="h-6 w-6 text-blue-500" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
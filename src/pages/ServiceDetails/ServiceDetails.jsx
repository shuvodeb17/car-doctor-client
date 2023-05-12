import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()
    console.log(service);
    const { img, title, description, facility, price } = service;

    return (
        <div>
            <div className="carousel-item relative w-full ">
                <img src={img} className="w-full" style={{ height: '53vh' }} />
                <div style={{ height: '53vh' }} className="absolute flex flex-col justify-center transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] w-full pl-10">
                    <div className='text-white w-1/3 space-y-5'>
                        <h1 className="text-5xl font-bold">
                            Service Details
                        </h1>
                    </div>
                </div>
            </div>

            <div className='mt-24'>
                <div>
                    {/* <img style={{ height: '40vh' }} src={img} alt="" /> */}
                    <h1 className="text-2xl font-bold mt-5">{title}</h1>
                    <p className="mt-5">{description}</p>

                    <div className='flex mt-5 gap-11'>
                        <div className='grid grid-cols-2 gap-5'>
                            {
                                facility.map(fac => <div>
                                    <div className="card bg-base-100 shadow-xl">
                                        <div className="card-body">
                                            <h2 className="card-title">{fac?.name}</h2>
                                            <p>{fac?.details}</p>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold">Price: ${price}</h1>
                            <Link>
                                <button className="btn btn-secondary">Proceed Checkout</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
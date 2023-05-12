import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="text-center">
                <h1 className="text-2xl mb-3 text-[#FF3811] font-bold">Services</h1>
                <h1 className="text-4xl font-bold mb-3">Our Service Area</h1>
                <p className='mb-5'>
                    the majority have suffered alteration in some form, by injected humour, or <br /> randomised words which don't look even slightly believable.
                </p>
                <div className='grid grid-cols-3 gap-10'>
                    {
                        services.map(service => <ServicesCard
                            key={service._id}
                            service={service}
                        ></ServicesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
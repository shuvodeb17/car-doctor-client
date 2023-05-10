import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content grid lg:grid-cols-2 gap-4">
                <div className='relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute -bottom-16 border-8 border-white right-5" />
                </div>
                <div>
                    <h1 className="text-2xl text-[#FF3811] font-bold">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-3 text-[#737373] mt-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                    <p className="text-[#737373] mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn bg-[#FF3811] border-0">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import image1 from '../../../assets/images/banner/5.jpg'
import image2 from '../../../assets/images/banner/1.jpg'
import image3 from '../../../assets/images/banner/2.jpg'
import image4 from '../../../assets/images/banner/3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[536px] ">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={image1} className="w-full" />
                <div style={{ height: '81vh' }} className="absolute flex flex-col justify-center transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] w-full pl-10">
                    <div className='text-white w-1/3 space-y-5'>
                        <h1 className="text-5xl font-bold">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error me-5">Error</button>
                            <button className="btn btn-outline btn-primary">Button</button>
                        </div>
                    </div>
                    <div className='flex justify-end absolute bottom-10 right-0 pr-10'>
                        <a href="#slide4" className="btn btn-circle me-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <img src={image2} className="w-full" />
                <div style={{ height: '81vh' }} className="absolute flex flex-col justify-center transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] w-full pl-10">
                    <div className='text-white w-1/3 space-y-5'>
                        <h1 className="text-5xl font-bold">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error me-5">Error</button>
                            <button className="btn btn-outline btn-primary">Button</button>
                        </div>
                    </div>
                    <div className='flex justify-end absolute bottom-10 right-0 pr-10'>
                        <a href="#slide1" className="btn btn-circle me-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <img src={image3} className="w-full" />
                <div style={{ height: '81vh' }} className="absolute flex flex-col justify-center transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] w-full pl-10">
                    <div className='text-white w-1/3 space-y-5'>
                        <h1 className="text-5xl font-bold">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error me-5">Error</button>
                            <button className="btn btn-outline btn-primary">Button</button>
                        </div>
                    </div>
                    <div className='flex justify-end absolute bottom-10 right-0 pr-10'>
                        <a href="#slide2" className="btn btn-circle me-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full ">
                <img src={image3} className="w-full" />
                <div style={{ height: '81vh' }} className="absolute flex flex-col justify-center transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] w-full pl-10">
                    <div className='text-white w-1/3 space-y-5'>
                        <h1 className="text-5xl font-bold">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error me-5">Error</button>
                            <button className="btn btn-outline btn-primary">Button</button>
                        </div>
                    </div>
                    <div className='flex justify-end absolute bottom-10 right-0 pr-10'>
                        <a href="#slide1" className="btn btn-circle me-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full ">
                <img src={image4} className="w-full" />
                <div style={{ height: '81vh' }} className="absolute flex flex-col justify-center transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] w-full pl-10">
                    <div className='text-white w-1/3 space-y-5'>
                        <h1 className="text-5xl font-bold">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error me-5">Error</button>
                            <button className="btn btn-outline btn-primary">Button</button>
                        </div>
                    </div>
                    <div className='flex justify-end absolute bottom-10 right-0 pr-10'>
                        <a href="#slide4" className="btn btn-circle me-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
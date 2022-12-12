import React from "react";
import Image from "next/image";
import banner from './assets/banner1.jpg';
import advertize from './assets/ads.png';

const index = () => {
    return (
        <section>

            {/* banner (set bg image) */}
            <div className='w-full h-full ' style={{
                background: `url(${banner})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'revert'
                }}>
                <div className='w-11/12 mx-auto'>
                    <h1 className='text-3xl md:text-6xl py-16 sm:py-24 md:py-28 lg:py-40 font-medium'>Health Care</h1>
                </div>
            </div>

            {/* route section */}
            <div className='bg-bage-100 py-3 shadow-sm'>
                <ul className='w-11/12 mx-auto flex text-xl font-semibold'>
                    <li className='pr-4 hover:text-teal-400 cursor-pointer'>Home</li>
                    <p className='pr-4 text-gray-300'>|</p>
                    <li className=''>About</li>
                </ul>
            </div>

                {/* blog section */}
                <section className='w-11/12 mx-auto my-20'>
                <div className='lg:flex gap-20'>
                        <div className='lg:w-8/12'>
                            <p className='text-xl text-justify text-gray-500'>TrustCare Health is a privately owned Mississippi based health company with several urgent care clinics in the Jackson metro area, Hattiesburg and Laurel. We also have a pediatric primary and urgent care clinic (TrustCare Kids) in the Jackson area. We’ve recently expanded to the Birmingham, Alabama, market where we have three urgent care clinics.<br /> <br /> We are expanding TrustCare urgent care clinics and TrustCare Kids to other parts of Mississippi and across the Southeast where there is a need for quality, timely urgent care. <br /> <br /> The vision for TrustCare Health’s urgent care clinics began in 2012 with the recognition that most Mississippians were not able to receive prompt medical care seven days a week, forcing families to waste time and money in the emergency room for non-life-threatening illnesses and injuries. <br /> <br /> Our walk-in urgent care clinics are staffed with board-certified local physicians and highly skilled and certified nurse practitioners, all with years of clinical experience. Our walk-in clinics operate 361 days per year and see thousands of patients per month. <br /> <br /> TrustCare Health also offers healthcare options such as direct primary care, telehealth, a pharmacy discount program, and employer services such as occupational medicine and workers’ compensation.</p>
                        </div>
                        <div className='lg:w-4/12'>
                            {/* contact links  */}
                            <div className='bg-[#3fc2cd] text-white mt-16 lg:mt-0 mb-16'>
                                <h1 className='bg-[#0e162f] text-2xl p-6 font-semibold'>About</h1>
                                <ul className='p-8 text-xl font-semibold'>
                                    <li className='py-3 hover:text-gray-800 cursor-pointer'>Insurance</li>
                                    <hr  />
                                    <li className='py-3 hover:text-gray-800 cursor-pointer'>Blog</li>
                                    <hr />
                                    <li className='py-3 hover:text-gray-800 cursor-pointer'>Contact</li>
                                    <hr />
                                    <li className='py-3 hover:text-gray-800 cursor-pointer'>TrustCare+ Business Contact</li>
                                    <hr />
                                    <li className='py-3 hover:text-gray-800 cursor-pointer'>Careers</li>
                                    <hr />
                                    <li className='pt-3 pb-8 hover:text-gray-800 cursor-pointer'>Our Phisicians</li>
                                </ul>
                            </div>

                            <div className='bg-gray-100 p-8 rounded-md shadow-2xl'>
                                <div className='rounded-md cursor-pointer hover:opacity-50'>
                                    <h1 className='bg-white py-4 text-4xl text-center'><span className='text-black font-semibold'>Health</span><span className='text-[#3fc2cd]'>Care</span></h1>
                                    <img className='w-full pb-4' src={advertize} alt="" />
                                </div>
                            </div>
                        </div>
                   
                </div>
                </section>
        </section>
    );
};

export default index;
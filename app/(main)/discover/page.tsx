import { Metadata } from 'next';
import Image from 'next/image'; // Import Image from next/image
import React from 'react';

export const metadata: Metadata = {
    title: 'Discover',
};

const Discover: React.FC = () => {
    return (
        <>
            <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0 top-16">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1 ">
                        <div className="w-full lg:justify-start justify-center items-start flex">
                            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-orange-500/20 rounded-3xl relative backdrop-blur-lg">

                                <Image
                                    className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                    src="/images/discover-3.jpg"
                                    alt="about Us image"
                                    width={564}
                                    height={646}
                                />
                            </div>
                        </div>
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex bg-black/70 p-12 rounded-3xl">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <h6 className="text-gray-400 text-base font-normal leading-relaxed">Discover</h6>
                                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                        <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                            The Tale of Our Achievement Story
                                        </h2>
                                        <p className="text-gray-100 text-base font-normal leading-relaxed lg:text-start text-center">
                                            Our achievement story is a testament to teamwork and perseverance. Together, we&lsquo;ve overcome challenges, celebrated victories, and created a narrative of progress and success.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex-col justify-center items-start gap-6 flex">
                                    <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-white text-2xl font-bold font-manrope leading-9">33+ Years</h4>
                                            <p className="text-gray-100 text-base font-normal leading-relaxed">Influencing Digital Landscapes Together</p>
                                        </div>
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-white text-2xl font-bold font-manrope leading-9">125+ Projects</h4>
                                            <p className="text-gray-100 text-base font-normal leading-relaxed">Excellence Achieved Through Success</p>
                                        </div>
                                    </div>
                                    <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-white text-2xl font-bold font-manrope leading-9">26+ Awards</h4>
                                            <p className="text-gray-100 text-base font-normal leading-relaxed">Our Dedication to Innovation Wins Understanding</p>
                                        </div>
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-white text-2xl font-bold font-manrope leading-9">99% Happy Clients</h4>
                                            <p className="text-gray-100 text-base font-normal leading-relaxed">Mirrors our Focus on Client Satisfaction.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-950">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
                        <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                        <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <Image width={100} height={300} className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                        <Image width={100} height={300} className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Discover;

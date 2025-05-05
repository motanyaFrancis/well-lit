import Image from 'next/image';

export interface ToolSectionProps {
    title: string;
    description: string;
    items: string[];
    imageSrc: string;
}

const ToolSection = ({ title, description, items, imageSrc }: ToolSectionProps) => (
    <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-20 md:px-32 lg:px-16">
            <div className="flex flex-wrap items-center -mx-3">
                <div className="w-full lg:w-1/2 px-3 order-1 lg:order-0">
                    <div className="lg:max-w-md">
                        <h2 className="text-black font-manrope text-4xl font-semibold leading-10 mb-5">{title}</h2>
                        <p className="text-gray-600 text-lg font-normal leading-7 mb-7">{description}</p>
                        <ul>
                            {items.map((item, index) => (
                                <li key={index} className="flex items-center py-2 space-x-4">
                                    <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                    </svg>
                                    <span className="text-gray-600 text-md font-normal leading-7 ">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Image section with fill layout */}
                <div className="w-full lg:w-1/2 px-3 mb-12 lg:mb-0 order-0 lg:order-1">
                    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                        <Image
                            src={imageSrc}
                            alt="feature graphic"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ToolSection;

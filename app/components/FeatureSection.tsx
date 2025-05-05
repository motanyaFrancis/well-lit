import Image from 'next/image';
export interface FeatureSectionProps {
    imageSrc: string;
    imagePosition: 'left' | 'right';
    title: string;
    description: string;
    bullets: string[];
}

const FeatureSection = ({
    imageSrc,
    imagePosition,
    title,
    description,
    bullets,
}: FeatureSectionProps) => {
    const imageElement = (
        <div className="w-full max-w-md px-4 mb-4 text-center md:max-w-none md:w-1/2">
            <Image src={imageSrc} alt={title} width={500}
                height={500} className="mx-auto" />
        </div>
    );

    const contentElement = (
        <div className="w-full md:w-1/2 md:px-10">
            <h2 className="text-black font-manrope text-4xl font-semibold leading-10 mb-5">{title}</h2>
            <p className="text-gray-600 text-lg font-normal leading-7 mb-7">{description}</p>
            <ul>
                {bullets.map((bullet, index) => (
                    <li key={index} className="flex items-center mb-2 text-gray-500">
                        <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white text-lg bg-yellow-300 rounded-full">
                            <span className="text-lg font-bold">✓</span>
                        </span>
                        {bullet}
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <section className="w-full bg-white py-10 md:py-20">
            <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-8 lg:px-16">
                {imagePosition === 'left' ? (
                    <>
                        {imageElement}
                        {contentElement}
                    </>
                ) : (
                    <>
                        {contentElement}
                        {imageElement}
                    </>
                )}
            </div>
        </section>
    );
};

export default FeatureSection;

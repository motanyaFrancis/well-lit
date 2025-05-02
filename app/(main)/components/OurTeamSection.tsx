import Image from 'next/image';
import Button from '@/app/(main)/components/ui/Button';

interface OurTeamSectionProps {
  [key: string]: never;
}

const OurTeamSection: React.FC<OurTeamSectionProps> = () => {
  return (
    <section className="py-12  bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
          <div className="w-full lg:w-1/2">
            <h2
              className="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7 text-center lg:text-left"
            >
              Our leading, strong & creative team
            </h2>
            <p className="text-lg text-gray-500 mb-16 text-center lg:text-left">These people work on making our
              product best.</p>
            <Button variant='primary' shape='full' size='lg' className=' font-semibold mx-auto '>
              Join Our Team
            </Button>

          </div>
          <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
            <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
              <Image
                src="https://pagedone.io/asset/uploads/1696238644.png"
                alt="Team member"
                className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
                width={176} // Approximate width (44 * 4)
                height={224} // Approximate height (56 * 4)
              />
              <Image
                src="https://pagedone.io/asset/uploads/1696238665.png"
                alt="Team member"
                className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto"
                width={176}
                height={224}
              />
              <Image
                src="https://pagedone.io/asset/uploads/1696238684.png"
                alt="Team member"
                className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0"
                width={176}
                height={224}
              />
              <Image
                src="https://pagedone.io/asset/uploads/1696238702.png"
                alt="Team member"
                className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto"
                width={176}
                height={224}
              />
              <Image
                src="https://pagedone.io/asset/uploads/1696238720.png"
                alt="Team member"
                className="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto"
                width={176}
                height={224}
              />
              <Image
                src="https://pagedone.io/asset/uploads/1696238737.png"
                alt="Team member"
                className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0"
                width={176}
                height={224}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
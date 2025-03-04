import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'About Us',
};

const teamMembers = [
  {
    name: "Smart N.",
    role: "Founder Well Lit Pictures",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Motanya N.",
    role: "External Developer",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Victor O.",
    role: "Lead Developer",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "July Nana",
    role: "Manager Well Lit Pictures",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

const About: React.FC = () => {
  return (
    <>
      <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0 top-16 mb-20">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1 ">
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-orange-500/20 rounded-3xl relative backdrop-blur-lg">

                <Image
                  className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src="/images/discover-1.jpg"
                  alt="about Us image"
                  width={564}
                  height={646}
                />
              </div>
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex bg-black/70 p-12 rounded-3xl">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      What do you Know?
                    </h2>
                    <p className="text-gray-100 text-base font-normal leading-relaxed lg:text-start text-center">
                      Our achievement story is a testament to teamwork and perseverance. Together, we&lsquo;ve overcome challenges, celebrated victories, and created a narrative of progress and success.
                    </p>
                    <p className="text-gray-100 text-base font-normal leading-relaxed lg:text-start text-center">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, cumque. Tempora, error quidem? Molestias ducimus maiores, consequatur veritatis fugiat fugit harum, repellat nam dicta, natus dolor ea adipisci ut assumenda.
                    </p>
                    <p className="text-gray-100 text-base font-normal leading-relaxed lg:text-start text-center">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, cumque. Tempora, error quidem? Molestias ducimus maiores, consequatur veritatis fugiat fugit harum, repellat nam dicta, natus dolor ea adipisci ut assumenda.
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, cumque. Tempora, error quidem? Molestias ducimus maiores, consequatur veritatis fugiat fugit harum, repellat nam dicta, natus dolor ea adipisci ut assumenda.
                    </p>
                  </div>
                </div>
                
              </div>

            </div>

          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-medium text-gray-900 dark:text-white">Our Team</h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Unlimited Creativity With Our Professional Team
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`flex items-center shadow-lg ${index % 2 === 1 ? 'border-r' : ''} ${index >= teamMembers.length - 2 ? 'border-b' : ''} border-gray-300 dark:border-gray-700 ${index === 0 ? 'bg-orange-500 dark:bg-orange-500' : ''} ${index === teamMembers.length - 1 ? 'bg-sky-700' : 'bg-white dark:bg-gray-950'}`}
              >
                <Image src={member.image} alt={member.name} width={250} height={350} className="min-h-[350px] w-[250px] h-[100%] object-cover" />
                <div className="mx-auto">
                  <h3 className="text-4xl font-normal text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-gray-500 dark:text-gray-100">{member.role}</p>
                  <div className="mt-3 flex space-x-3 text-gray-600 dark:text-gray-100">
                    <a href={member.social.twitter} className="hover:text-blue-500">
                      <FaXTwitter size={20} />
                    </a>
                    <a href={member.social.linkedin} className="hover:text-blue-700">
                      <FaLinkedin size={20} />
                    </a>
                    <a href={member.social.github} className="hover:text-gray-900 dark:hover:text-white">
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

import { Metadata } from 'next';
import React from 'react';
import AboutMe from "@/app/(main)/components/AboutMe"
import OurTeam from "@/app/(main)/components/OurTeamSection"


export const metadata: Metadata = {
  title: 'About Us',
};

const About: React.FC = () => {
  return (
    <>
      <div className='container_body'>
        <div>
          <AboutMe />
          <OurTeam />
        </div>
      </div>
    </>
  );
};

export default About;

import AboutMe from "@/app/components/AboutMe";
import OurTeam from "@/app/components/OurTeamSection";
import { Metadata } from 'next';
import React from 'react';

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

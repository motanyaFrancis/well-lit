import { Metadata } from 'next';
import React from 'react';
import AboutUs from "@/app/(main)/components/AboutUsSection"
import OurTeam from "@/app/(main)/components/OurTeamSection"


export const metadata: Metadata = {
  title: 'About Us',
};

const About: React.FC = () => {
  return (
    <>
    <div className='container_body'>
      <AboutUs />
      <OurTeam />
    </div>
    </>
  );
};

export default About;

import React from 'react';
import { Metadata } from 'next';
import Contact from '@/app/(main)/components/ContactUs'

export const metadata: Metadata = {
  title: 'Contact Us',
};

const ContactUS: React.FC = () => {
  return (
    <>
      <div className='container_body'>
        <div>
          <Contact />
        </div>
      </div>

    </>
  );
};

export default ContactUS;

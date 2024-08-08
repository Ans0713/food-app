import React from 'react';
import { FaPhone } from 'react-icons/fa'; // Correct import for FaPhone
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

export const Footer = () => {
  return (
    <div id="footer" className="bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl text-white mt-20">
      <div data-aos="fade-down" className="container py-10">
        <h1 className="text-3xl font-bold text-yellow text-center mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <IoLocationSharp className="text-5xl" />
            </div>
            <p>
              #412, Sector-4, Jagadari Gate
              <br />
              Punchkula, Punjab 132006
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <MdEmail className="text-5xl" />
            </div>
            <div>
              <p>hello@goodfood.com</p>
              <p>info@goodfood.com</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <FaPhone className="text-5xl" />
            </div>
            <p>+91 9876539273 - Sales and Services</p>
            <p>+91 7839474958 - Queries</p>
            <p>+91 8949338393 - WhatsApp</p>
          </div>
        </div>
        <div className="flex justify-between p-4 items-center">
          <p>2024 GoodFood. All rights reserved</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

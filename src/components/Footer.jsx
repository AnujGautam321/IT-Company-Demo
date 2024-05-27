import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-brandPrimary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
            <h5 className="text-xl font-bold mb-2">About Us</h5>
            <p className="text-[#F5F5F5]">We are a leading IT company providing top-notch solutions for your business needs. Our expertise includes software development, IT consulting, and more.</p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
            <h5 className="text-xl font-bold mb-2">Quick Links</h5>
            <ul className="text-[#F5F5F5]">
              <li><Link to="home" spy={true}
                smooth={true}
                offset={-100} className="hover:underline hover:cursor-pointer">Home</Link></li>
              <li><Link to="about" spy={true}
                smooth={true}
                offset={-100} className="hover:underline hover:cursor-pointer">About</Link></li>
              <li><Link to="service" spy={true}
                smooth={true}
                offset={-100} className="hover:underline hover:cursor-pointer">Services</Link></li>
              <li><Link to="contact" spy={true}
                smooth={true}
                offset={-100} className="hover:underline hover:cursor-pointer">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
            <h5 className="text-xl font-bold mb-2">Contact Us</h5>
            <ul className="text-[#F5F5F5]">
              <li>Email: amazing@gmail.com</li>
              <li>Phone: +9779865456788</li>
              <li>Address: Baneswor, Kathmandu</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-600">&copy; 2024 Amazing IT Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

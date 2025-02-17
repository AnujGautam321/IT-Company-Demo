import React, { useState, useEffect } from "react";
import logo from "../assets/bird.avif";
import { Link } from "react-scroll";


//react icons
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  //navitems array
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "AboutUs", path: "aboutus" },
    { link: "Testimonial", path: "testimonial" },
    { link: "Contact", path: "contact" },
  ];
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a href="" className="text-2xl font-semibold flex items-center">
            <img
              src={logo}
              alt="Shree Ram Logo"
              className="w-20 inline-block items-center"
            />
            <span className="text-[#263238]">Amazing IT Solutions</span>
          </a>

          {/* nav items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-gray900 hover:text-brandPrimary first:font-medium"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* menu btn for only mobile devices */}
          <div className="md:hidden">
            <button
            onClick={toggleMenu}
             className="text-neutralDGrey focus:outline-none focus:text-gray-500">
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>

        {/* nav items for mobile devices */}
        <div className={`space-y-4 px-4 mt-20 py-7 bg-brandPrimary ${ isMenuOpen ? "block fixed top-2 right-0 left-0" : "hidden"}`}>
        {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-white hover:text-neutralDGrey first:font-medium"
              >
                {link}
              </Link>
            ))}
        </div>
      </nav>

    </header>
  );
};

export default Navbar;

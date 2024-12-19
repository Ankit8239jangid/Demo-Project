import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle function to open and close the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-600 border-b-2">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="text-white text-3xl font-semibold p-10">
              MyApp
            </NavLink>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white text-3xl focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className="text-white hover:bg-blue-700 px-4 py-2 rounded-md text-lg font-medium transition-all duration-300"
            >
              TODO
            </NavLink>
            <NavLink
              to="/employee"
              className="text-white hover:bg-blue-700 px-4 py-2 rounded-md text-lg font-medium transition-all duration-300"
            >
              Employee
            </NavLink>
            <NavLink
              to="/"
              className="text-white hover:bg-blue-700 px-4 py-2 rounded-md text-lg font-medium transition-all duration-300"
            >
              Services
            </NavLink>
            <NavLink
              to="/"
              className="text-white hover:bg-blue-700 px-4 py-2 rounded-md text-lg font-medium transition-all duration-300"
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden flex flex-col items-center space-y-4 mt-4 transition-all duration-300 ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <NavLink
            to="/"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded-md text-lg font-medium transition-all duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded-md text-lg font-medium transition-all duration-300"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded-md text-lg font-medium transition-all duration-300"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded-md text-lg font-medium transition-all duration-300"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

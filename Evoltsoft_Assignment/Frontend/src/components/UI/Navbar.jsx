import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="https://img.freepik.com/premium-vector/ev-with-plug-icon-symbol-electric-vehicle-charging-point-logotype-eco-friendly-vehicle-concept_32996-2113.jpg"
              alt="EV Logo"
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-emerald-600 hidden sm:block">
              EV ChargeUp
            </span>
          </NavLink>

          {/* Navigation Links */}
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-emerald-600 font-semibold" : "hover:text-emerald-500"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-emerald-600 font-semibold" : "hover:text-emerald-500"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/stations"
              className={({ isActive }) =>
                isActive ? "text-emerald-600 font-semibold" : "hover:text-emerald-500"
              }
            >
              Stations
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-emerald-600 font-semibold" : "hover:text-emerald-500"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-emerald-600 font-semibold" : "hover:text-emerald-500"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-emerald-600 font-semibold" : "hover:text-emerald-500"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <NavLink
              to="/login"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-md text-sm font-medium"
            >
              Register
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-emerald-600 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

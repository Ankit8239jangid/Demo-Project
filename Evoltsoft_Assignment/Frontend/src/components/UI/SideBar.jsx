import React, { useContext, useState } from 'react';
import { FaHome, FaMapMarkerAlt, FaPlus, FaCog, FaBars, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const menuItems = [
    { label: 'Dashboard', icon: <FaHome />, key: 'dashboard', link: '/app' },
    { label: 'Map View', icon: <FaMapMarkerAlt />, key: 'map', link: '/app/Map' },
    { label: 'Add Charger', icon: <FaPlus />, key: 'add', link: '/app/add' },
    // { label: 'Settings', icon: <FaCog />, key: 'settings', }
];

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const { handleLogOut } = useContext(AuthContext);

    return (
        <>
            {/* Hamburger for small screens */}
            <div className="lg:hidden p-4 flex items-center justify-between bg-white shadow-md fixed w-full z-[9999]">
                <FaBars size={24} onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />
            </div>

            {/* Sidebar */}
            <div
                className={`bg-[#f9fcfb] w-64 h-screen p-2 fixed z-[9999] top-0 left-0 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:relative lg:block`}
            >
                {/* Top Section */}
                <div>
                    <div className="flex items-center mb-10 gap-2">
                        <FaBars size={24} onClick={() => setIsOpen(!isOpen)} className="cursor-pointer lg:hidden" />
                        <img
                            src="https://img.freepik.com/premium-vector/ev-with-plug-icon-symbol-electric-vehicle-charging-point-logotype-eco-friendly-vehicle-concept_32996-2113.jpg"
                            alt="EV Logo"
                            className="h-12 w-auto"
                        />
                        <span className="text-lg font-semibold">ChargePoint</span>
                    </div>

                    {/* Menu */}
                    <nav className="space-y-2">
                        {menuItems.map((item) => (
                            <NavLink
                                to={item.link}
                                key={item.key}
                                onClick={() => setIsOpen(false)} // Close sidebar on mobile
                                className={({ isActive }) =>
                                    `flex items-center space-x-3 px-4 py-2 rounded-full transition cursor-pointer
                  ${isActive ? 'bg-[#ecf7f1] text-black font-semibold' : 'text-gray-700 hover:bg-gray-100'}`
                                }
                            >
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                            </NavLink>
                        ))}
                    </nav>
                </div>
                {/* Bottom Section */}
                <button
                    onClick={handleLogOut}
                    className={` p-2 gap-4 ml-3 flex items-center justify-center font-semibold mt-64 rounded-full transition-all duration-300 bg-red-100 text-red-600 hover:bg-red-200`}
                    aria-label="Logout"
                >
                    <FaSignOutAlt className="w-4 h-4" />
                    Logout

                </button>
            </div>

            {/* Overlay for mobile when sidebar is open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default SideBar;

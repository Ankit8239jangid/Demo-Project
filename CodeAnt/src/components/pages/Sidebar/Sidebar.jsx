import React, { useState } from "react";
import { FiHome } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { TbCloudExclamation } from "react-icons/tb";
import { FaBook } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import logo1 from '/logo1.png'

const Buttons = [
  { id: 11, name: "Repositories", icon: <FiHome /> },
  { id: 12, name: "AI Code Review", icon: <FaCode /> },
  { id: 13, name: "Cloud Security", icon: <TbCloudExclamation /> },
  { id: 14, name: "How to Use", icon: <FaBook /> },
  { id: 15, name: "Settings", icon: <IoSettingsOutline /> },
];

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (

    <div className=" bg-gray-50 md:w-64 md:h-screen w-96  p-6 border-r border-gray-200">

      <div className="flex gap-3">
       <img className="h-8 w-8" src={logo1} alt="" />
        <h1 className="text-2xl font-bold mb-8">CodeAnt AI</h1>
      </div>

      {/* ................................................................... */}

      <div className=" flex flex-col  justify-end">

        <div className="text-center p-1 rounded-xl w-full border-[1.5px]">
          <select
            className="w-full bg-transparent text-black focus:outline-none cursor-pointer"
            onChange={handleChange}
            value={selectedOption}
          >
            <option className="bg-gray-100 text-black" value="option1">
              Utkarsh Dhairya
            </option>
            <option className="bg-gray-100 text-black" value="option2">
              Ankit Jangid
            </option>
            <option className="bg-gray-100 text-black" value="option3">
              Ritash Tok
            </option>
          </select>
        </div>

        {/* ................................................................... */}

        <div className="text-black mt-3">
          {Buttons.map((button) => (
            <NavLink
              to={'/repositories'}
              key={button.id}
              className={`flex items-center py-2 px-2 w-1/2 md:w-full rounded-xl gap-4 font-semibold cursor-pointer ${button.name === "Repositories"
                  ? "bg-blue-600 text-white"
                  : ""
                }`}
            >
              <span>{button.icon}</span>
              {button.name}
            </NavLink>
          ))}
        </div>





        {/* ....................NaveBar bottom buttom..................................... */}

        <div className=" md:mt-40 mt-0 text-black  ">
          <NavLink to={''} className="flex items-center  py-1 px-2 w-1/2 md:w-full   rounded-xl gap-4 font-semibold cursor-pointer" >
            <IoCallOutline />
            Support
          </NavLink>
          <NavLink to={'/'} className="flex items-center hover:bg-red-600 hover:text-white  py-1 px-2 w-1/2 md:w-full  rounded-xl gap-4 font-semibold cursor-pointer" >
            <FiLogOut />
            Logout
          </NavLink>

        </div>

      </div>
    </div>
  );
};

export default Sidebar;

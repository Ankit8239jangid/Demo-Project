import React from "react";
import { useAppContext } from "../../../contexts/AppContext";
import image1 from '/image1.png';
import { FaArrowUp } from "react-icons/fa";
import logo1 from '/logo1.png'
import logo2 from '/logo2.svg'
function LeftSection() {
    const {Left_Auth_Page_Data} = useAppContext()
    return (
        // main container  Wraper
        <div className=" relative flex flex-col items-center justify-center gap-24 h-full bg-white ">

            {/* main container  */}
            <div className=" relative bottom-16 w-full max-w-md">

                <div className=" flex flex-col items-center bg-white rounded-2xl p-3 shadow-[0_0_16px_rgba(0,0,0,0)] shadow-zinc-400 ">
                    <div className=" flex gap-2 justify-center border-b-[1px] mb-4">
                      <img className="h-8 w-8" src={logo1} alt="" />

                        <h1 className="text-xl font-bold mb-4">{Left_Auth_Page_Data.title}</h1>
                    </div>

                    <div className="flex gap-6 justify-center items-center">
                        {Left_Auth_Page_Data.statistics.slice(0,3).map((stat, index) => (
                            <div key={index} className="mb-4 flex flex-col items-center">
                                <p className="text-black font-bold text-lg mb-2">{stat.value}</p>
                                <p className="text-black text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                </div>


                {/* second card into the left section */}
                <div className="absolute left-64 top-36 w-1/2 shadow-[0_0_15px_rgba(0,0,0,0)] shadow-zinc-400 bg-white rounded-2xl p-6">
                    <div className="flex justify-between">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#9D90FA40]">
                            <img className="h-1/2 w-1/2" src={image1} alt="Description of Image" />
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="">
                                <div className="text-blue-700 font-medium"></div>
                                <div className="text-blue-700 gap-2 font-medium flex items-center"> {<FaArrowUp />} 14%</div>
                            </div>
                            <div className=" ">  This week</div>
                        </div>
                    </div>
                    <p className="text-black font-semibold text-lg">
                        Issues Fixed
                    </p>
                    <p className="text-2xl font-bold">{Left_Auth_Page_Data.value}</p> {/* 500K+ */}
                </div>

            </div>

            <div className=" absolute text-center bottom-0 left-0">
              <img className="" src={logo2} alt="" />
            </div>

        </div>
    );
}

export default LeftSection;

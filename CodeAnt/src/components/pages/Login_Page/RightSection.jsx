import React, { useState } from "react";
import { useAppContext } from "../../../contexts/AppContext";
import { NavLink } from "react-router-dom";
import logo1 from "/logo1.png";

function RightSection() {
    const { Right_Auth_Page_Data } = useAppContext();
    const [isSAAS, setIsSAAS] = useState(true); // Default to SAAS

    return (
        <div className="flex flex-col justify-center h-screen items-center bg-[#FAFAFA] px-6">
            {/* Main Card */}
            <div
                className="w-full max-w-md bg-white border rounded-xl shadow-md"
                style={{ minHeight: "500px" }} // Set consistent min-height
            >
                {/* Header Section */}
                <div className="flex flex-col items-center border-b pb-4 pt-3">
                    <div className="flex gap-2 items-center justify-center">
                        <img className="h-8 w-8" src={logo1} alt="CodeAnt AI Logo" />
                        <h1 className="text-2xl font-bold">CodeAnt AI</h1>
                    </div>
                    <h2 className="text-3xl font-bold mb-3 text-center">
                        {Right_Auth_Page_Data.title}
                    </h2>
                    {/* Toggle Buttons */}
                    <div className="flex gap-4 md:gap-6">
                        <button
                            onClick={() => setIsSAAS(true)}
                            className={`w-36 py-2 rounded-lg text-lg font-medium ${isSAAS
                                    ? "bg-blue-500 text-white"
                                    : "border border-blue-500 text-blue-500"
                                }`}
                        >
                            SAAS
                        </button>
                        <button
                            onClick={() => setIsSAAS(false)}
                            className={`w-36 py-2 rounded-lg text-lg font-medium ${!isSAAS
                                    ? "bg-blue-500 text-white"
                                    : "border border-blue-500 text-blue-500"
                                }`}
                        >
                            Self Hosted
                        </button>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col items-center w-full py-4 px-6 space-y-4">
                    {(
                        isSAAS
                            ? Right_Auth_Page_Data.imageData
                            : Right_Auth_Page_Data.imageData2
                    ).map((item) => (
                        <NavLink
                            to="/repositories"
                            key={item.id}
                            className="flex items-center gap-4 w-full md:w-3/4 lg:w-2/3 p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300"
                        >
                            <img src={item.src} alt={item.alt} className="h-6 w-6" />
                            <span className="text-sm font-medium">
                                Sign in with {item.alt}
                            </span>
                        </NavLink>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <p className="mt-3 text-gray-500 text-sm text-center">
                By signing up, you agree to the{" "}
                <a href="#" className="text-blue-500 hover:underline">
                    Privacy Policy
                </a>
                .
            </p>
        </div>
    );
}

export default RightSection;

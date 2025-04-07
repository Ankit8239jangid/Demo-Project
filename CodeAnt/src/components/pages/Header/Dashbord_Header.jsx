import React from "react";
import { useAppContext } from "../../../contexts/AppContext";
import { FiRefreshCw } from "react-icons/fi";

const Dashbord_Header = () => {
  const { repositories } = useAppContext();

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:rounded-t-2xl rounded-none bg-white md:py-4 py-0  px-4 gap-2">
      {/* Left Section */}
      <div>
        <h2 className="text-xl font-bold">Repositories</h2>
        <p>{repositories.length} total repositories</p>
      </div>

      {/* Right Section */}
      <div className="flex gap-4 md:justify-end md:flex-row flex-col w-1/2 md:w-auto">
        <button className="flex items-center gap-2 text-black px-3 py-1 rounded-lg border-[1.7px] w-full md:w-auto">
          <FiRefreshCw /> Refresh All
        </button>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 w-full md:w-auto">
          + Add Repository
        </button>
      </div>
    </div>
  );
};

export default Dashbord_Header;

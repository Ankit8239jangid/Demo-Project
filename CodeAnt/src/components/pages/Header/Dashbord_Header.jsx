import React from "react";
import { useAppContext } from "../../../contexts/AppContext";

const Dashbord_Header = () => {
  const { repositories } = useAppContext(); 

  return (
    <div className="flex items-center justify-between md:rounded-t-2xl rounded-none bg-white border-b border-gray-200 p-4">
      <div className="">
      <h2 className="text-xl font-bold">Repositories</h2>
      <p>{repositories.length} total repositories</p>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        + Add Repository
      </button>
    </div>
  );
};

export default Dashbord_Header;

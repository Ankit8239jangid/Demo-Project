import React from "react";
import { useAppContext } from "../../../contexts/AppContext";
import { GrStorage } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

const Repositories = () => {
  const { repositories } = useAppContext();

  return (
    <div className="mx-4 mt-2 md:rounded-xl rounded-none h-full">
      {/* Search Bar */}
      <div className="relative flex items-center border-b-[1px] pb-2 mb-2">
        <span className="absolute ml-2 text-gray-500">{<CiSearch />}</span>
        <input
          type="text"
          placeholder="Search Repositories"
          className="text-black border-[1.5px] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-10 py-2 w-full md:w-1/3"
        />
      </div>

      {/* Repository List */}
      <div className="space-y-4 mt-1 h-[calc(100vh-220px)] md:h-[calc(100vh-250px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {repositories.map((repo, index) => (
          <div
            key={index}
            className="border rounded-lg p-3 flex flex-col gap-4 items-start hover:shadow-md transition-shadow duration-200"
          >
            {/* Repo Name and Type */}
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold">{repo.name}</h3>
              <span className="text-blue-600 px-2 py-1 text-sm border border-blue-300 rounded-xl">
                {repo.type}
              </span>
            </div>

            {/* Repo Details */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
              <p className="flex items-center gap-1">
                {repo.language} <GoDotFill className="text-blue-800" />
              </p>
              <div className="flex items-center gap-2">
                <GrStorage />
                <p>{repo.size}</p>
              </div>
              <p>{repo.updated}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repositories;

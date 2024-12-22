import React from "react";
import { useAppContext } from "../../../contexts/AppContext";
import { GrStorage } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";

const Repositories = () => {
  const { repositories } = useAppContext();

  return (
    <div className="mx-4 mt-2 md:rounded-xl rounded-none h-full ">
      <div className="relative flex items-center border-b-[1px] pb-1">
        <span className="absolute ml-2">{<CiSearch />}</span>
        <input
          type="text"
          placeholder="Search Repositories"
          className="text-black border-[1.5px] rounded-lg px-10 py-2 md:w-1/3 w-full"
        />
      </div>
      <div className="space-y-4 mt-1 h-[calc(100vh-200px)] overflow-y-scroll">
        {repositories.map((repo, index) => (
          <div
            key={index}
            className="border rounded-lg p-3 flex gap-20 items-center hover:shadow-md"
          >
            <div>
              <div className="flex gap-3 items-center">
                <h3 className="text-lg font-semibold mb-1">{repo.name}</h3>
                <span className="text-[#175CD3] px-1 text-sm border-[1px] border-[#B2DDFF] rounded-xl">
                  {repo.type}
                </span>
              </div>
              <div className="flex gap-10 text-sm text-gray-500">
                <p>{repo.language}</p>
                <div className="flex gap-2 items-center">
                  <span>{<GrStorage />}</span>
                  <p>{repo.size}</p>
                </div>
                <p>{repo.updated}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repositories;

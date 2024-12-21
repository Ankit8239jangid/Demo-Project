import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Repositories from "../Repositories/Repositories";
import Dashbord_Header from "../Header/Dashbord_Header";

const Dashboard = () => {
  return (
    <div className="flex h-screen w-full ">
      <Sidebar />

      <div className="flex-1 h-full bg-slate-100 ">
        <div className="p-3 h-full overflow-hidden  bg-[#FFFFFF] border-[1px] rounded-2xl">
          <Dashbord_Header />
            <Repositories />
     

        </div>
      </div>
    </div>
  );
};

export default Dashboard;

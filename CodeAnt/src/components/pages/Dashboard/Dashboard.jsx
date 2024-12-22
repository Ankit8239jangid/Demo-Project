import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Repositories from "../Repositories/Repositories";
import Dashbord_Header from "../Header/Dashbord_Header";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo1 from '/logo1.png'

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full transition-transform duration-300 z-50 lg:static lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full bg-slate-100 overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white p-4 flex items-center justify-between border-b">
          <div className=" flex items-center gap-2">
            <img className="h-8 w-8" src={logo1} alt="" />
            <h1 className="text-2xl font-bold">CodeAnt AI</h1>
          </div>

          {/* Toggle Sidebar Button */}
          <button
            className="absolute right-5 z-50 text-2xl p-2 rounded-full text-black font-bold"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </header>

        {/* Main Dashboard Content */}
        <section className="md:m-6 m-0 rounded-2xl overflow-hidden h-full bg-white border">
          <Dashbord_Header />
          <Repositories />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

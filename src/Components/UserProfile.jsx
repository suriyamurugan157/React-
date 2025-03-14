import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineLeft, AiFillCaretDown } from "react-icons/ai";
import { FaTruckFast } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsBuilding } from "react-icons/bs";
import { TbMapPin2 } from "react-icons/tb";
import { PiUsersThreeFill } from "react-icons/pi";
import { MdInsertChartOutlined } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";



const UserProfile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Users");


  return (
    <div className="flex  bg-white w-[100vw] overflow-y-auto">
      {/* Sidebar */}
      <aside className="w-30 bg-violet-100  p-5 flex flex-col">
        <h2 className="text-2xl font-bold mb-2 "><img
          src="/Lgo 1.png"
          alt="Profile"
          className="w-[75%] h-8  object-cover  mt-[0.5%]"
        /></h2>
        <nav className="space-y-2 mt-[20%]">
          {[
            { name: "Dashboard", icon: <LuLayoutDashboard /> },
            { name: "Transporters", icon: <FaTruckFast /> },
            { name: "Institutions", icon: <BsBuilding /> },
            { name: "Trip Details", icon: <TbMapPin2 />, path: "/trip-details" },
            { name: "Users", icon: <PiUsersThreeFill /> }, // 
            { name: "Reports", icon: <MdInsertChartOutlined /> },
            { name: "Track Status", icon: <FaChartLine /> },
          ].map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center space-x-3 p-2 transition ${activeTab === item.name
                  ? "bg-purple-950 text-white" 
                  : "text-purple-900 hover:bg-purple-950 hover:text-white"
                }`}
                onClick={() => {
                  setActiveTab(item.name);
                  if (item.path) navigate(item.path); // ✅ Navigate if path exists
                }}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className=" flex-1 bg-white shadow-md">
        {/* Top Navbar */}
        <div className="bg-purple-950 p-3 flex justify-end items-center">
          <img
            src="/profile hack.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover mr-7"
          />
        </div>

        <main className="p-4">
          {/* Header */}
          <div className="flex items-center space-x-1 text-blue-900">
            <AiOutlineLeft className="ml-7 text-xl font-bold" />
            <h1 className="text-xl font-semibold">View User</h1>
          </div>

          {/* Profile Picture Upload */}
          <div className="mt-4 border-2 border-dashed border-gray-300 p-5 flex items-center mx-auto w-[95%] text-gray-500 rounded-none">
            <img
              src="/profile 1.jpg"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover ml-5 border-2 border-orange-400"
            />
            <p className="ml-8">Drag and drop to upload a Profile Picture</p>
          </div>

          {/* Form Section */}
          <form className="mt-6  mx-auto grid grid-cols-3 gap-x-5 gap-y-6 font-manrope">
            {/* First Name */}
            <div>
              <label className=" ml-[8%] block text-black text-left">First Name *</label>
              <input
                type="text"
                defaultValue="Vasanth"
                className="w-[70%] ml-[8%] mt-1 p-3 text-gray-500  border border-gray-200 text-xl font-manrope"

              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block ml-[15%] text-black text-left">Last Name *</label>
              <input
                type="text"
                defaultValue="eee"
                className="w-[70%] ml-[15%] mt-1 p-3 text-gray-500 border border-gray-200"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block ml-[22%] text-black text-left">Mobile Number *</label>
              <input
                type="text"
                defaultValue="+91 432143214"
                className="w-[70%] ml-[22%] mt-1 p-3 text-gray-500 border border-gray-200 "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block ml-[8%] text-black text-left">Email *</label>
              <input
                type="email"
                defaultValue="vasanth+5@venzotechnologies.com"
                className="w-[70%] ml-[8%] mt-1 p-3 text-gray-500 border border-gray-200 "

              />
            </div>



            {/* Role */}
            <div className="relative w-[70%] ml-[15%]">
              <label className="block text-black text-left">Role *</label>

              <div className="relative">
                <select className="w-full mt-1 p-3 text-black border border-gray-200 appearance-none pr-10">
                  <option>Admin</option>
                  <option>User</option>
                  <option>Manager</option>
                </select>
                <AiFillCaretDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* District */}
            <div className="relative w-[70%] ml-[22%]">
              <label className="block text-black text-left">District *</label>

              <div className="relative">
                <select className="w-full mt-1 p-3 text-black border border-gray-200 appearance-none pr-10">
                  <option>Cuddalore</option>
                  <option>Chennai</option>
                  <option>Madurai</option>
                </select>
                <AiFillCaretDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Zone */}
            <div className="relative w-[70%] ml-[8%]">
              <label className="block text-black text-left">Zone *</label>

              <div className="relative">
                <select className="w-full mt-1 p-3 text-black border border-gray-200 appearance-none pr-10">
                  <option>East</option>
                  <option>West</option>
                  <option>North</option>
                  <option>South</option>
                </select>

                {/* Custom Arrow Icon */}
                <AiFillCaretDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

          </form>

          {/* Buttons */}
          <div className="mt-20 flex space-x-4">
            <button className="bg-white text-orange-500 ml-11  px-6 py-2 rounded-none border-orange-500 hover:bg-red-100 font-manrope">
              Cancel
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-none hover:bg-orange-600 font-manrope">
              Edit
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;

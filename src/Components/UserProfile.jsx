import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { FaTruckFast } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsBuilding } from "react-icons/bs";
import { TbMapPin2 } from "react-icons/tb";
import { PiUsersThreeFill } from "react-icons/pi";
import { MdInsertChartOutlined } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";


const UserProfile = () => {
  return (
    <div className="flex h-screen bg-gray-100 w-[100vw] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-30 bg-violet-100  p-5 flex flex-col">
        <h2 className="text-2xl font-bold mb-2 mt-"><img
          src="/Lgo 1.png"
          alt="Profile"
          className="w-20 h-8  object-cover ml-[1%] mt-[0.5%]"
        /></h2>
        <nav className="space-y-3 mt-5">
          <a href="#" className="flex items-center space-x-3 p-2 text-blue-900 hover:text-white hover:bg-blue-950 transition">
            <LuLayoutDashboard className="text-xl" /> <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 text-blue-900 hover:text-white hover:bg-blue-950 transition">
            <FaTruckFast className="text-xl" /> <span>Transporters</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 text-blue-900 hover:text-white hover:bg-blue-950 transition">
            <BsBuilding className="text-xl" /> <span>Institutions</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 text-blue-900 hover:text-white hover:bg-blue-950 transition">
            <TbMapPin2 className="text-xl" /> <span>Trip Details</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 text-blue-900 hover:text-white hover:bg-blue-950 transition">
            <PiUsersThreeFill className="text-xl" /> <span>Users</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 text-blue-900 hover:text-white hover:bg-blue-950 transition">
            <MdInsertChartOutlined className="text-xl" /> <span>Reports</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 text-blue-900 hover:text-white hover:bg-blue-950 transition">
            <FaChartLine className="text-xl" /> <span>Track Status</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 bg-white shadow-md">
        {/* Top Navbar */}
        <div className="bg-purple-900 p-3 flex justify-end items-center">
          <img
            src="/profile hack.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover mr-7"
          />
        </div>

        <main className="p-6">
          {/* Header */}
          <div className="flex items-center space-x-1 text-blue-900">
            <AiOutlineLeft className="ml-5 text-xl font-bold" />
            <h1 className="text-xl font-semibold">View User</h1>
          </div>

          {/* Profile Picture Upload */}
          <div className="mt-3 border-2 border-dashed border-gray-300 p-5 flex items-center mx-auto w-[90%] text-gray-500 rounded-none">
            <img
              src="/profile 1.jpg"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover ml-5 border-2 border-orange-400"
            />
            <p className="ml-8">Drag and drop to upload a Profile Picture</p>
          </div>

          {/* Form Section */}
          <form className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6">
            {/* First Name */}
            <div>
              <label className="block text-gray-700 text-left">First Name *</label>
              <input
                type="text"
                value="Vasanth"
                className="w-full mt-1 p-2 border rounded bg-gray-100"
                disabled
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-700 text-left">Last Name *</label>
              <input
                type="text"
                value="eee"
                className="w-full mt-1 p-2 border rounded bg-gray-100"
                disabled
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 text-left">Email *</label>
              <input
                type="email"
                value="vasanth+5@venzotechnologies.com"
                className="w-full mt-1 p-2 border rounded bg-gray-100"
                disabled
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-gray-700 text-left">Mobile Number *</label>
              <input
                type="text"
                value="+91 432143214"
                className="w-full mt-1 p-2 border rounded bg-gray-100"
                disabled
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-gray-700 text-left">Role *</label>
              <select className="w-full mt-1 p-2 border rounded bg-white">
                <option>Admin</option>
                <option>User</option>
                <option>Manager</option>
              </select>
            </div>

            {/* District */}
            <div>
              <label className="block text-gray-700 text-left">District *</label>
              <select className="w-full mt-1 p-2 border rounded bg-white">
                <option>Cuddalore</option>
                <option>Chennai</option>
                <option>Madurai</option>
              </select>
            </div>

            {/* Zone */}
            <div>
              <label className="block text-gray-700 text-left">Zone *</label>
              <select className="w-full mt-1 p-2 border rounded bg-white">
                <option>East</option>
                <option>West</option>
                <option>North</option>
                <option>South</option>
              </select>
            </div>
          </form>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-white text-orange-500 px-6 py-2 rounded-none border-orange-500 hover:bg-red-600">
              Cancel
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-none hover:bg-orange-600">
              Edit
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;

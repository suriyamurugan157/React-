import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const UserProfile = () => {
  return (
    <div className="flex h-screen bg-gray-100 w-[100vw]">
      {/* Sidebar */}
      <aside className="w-50 bg-violet-50 text-white p-5 flex flex-col ">
        <h2 className="text-2xl font-bold mb-6"><img
            src="/Logo.png"
            alt="Profile"
            className="w-13 h-10  object-cover ml-5"
          /></h2>
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-3 p-2 hover:bg-purple-700 rounded">
            <span>🏠 Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 hover:bg-purple-700 rounded">
            <span>🚛 Transporters</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 hover:bg-purple-700 rounded">
            <span>🏢 Institutions</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 hover:bg-purple-700 rounded">
            <span>📋 Trip Details</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 bg-purple-700 rounded">
            <span>👤 Users</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 hover:bg-purple-700 rounded">
            <span>📊 Reports</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 hover:bg-purple-700 rounded">
            <span>📌 Track Status</span>
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

        <main className="p-3">
          {/* Header */}
          <div className="flex items-center space-x-3 text-blue-900">
            <AiOutlineLeft className=" text-blue-800" />
            <h1 className="text-xl font-semibold">View User</h1>
          </div>

          {/* Profile Picture Upload */}
          <div className="mt-3 border-2 border-dashed border-gray-300 p-3 text-left-centre text-gray-500 rounded-none">
          <img
            src="/profile 1.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover ml-5"
          />
            <p>Drag and drop to upload a Profile Picture</p>
          </div>

          {/* Form Section */}
          <form className="mt-6 grid grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-gray-700">First Name *</label>
              <input
                type="text"
                value="Vasanth"
                className="w-full mt-1 p-2 border rounded bg-white"
                disabled
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-700">Last Name *</label>
              <input
                type="text"
                value="eee"
                className="w-full mt-1 p-2 border rounded bg-white"
                disabled
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700">Email *</label>
              <input
                type="email"
                value="vasanth+5@venzotechnologies.com"
                className="w-full mt-1 p-2 border rounded bg-white"
                disabled
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-gray-700">Mobile Number *</label>
              <input
                type="text"
                value="+91 432143214"
                className="w-full mt-1 p-2 border rounded bg-gray-100"
                disabled
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-gray-700">Role *</label>
              <select className="w-full mt-1 p-2 border rounded bg-white">
                <option>Admin</option>
                <option>User</option>
                <option>Manager</option>
              </select>
            </div>

            {/* District */}
            <div>
              <label className="block text-gray-700">District *</label>
              <select className="w-full mt-1 p-2 border rounded bg-white">
                <option>Cuddalore</option>
                <option>Chennai</option>
                <option>Madurai</option>
              </select>
            </div>

            {/* Zone */}
            <div>
              <label className="block text-gray-700">Zone *</label>
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
            <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
              Cancel
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
              Edit
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;

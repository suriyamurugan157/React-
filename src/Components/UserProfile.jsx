import React from "react";
import { AiOutlineLeft } from "react-icons/ai";

const UserProfile = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-900 text-white p-5 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Logo</h2>
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
      <main className="flex-1 p-8 bg-white shadow-md">
        {/* Header */}
        <div className="flex items-center space-x-3 text-gray-600">
          <AiOutlineLeft className="text-lg" />
          <h1 className="text-2xl font-semibold">View User</h1>
        </div>

        {/* Profile Picture Upload */}
        <div className="mt-6 border-2 border-dashed border-gray-300 p-6 text-center text-gray-500 rounded-md">
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
              className="w-full mt-1 p-2 border rounded bg-gray-100"
              disabled
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700">Last Name *</label>
            <input
              type="text"
              value="eee"
              className="w-full mt-1 p-2 border rounded bg-gray-100"
              disabled
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email *</label>
            <input
              type="email"
              value="vasanth+5@venzotechnologies.com"
              className="w-full mt-1 p-2 border rounded bg-gray-100"
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
            <select className="w-full mt-1 p-2 border rounded">
              <option>Admin</option>
              <option>User</option>
              <option>Manager</option>
            </select>
          </div>

          {/* District */}
          <div>
            <label className="block text-gray-700">District *</label>
            <select className="w-full mt-1 p-2 border rounded">
              <option>Cuddalore</option>
              <option>Chennai</option>
              <option>Madurai</option>
            </select>
          </div>

          {/* Zone */}
          <div>
            <label className="block text-gray-700">Zone *</label>
            <select className="w-full mt-1 p-2 border rounded">
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
  );
};

export default UserProfile;

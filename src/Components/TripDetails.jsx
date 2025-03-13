import React, { useState } from "react";
import { AiFillCaretDown, AiOutlineCloudDownload } from "react-icons/ai";


const TripDetails = () => {
    const [trips] = useState([
        { date: "04/04/2023", id: "PNDFF3", transporter: "Vasanth Ravisankar", district: "Madurai", hub: "Rajaji Government Hospital", box: 11, time: "15:16:51", route: "PHC009" },
        { date: "04/04/2023", id: "TDXS39", transporter: "Vasanth Ravisankar", district: "Madurai", hub: "Rajaji Government Hospital", box: 12, time: "15:46:14", route: "PHC001" },
        { date: "04/04/2023", id: "RVBSFW", transporter: "Vasanth Ravisankar", district: "Madurai", hub: "Rajaji Government Hospital", box: 9, time: "15:49:40", route: "PHC009-PHC001" },
        { date: "02/04/2023", id: "TRP00002", transporter: "Ramesh Krishna", district: "Madurai", hub: "Rajaji Government Hospital", box: 20, time: "15:00:00", route: "PHC009-PHC001" },
        { date: "05/04/2023", id: "DIEIU4", transporter: "Ramesh Krishna", district: "Madurai", hub: "Rajaji Government Hospital", box: 43, time: "16:30:46", route: "PHC009-SDH317-PHC001" },
        { date: "04/04/2023", id: "C5AKHW", transporter: "Vasanth Ravisankar", district: "Madurai", hub: "Rajaji Government Hospital", box: 87, time: "16:35:15", route: "PHC001-PHC009" },
        { date: "05/04/2023", id: "8DQTH3", transporter: "Vasanth Ravisankar", district: "Madurai", hub: "Rajaji Government Hospital", box: 16, time: "12:27:47", route: "PHC001-PHC009" },
        { date: "04/04/2023", id: "GCSCRS", transporter: "Vasanth Ravisankar", district: "Madurai", hub: "Rajaji Government Hospital", box: 12, time: "15:11:22", route: "PHC009" },
    ]);

    const [startDate, setStartDate] = useState("2023-12-19");
    const [endDate, setEndDate] = useState("2023-12-19");
    const [activeTab, setActiveTab] = useState("Trip Details");
    const tabs = ["Transporters", "Institutions", "Trip Details", "Users"];

    

    const Dropdown = ({ label }) => (
        <div className="relative min-w-[184px]">
            <select className="appearance-none border border-gray-300 p-2 pr-10 w-full bg-white focus:outline-none">
                <option>{label}</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center px-2 pointer-events-none">
                <AiFillCaretDown className="text-gray-400" />
            </div>
        </div>
    );

    const DateInput = ({ value, onChange }) => (
        <div className="relative min-w-[100px]">
            <input
                type="date"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="border p-2 w-full focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
        </div>
    );
    

    return (
        <div className="mt-0 p-6  bg-gray-50 min-h-screen w-[100vw] font-manrope">
            {/* Navigation Tabs */}
            <div className="flex justify-between items-center text-gray-500 text-lg border-b pb-0">
                <div className="flex space-x-6">
                    {tabs.map((tab) => (
                        <span
                            key={tab}
                            className={`cursor-pointer pb-3 ${activeTab === tab ? "text-orange-500 border-b-2 border-orange-500 font-manrope " : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </span>
                    ))}
                </div>
                <button className="bg-orange-500 text-white px-1 py-0.5 flex items-center rounded-none ">
                    <AiOutlineCloudDownload className="mr-2" /> Download
                </button>
            </div>

            {/* Filters (Always Visible) */}
            <div className="mt-3 flex flex-wrap justify-between items-center gap-3 mb-1">
                <div className="flex flex-wrap gap-2">
                    <Dropdown label="Delivery Hub" />
                    <Dropdown label="District" />
                    <Dropdown label="Zone" />
                    <Dropdown label="Status" />
                    <Dropdown label="Delayed Status" />
                    <Dropdown label="Transporter" />
                </div>
                <div className="flex gap-2">
                    <DateInput value={startDate} onChange={(val) => setStartDate(val)} />
                    <DateInput value={endDate} onChange={(val) => setEndDate(val)} />
                </div>
            </div>

            {/* Table (Always Visible) */}
            <div className="overflow-x-auto bg-white shadow-md rounded-none">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-50 text-gray-700">
                            <th className="px-10 py-5 text-left font-manrope">Date</th>
                            <th className="px-11 py-5 text-left font-manrope">ID</th>
                            <th className="px-6 py-3 text-center font-manrope">Transporter Name</th>
                            <th className="px-6 py-3 text-center font-manrope">District</th>
                            <th className="px-6 py-3 text-center font-manrope">Delivery Hub</th>
                            <th className="px-6 py-3 text-center font-manrope">Box</th>
                            <th className="px-6 py-3 text-center font-manrope">Time</th>
                            <th className="px-6 py-3 text-center font-manrope">Route</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {trips.map((trip, index) => (
                            <tr key={index} className="hover:bg-gray-50 font-manrope w-[100vw]">
                                <td className="px-6 py-4 text-center">{trip.date}</td>
                                <td className="px-6 py-4 text-center">{trip.id}</td>
                                <td className="px-6 py-4 text-center">{trip.transporter}</td>
                                <td className="px-6 py-4 text-center">{trip.district}</td>
                                <td className="px-6 py-4 text-center">{trip.hub}</td>
                                <td className="px-6 py-4 text-center">{trip.box}</td>
                                <td className="px-6 py-4 text-center">{trip.time}</td>
                                <td className="px-6 py-4 text-center">{trip.route}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TripDetails;

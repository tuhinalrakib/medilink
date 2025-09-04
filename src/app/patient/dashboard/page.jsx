"use client";

import { CalendarDays, ClipboardList, User } from "lucide-react";

export default function PatientDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome Back 👋</h1>
        <p className="text-gray-600">Here’s a quick overview of your activity</p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
              <CalendarDays size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">3</h2>
              <p className="text-gray-600 text-sm">Upcoming Appointments</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 text-green-600 rounded-full">
              <ClipboardList size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">12</h2>
              <p className="text-gray-600 text-sm">Total Appointments</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-full">
              <User size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-gray-600 text-sm">Patient Profile</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments Table */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Upcoming Appointments
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 border text-left">Doctor</th>
                <th className="px-4 py-2 border text-left">Specialization</th>
                <th className="px-4 py-2 border text-left">Date</th>
                <th className="px-4 py-2 border text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border">Dr. Smith</td>
                <td className="px-4 py-2 border">Cardiology</td>
                <td className="px-4 py-2 border">12 Sep 2025</td>
                <td className="px-4 py-2 border text-green-600 font-medium">
                  Confirmed
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border">Dr. Jane</td>
                <td className="px-4 py-2 border">Dermatology</td>
                <td className="px-4 py-2 border">18 Sep 2025</td>
                <td className="px-4 py-2 border text-yellow-600 font-medium">
                  Pending
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border">Dr. Allen</td>
                <td className="px-4 py-2 border">Neurology</td>
                <td className="px-4 py-2 border">25 Sep 2025</td>
                <td className="px-4 py-2 border text-red-600 font-medium">
                  Cancelled
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

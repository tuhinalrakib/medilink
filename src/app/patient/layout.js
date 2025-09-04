"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";

export default function PatientLayout({ children }) {
  const pathname = usePathname();

  const menuItems = [
    { label: "Dashboard", href: "/patient/dashboard" },
    { label: "My Appointments", href: "/patient/appointments" },
    { label: "Doctors", href: "/patient/doctors" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col justify-between">
        <div>
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-blue-600">Patient Panel</h2>
            <p className="text-sm text-gray-500">Manage your health easily</p>
          </div>

          <nav className="mt-6 flex flex-col gap-2 px-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded-lg font-medium transition-all ${
                  pathname === item.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center gap-2 w-full px-4 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold text-gray-700">
            Patient Dashboard
          </h1>
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="Profile"
              className="w-10 h-10 rounded-full border"
            />
            <span className="font-medium text-gray-600">John Doe</span>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6">{children}</div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 text-center py-3 text-sm text-gray-500">
          © {new Date().getFullYear()} Doctor Appointment System — Patient Panel
        </footer>
      </main>
    </div>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  console.log(user)
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const navLinks = (
    <>
      <li><Link href="/" className="hover:bg-[#5C9966] p-2 duration-300 rounded-2xl">Home</Link></li>
      <li><Link href="/" className="hover:bg-[#5C9966] p-2 duration-300 rounded-2xl">Doctors</Link></li>
      <li><Link href="/" className="hover:bg-[#5C9966] p-2 duration-300 rounded-2xl">Appointment</Link></li>
      <li><Link href="/" className="hover:bg-[#5C9966] p-2 duration-300 rounded-2xl">Contact</Link></li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1a1a1a]/70 text-white backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/Capture.png" width={10} height={10} alt="Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-[#1C2091]">MediLink</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 font-bold items-center">
            <ul className="flex space-x-6 font-medium text-lg">
              {navLinks}
            </ul>

            {/* Conditional Buttons */}
            {user ? (
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a] shadow-md">
          <div className="absolute right-0 mt-2 w-full rounded-md shadow-lg pl-2 py-2 font-medium text-lg">
            <ul>
              {navLinks}
            </ul>

            {/* Conditional Mobile Buttons */}
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="block w-full mt-2 px-3 py-2 bg-red-600 text-white rounded-md text-center hover:bg-red-700 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="block mt-2 px-3 py-2 bg-indigo-600 text-white rounded-md text-center hover:bg-indigo-700 transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="block mt-2 px-3 py-2 bg-indigo-600 text-white rounded-md text-center hover:bg-indigo-700 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

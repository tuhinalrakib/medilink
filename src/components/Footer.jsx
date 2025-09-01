// src/components/Footer.jsx
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 border-b border-gray-700">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold text-white">DocManage</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              A modern doctor appointment management system that makes booking
              and managing healthcare easy and efficient.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/patient/dashboard"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link
                  href="/patient/appointments"
                  className="hover:text-indigo-400 transition-colors"
                >
                  My Appointments
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-indigo-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} DocManage. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Made with ❤️ by{" "}
            <span className="text-indigo-400 font-semibold">
              Your Team Name
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

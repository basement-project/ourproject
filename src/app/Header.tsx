"use client"
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-screen bg-white p-6 z-40 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl sm:text-4xl text-black font-bold">
          basement co.
        </div>

        {/* Hamburger Menu (Tombol) */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute sm:static top-16 sm:top-auto left-0 sm:left-auto w-full sm:w-auto bg-white sm:bg-transparent shadow-md sm:shadow-none p-6 sm:p-0 flex flex-col sm:flex-row items-center sm:items-center`}
        >
          <Link
            href="/"
            className="text-md text-black hover:text-gray-500 px-3 py-2 sm:py-0"
          >
            Home
          </Link>
          <Link
            href="/profiles"
            className="text-md text-black hover:text-gray-500 px-3 py-2 sm:py-0"
          >
            Profile & Kontak
          </Link>
          <Link
            href="/pricing"
            className="text-md text-black hover:text-gray-500 px-3 py-2 sm:py-0"
          >
            Pricing
          </Link>
          {/* Tambahkan link lainnya di sini jika diperlukan */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

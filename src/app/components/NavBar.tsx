"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold hover:text-gray-300">
          DevMastery
        </Link>
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
        {/* Links de navegação */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6`}
        >
          <Link
            href="/courses"
            className="block py-2 px-4 hover:bg-gray-700 rounded"
          >
            Cursos
          </Link>
          <Link
            href="/profile"
            className="block py-2 px-4 hover:bg-gray-700 rounded"
          >
            Meu Perfil
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

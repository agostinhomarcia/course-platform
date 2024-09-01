import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold">
          <Link href="/">Plataforma de Cursos</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/profile" className="text-gray-300 hover:text-white">
            Meu Perfil
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import "./styles/globals.css";
import React from "react";

export const metadata = {
  title: "Plataforma de Cursos",
  description: "Aprenda novos tópicos com cursos sob demanda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4">
          Plataforma de Cursos
        </header>
        <main className="flex-grow p-6">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          © 2024 Plataforma de Cursos
        </footer>
      </body>
    </html>
  );
}

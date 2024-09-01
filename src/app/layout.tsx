import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./styles/globals.css";
import React from "react";

export const metadata = {
  title: "Plataforma de Cursos",
  description: "Aprenda novos tópicos com cursos sob demanda.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <NavBar />

        <main className="flex-grow p-6 bg-gray-100">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

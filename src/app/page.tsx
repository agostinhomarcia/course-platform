import Link from "next/link";

// Componente principal da HomePage
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Título principal */}
      <h1 className="text-4xl font-bold mb-4 text-blue-700">
        Bem-vindo à Plataforma de Cursos
      </h1>
      {/* Descrição */}
      <p className="text-lg text-gray-700 mb-6 text-center max-w-md">
        Aqui você pode encontrar e aprender sobre diversos tópicos!
      </p>
      {/* Link para os cursos */}
      <Link
        href="/courses"
        className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors"
      >
        Veja todos os cursos disponíveis
      </Link>
    </div>
  );
}

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-900 text-white p-8">
      {/* Seção de Boas-vindas */}
      <h1 className="text-5xl font-extrabold mb-4 text-center">
        Domine o Futuro na DevMastery
      </h1>

      {/* Conteúdo Principal */}
      <div className="flex flex-col gap-8 w-full max-w-4xl">
        {/* Seção de Introdução */}
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-xl text-left mb-8 text-gray-300">
            Domine as habilidades de programação front-end com nossos cursos
            práticos e atualizados. Aqui, você encontra tudo o que precisa para
            criar interfaces incríveis, desde o básico até técnicas avançadas,
            com suporte de especialistas que estão prontos para te guiar em cada
            etapa.
          </p>
        </div>

        {/* Seção de Por que escolher nossa plataforma */}
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-4 text-blue-300">
            🚀 Por que escolher nossa plataforma?
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-300 space-y-4">
            <li>
              <strong className="text-white">Conteúdo Prático:</strong> Aprenda
              na prática, com projetos reais e desafios que simulam o mercado de
              trabalho.
            </li>
            <li>
              <strong className="text-white">Instrução Especializada:</strong>{" "}
              Tenha acesso a professores que são profissionais atuantes na área,
              com dicas valiosas e feedbacks personalizados.
            </li>
            <li>
              <strong className="text-white">Atualizações Constantes:</strong>{" "}
              Mantenha-se à frente com materiais que acompanham as tendências e
              as tecnologias mais recentes do mercado.
            </li>
          </ul>
        </div>

        {/* Seção Transforme sua Paixão em Carreira */}
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-blue-400">
              🎓 Transforme sua Paixão em Carreira
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Não perca tempo! Comece agora a trilhar o caminho para se tornar
              um desenvolvedor front-end de sucesso. Nossos cursos estão prontos
              para levar sua carreira para o próximo nível.
            </p>
          </div>
        </div>
      </div>

      {/* Botão de Call to Action */}
      <div className="mt-12 text-center">
        <Link
          href="/courses"
          className="flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-transform transform hover:scale-110 shadow-lg"
        >
          Veja todos os cursos disponíveis
          <FaArrowRight className="ml-3" />
        </Link>
      </div>
    </div>
  );
}

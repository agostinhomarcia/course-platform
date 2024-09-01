"use client"; // Indica que este é um Client Component

import Image from "next/image";
import React from "react";

interface CourseDetailProps {
  params: {
    id: string;
  };
}

// Dados simulados para os cursos
const courseData: {
  [key: number]: {
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    modules: {
      id: number;
      title: string;
      lessons: string[];
    }[];
  };
} = {
  1: {
    title: "Curso de React",
    description: "Aprenda React do básico ao avançado.",
    content:
      "Neste curso, você aprenderá sobre componentes, estado, hooks, e muito mais.",
    imageUrl: "/react.png",
    modules: [
      {
        id: 1,
        title: "Módulo 1: Introdução ao React",
        lessons: [
          "O que é React?",
          "Configurando o ambiente",
          "Primeiros Componentes",
        ],
      },
      {
        id: 2,
        title: "Módulo 2: Componentes e Estado",
        lessons: [
          "Criando Componentes",
          "Gerenciamento de Estado com useState",
          "Props e Children",
        ],
      },
    ],
  },
  2: {
    title: "Curso de Next.js",
    description: "Construa aplicações escaláveis com Next.js.",
    content:
      "Este curso aborda roteamento, SSR, SSG, API Routes, e outras funcionalidades do Next.js.",
    imageUrl: "/next.png",
    modules: [
      {
        id: 1,
        title: "Módulo 1: Introdução ao Next.js",
        lessons: [
          "O que é Next.js?",
          "Configurando o ambiente",
          "Páginas e Roteamento",
        ],
      },
      {
        id: 2,
        title: "Módulo 2: Renderização e APIs",
        lessons: ["SSR vs SSG", "API Routes", "Autenticação com NextAuth"],
      },
    ],
  },
  3: {
    title: "Curso de Tailwind CSS",
    description: "Estilize suas aplicações de forma rápida e eficiente.",
    content:
      "Aprenda a utilizar o Tailwind CSS para criar layouts responsivos e modernos.",
    imageUrl: "/tailwind.jpg",
    modules: [
      {
        id: 1,
        title: "Módulo 1: Introdução ao Tailwind CSS",
        lessons: [
          "O que é Tailwind CSS?",
          "Instalação e Configuração",
          "Utilizando utilitários básicos",
        ],
      },
      {
        id: 2,
        title: "Módulo 2: Layouts e Estilização",
        lessons: [
          "Trabalhando com Grids e Flexbox",
          "Customizando temas",
          "Animações e Transições",
        ],
      },
    ],
  },
};

const CourseDetail: React.FC<CourseDetailProps> = ({ params }) => {
  const courseId = parseInt(params.id);
  const course = courseData[courseId];

  if (!course) {
    return <div>Curso não encontrado.</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <Image
        src={course.imageUrl}
        alt={course.title}
        width={300}
        height={200}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="text-lg mb-4">{course.description}</p>

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Conteúdo do Curso</h2>
        {course.modules.map((module) => (
          <div key={module.id} className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">{module.title}</h3>
            <ul className="list-disc list-inside">
              {module.lessons.map((lesson, index) => (
                <li key={index} className="ml-4">
                  {lesson}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;

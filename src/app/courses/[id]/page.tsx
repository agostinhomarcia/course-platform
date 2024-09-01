"use client";

import React, { useState, useEffect } from "react";
import { FaReact, FaJs } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTailwindcss, SiNextdotjs, SiCss3 } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

interface CourseDetailProps {
  params: {
    id: string;
  };
}

const courseData: {
  [key: number]: {
    title: string;
    description: string;
    content: string;
    icon: JSX.Element;
    imageUrl: string;
    modules: {
      id: number;
      title: string;
      lessons: string[];
    }[];
  };
} = {
  1: {
    title: "React",
    description: "Aprenda React do básico ao avançado.",
    content:
      "Neste curso, você aprenderá sobre componentes, estado, hooks, e muito mais.",
    icon: <FaReact size={50} className="text-blue-500" />,
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
    title: "Next.js",
    description: "Construa aplicações escaláveis com Next.js.",
    content:
      "Este curso aborda roteamento, SSR, SSG, API Routes, e outras funcionalidades do Next.js.",
    icon: <SiNextdotjs size={50} className="text-gray-800" />,
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
    title: "Tailwind CSS",
    description: "Estilize suas aplicações de forma rápida e eficiente.",
    content:
      "Aprenda a utilizar o Tailwind CSS para criar layouts responsivos e modernos.",
    icon: <SiTailwindcss size={50} className="text-blue-400" />,
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
  4: {
    title: "JavaScript",
    description: "Domine a linguagem de programação mais popular da web.",
    content:
      "Este curso cobre desde o básico do JavaScript até conceitos avançados como Promises e Async/Await.",
    icon: <FaJs size={50} className="text-yellow-500" />,
    imageUrl: "/js.jpg",
    modules: [
      {
        id: 1,
        title: "Módulo 1: Fundamentos do JavaScript",
        lessons: ["O que é JavaScript?", "Sintaxe Básica", "Tipos de Dados"],
      },
      {
        id: 2,
        title: "Módulo 2: Programação Avançada",
        lessons: [
          "Funções e Escopo",
          "Manipulação de DOM",
          "Promises e Async/Await",
        ],
      },
    ],
  },
  5: {
    title: "HTML & CSS",
    description: "Aprenda a construir websites com HTML5 e CSS3.",
    content:
      "Este curso ensina como estruturar e estilizar páginas web utilizando HTML5 e CSS3.",
    icon: (
      <div className="flex space-x-4 justify-center">
        <AiOutlineHtml5 size={50} className="text-orange-500" />
        <SiCss3 size={50} className="text-blue-500" />
      </div>
    ),
    imageUrl: "/html.png",
    modules: [
      {
        id: 1,
        title: "Módulo 1: Estrutura com HTML",
        lessons: [
          "Tags e Elementos HTML",
          "Estrutura Básica de um Documento HTML",
          "Semântica HTML",
        ],
      },
      {
        id: 2,
        title: "Módulo 2: Estilização com CSS",
        lessons: ["Seletores CSS", "Box Model", "Flexbox e Grid Layout"],
      },
    ],
  },
};

const CourseDetail: React.FC<CourseDetailProps> = ({ params }) => {
  const courseId = parseInt(params.id);
  const course = courseData[courseId];

  const [isEnrolled, setIsEnrolled] = useState<boolean>(false);

  useEffect(() => {
    const enrolledCourses = JSON.parse(
      localStorage.getItem("enrolledCourses") || "[]"
    );
    if (enrolledCourses.includes(courseId)) {
      setIsEnrolled(true);
    }
  }, [courseId]);

  const handleEnrollment = () => {
    const enrolledCourses = JSON.parse(
      localStorage.getItem("enrolledCourses") || "[]"
    );
    if (!enrolledCourses.includes(courseId)) {
      enrolledCourses.push(courseId);
      localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
      setIsEnrolled(true);
    }
  };

  const handleUnenrollment = () => {
    const enrolledCourses = JSON.parse(
      localStorage.getItem("enrolledCourses") || "[]"
    );
    const updatedCourses = enrolledCourses.filter(
      (id: number) => id !== courseId
    );
    localStorage.setItem("enrolledCourses", JSON.stringify(updatedCourses));
    setIsEnrolled(false);
  };

  if (!course) {
    return <div>Curso não encontrado.</div>;
  }

  return (
    <div className="bg-slate-300">
      <h1 className="text-4xl font-bold mb-8">{course.title}</h1>
      <div className="flex flex-col items-center mb-4">
        <div className="mb-4">{course.icon}</div>
        <Image
          src={course.imageUrl}
          alt={course.title}
          width={300}
          height={500}
          className="object-cover"
        />
      </div>
      <p className="text-lg mb-4">{course.description}</p>

      {!isEnrolled ? (
        <button
          onClick={handleEnrollment}
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Inscreva-se no Curso
        </button>
      ) : (
        <div>
          <p className="text-green-700 font-bold">
            Você está inscrito neste curso!
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href={`/courses/${courseId}/payment`}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Ir para Pagamento
              </button>
            </Link>
            <button
              onClick={handleUnenrollment}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Desfazer Matrícula
            </button>
          </div>
        </div>
      )}

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

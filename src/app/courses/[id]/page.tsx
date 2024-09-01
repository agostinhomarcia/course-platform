"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

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

  const [isEnrolled, setIsEnrolled] = useState<boolean>(false);
  const [progress, setProgress] = useState<{ [key: number]: boolean[] }>({});

  useEffect(() => {
    const enrolledCourses = JSON.parse(
      localStorage.getItem("enrolledCourses") || "[]"
    );
    if (enrolledCourses.includes(courseId)) {
      setIsEnrolled(true);
    }

    const savedProgress = JSON.parse(
      localStorage.getItem("courseProgress") || "{}"
    );
    if (savedProgress[courseId]) {
      setProgress(savedProgress);
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

  const toggleLessonCompletion = (moduleId: number, lessonIndex: number) => {
    const updatedProgress = { ...progress };
    if (!updatedProgress[courseId]) {
      updatedProgress[courseId] = [];
    }

    if (!updatedProgress[courseId][moduleId]) {
      updatedProgress[courseId][moduleId] = [];
    }

    updatedProgress[courseId][moduleId][lessonIndex] =
      !updatedProgress[courseId][moduleId][lessonIndex];
    setProgress(updatedProgress);
    localStorage.setItem("courseProgress", JSON.stringify(updatedProgress));
  };

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
          <Link href={`/courses/${courseId}/payment`}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
              Ir para Pagamento
            </button>
          </Link>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Conteúdo do Curso</h2>
        {course.modules.map((module, moduleIndex) => (
          <div key={module.id} className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">{module.title}</h3>
            <ul className="list-disc list-inside">
              {module.lessons.map((lesson, lessonIndex) => (
                <li key={lessonIndex} className="ml-4 flex items-center">
                  <input
                    type="checkbox"
                    checked={
                      progress[courseId]?.[moduleIndex]?.[lessonIndex] || false
                    }
                    onChange={() =>
                      toggleLessonCompletion(moduleIndex, lessonIndex)
                    }
                    className="mr-2"
                  />
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

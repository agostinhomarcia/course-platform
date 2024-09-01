import React from "react";
import Link from "next/link";
import { FaReact, FaJs } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTailwindcss, SiNextdotjs, SiCss3 } from "react-icons/si";

const courses = [
  {
    id: 1,
    title: "Curso de React",
    description: "Aprenda React do básico ao avançado.",
    icon: (
      <FaReact size={100} className="text-blue-500 mb-4 hover:text-blue-500" />
    ),
  },
  {
    id: 2,
    title: "Curso de Next.js",
    description: "Construa aplicações escaláveis com Next.js.",
    icon: <SiNextdotjs size={100} className="text-gray-800 mb-4 " />,
  },
  {
    id: 3,
    title: "Curso de Tailwind CSS",
    description: "Estilize suas aplicações de forma rápida e eficiente.",
    icon: <SiTailwindcss size={100} className="text-blue-400 mb-4" />,
  },
  {
    id: 4,
    title: "Curso de JavaScript",
    description: "Domine a linguagem de programação mais popular da web.",
    icon: <FaJs size={100} className="text-yellow-500 mb-4" />,
  },
  {
    id: 5,
    title: "Curso de HTML & CSS",
    description: "Aprenda a construir websites com HTML5 e CSS3.",
    icon: (
      <div className="flex space-x-4">
        <AiOutlineHtml5 size={100} className="text-orange-500 mb-4" />
        <SiCss3 size={100} className="text-blue-500 mb-4" />
      </div>
    ),
  },
];

const CoursesPage = () => {
  return (
    <div className="bg-slate-800 min-h-screen p-8">
      <div>
        <h1 className="text-3xl font-bold mb-6">Cursos Disponíveis</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`}>
              <div className="border rounded-lg overflow-hidden shadow-lg cursor-pointer p-6 bg-white flex flex-col items-center">
                {course.icon}
                <h2 className="text-2xl font-bold mb-2 text-center">
                  {course.title}
                </h2>
                <p className="text-gray-700 text-center">
                  {course.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;

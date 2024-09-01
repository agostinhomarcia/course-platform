import React from "react";
import Link from "next/link";
import { FaReact, FaJs } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTailwindcss, SiNextdotjs, SiCss3 } from "react-icons/si";

const courses = [
  {
    id: 1,
    title: "Curso de React",
    description:
      "Transforme sua carreira com React! Domine a biblioteca mais popular para criar interfaces dinâmicas e interativas, do básico ao avançado. Comece agora e se torne um desenvolvedor front-end requisitado!",
    icon: (
      <FaReact size={100} className="text-blue-500 mb-4 hover:text-blue-500" />
    ),
  },
  {
    id: 2,
    title: "Curso de Next.js",
    description:
      "Leve suas habilidades em React para o próximo nível com Next.js. Aprenda a construir aplicações escaláveis e de alta performance com o framework que está revolucionando o desenvolvimento web. Garanta sua vaga!",
    icon: <SiNextdotjs size={100} className="text-gray-800 mb-4 " />,
  },
  {
    id: 3,
    title: "Curso de Tailwind CSS",
    description:
      "Crie designs modernos e responsivos de forma rápida e prática! Aprenda Tailwind CSS e descubra como personalizar estilos sem complicação. Inscreva-se e agilize seu processo de desenvolvimento.",
    icon: <SiTailwindcss size={100} className="text-blue-400 mb-4" />,
  },
  {
    id: 4,
    title: "Curso de JavaScript",
    description:
      "Domine a linguagem que move a web! Este curso abrangente de JavaScript irá levá-lo desde os conceitos básicos até técnicas avançadas, preparando você para qualquer desafio de programação. Comece hoje e avance sua carreira!",
    icon: <FaJs size={100} className="text-yellow-500 mb-4" />,
  },
  {
    id: 5,
    title: "Curso de HTML & CSS",
    description:
      "Construa websites impressionantes e responsivos com HTML5 e CSS3! Aprenda as melhores práticas e técnicas essenciais para criar layouts modernos e atrativos. Inscreva-se e transforme suas ideias em realidade!",
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
        <h1 className="text-3xl text-slate-200 text-center font-bold mb-6">
          Cursos Disponíveis
        </h1>
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

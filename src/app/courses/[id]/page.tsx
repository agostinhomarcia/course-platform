import Image from "next/image";
import React from "react";

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
  };
} = {
  1: {
    title: "Curso de React",
    description: "Aprenda React do básico ao avançado.",
    content:
      "Neste curso, você aprenderá sobre componentes, estado, hooks, e muito mais.",
    imageUrl: "/react.png",
  },
  2: {
    title: "Curso de Next.js",
    description: "Construa aplicações escaláveis com Next.js.",
    content:
      "Este curso aborda roteamento, SSR, SSG, API Routes, e outras funcionalidades do Next.js.",
    imageUrl: "/next.png",
  },
  3: {
    title: "Curso de Tailwind CSS",
    description: "Estilize suas aplicações de forma rápida e eficiente.",
    content:
      "Aprenda a utilizar o Tailwind CSS para criar layouts responsivos e modernos.",
    imageUrl: "/tailwind.jpg",
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
      <p>{course.content}</p>
    </div>
  );
};

export default CourseDetail;

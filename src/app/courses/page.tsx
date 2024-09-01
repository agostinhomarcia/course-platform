import React from "react";
import CourseCard from "../components/CourseCard";

const courses = [
  {
    id: 1,
    title: "Curso de React",
    description: "Aprenda React do básico ao avançado.",
    imageUrl: "/react.png",
  },
  {
    id: 2,
    title: "Curso de Next.js",
    description: "Construa aplicações escaláveis com Next.js.",
    imageUrl: "/next.png",
  },
  {
    id: 3,
    title: "Curso de Tailwind CSS",
    description: "Estilize suas aplicações de forma rápida e eficiente.",
    imageUrl: "/tailwind.jpg",
  },
];

const CoursesPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Cursos Disponíveis</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            imageUrl={course.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;

import React from "react";
import Link from "next/link";
import Image from "next/image";

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
          <Link key={course.id} href={`/courses/${course.id}`}>
            <div className="border rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <Image
                src={course.imageUrl}
                alt={course.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                <p className="text-gray-700">{course.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;

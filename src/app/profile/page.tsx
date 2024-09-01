"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "Curso de React",
    imageUrl: "/react.png",
  },
  {
    id: 2,
    title: "Curso de Next.js",
    imageUrl: "/next.png",
  },
  {
    id: 3,
    title: "Curso de Tailwind CSS",
    imageUrl: "/tailwind.jpg",
  },
];

const ProfilePage = () => {
  const [enrolledCourses, setEnrolledCourses] = useState<number[]>([]);

  useEffect(() => {
    const enrolled = JSON.parse(
      localStorage.getItem("enrolledCourses") || "[]"
    );
    setEnrolledCourses(enrolled);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Meu Perfil</h1>
      <h2 className="text-2xl font-semibold mb-4">Cursos Inscritos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((courseId) => {
          const course = courses.find((c) => c.id === courseId);
          return course ? (
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
                </div>
              </div>
            </Link>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default ProfilePage;

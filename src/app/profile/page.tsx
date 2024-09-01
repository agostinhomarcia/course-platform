"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";

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

  const handleUnenroll = (courseId: number) => {
    const updatedCourses = enrolledCourses.filter((id) => id !== courseId);
    setEnrolledCourses(updatedCourses);
    localStorage.setItem("enrolledCourses", JSON.stringify(updatedCourses));
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Olá, DevMarcia</h1>
      <h2 className="text-2xl font-semibold mb-6 mt-4">Cursos Inscritos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((courseId) => {
          const course = courses.find((c) => c.id === courseId);
          return course ? (
            <div
              key={course.id}
              className="relative border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <Image
                src={course.imageUrl}
                alt={course.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                <button
                  onClick={() => handleUnenroll(course.id)}
                  className="absolute top-2 right-2 text-red-600 hover:text-red-800 transition-colors duration-200"
                >
                  <FaTrashAlt size={20} />
                </button>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default ProfilePage;

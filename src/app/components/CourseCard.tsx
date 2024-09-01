import Image from "next/image";
import React from "react";

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

// Componente para exibição de cursos individuais
const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      {/* Imagem do curso */}
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 bg-white">
        {/* Título do curso */}
        <h2 className="text-xl font-semibold mb-2 text-blue-600">{title}</h2>
        {/* Descrição do curso */}
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default CourseCard;

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const PaymentPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const courseId = parseInt(params.id);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const { width, height } = useWindowSize();

  const handlePayment = () => {
    // Simula um processo de pagamento fictício
    const purchasedCourses = JSON.parse(
      localStorage.getItem("purchasedCourses") || "[]"
    );
    if (!purchasedCourses.includes(courseId)) {
      purchasedCourses.push(courseId);
      localStorage.setItem(
        "purchasedCourses",
        JSON.stringify(purchasedCourses)
      );
    }
    setPaymentCompleted(true);
    setTimeout(() => {
      router.push(`/courses/${courseId}`);
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      {paymentCompleted && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
        />
      )}

      {!paymentCompleted ? (
        <>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-white text-center">
            Pagamento do Curso
          </h1>
          <p className="mb-6 text-gray-300 text-center">
            Simulação de pagamento para o curso {courseId}.
          </p>
          <button
            onClick={handlePayment}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg sm:text-xl w-full max-w-xs text-center"
          >
            Concluir Pagamento
          </button>
        </>
      ) : (
        <p className="text-green-500 text-lg sm:text-xl text-center">
          Pagamento Concluído! Redirecionando...
        </p>
      )}
    </div>
  );
};

export default PaymentPage;

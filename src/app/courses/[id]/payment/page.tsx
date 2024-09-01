"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const PaymentPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const courseId = parseInt(params.id);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

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
    }, 2000); // Redireciona após 2 segundos
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-300">
      {!paymentCompleted ? (
        <>
          <h1 className="text-3xl font-bold mb-4">Pagamento do Curso</h1>
          <p className="mb-6">
            Simulação de pagamento para o curso {courseId}.
          </p>
          <button
            onClick={handlePayment}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Concluir Pagamento
          </button>
        </>
      ) : (
        <p className="text-green-600 text-xl">
          Pagamento Concluído! Redirecionando...
        </p>
      )}
    </div>
  );
};

export default PaymentPage;

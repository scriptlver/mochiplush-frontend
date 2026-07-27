import React from "react";

function SuccessModal({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6 backdrop-blur-[2px]">
      <div className="w-full max-w-[320px] rounded-[24px] bg-[#EFEFEF]/95 p-6 text-center shadow-xl border border-black/10">
        <div className="mb-4 flex justify-center">
          <svg
            className="h-16 w-16 text-[#72E85A]"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>

        <h3 className="font-lexend text-base font-bold text-black mb-2 leading-tight">
          Compra realizada com sucesso!
        </h3>

        <p className="font-inter text-[12px] leading-tight text-[#666666]">
          Obrigado por comprar conosco! Enviamos os detalhes do pedido e o
          comprovante para o seu e-mail.
        </p>
      </div>
    </div>
  );
}

export default SuccessModal;

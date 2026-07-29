import { AlertTriangle } from "lucide-react";

function LogoutModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
      <div className="w-full max-w-[330px] rounded-[24px] border border-black/40 bg-[#EFEFEF]/95 p-6 text-center shadow-lg">
        <div className="flex flex-col items-center">
           <AlertTriangle
              size={50}
              className="text-[#DB0008]"
              strokeWidth={2}
            />

          <p className="mt-2 font-lexend text-[22px] font-semibold text-black">
            Atenção
          </p>

          <h3 className="mt-2 text-center font-lexend text-[16px] font-normal text-black">
            Você deseja sair da sua conta?
          </h3>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={onClose}
            className="h-11 w-28 rounded-xl bg-[#DB0008] font-lexend text-[16px] font-semibold text-white transition hover:opacity-90"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="h-11 w-28 rounded-xl bg-[#FF40A3] font-lexend text-[16px] font-semibold text-white transition hover:opacity-90"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
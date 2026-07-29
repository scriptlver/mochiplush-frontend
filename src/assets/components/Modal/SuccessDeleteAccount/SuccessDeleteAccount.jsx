function SuccessDeleteAccount({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center border-4 border-black px-6 backdrop-blur-[1px]">
      <div className="h-[230px] w-full max-w-[320px] rounded-[24px] bg-[#EFEFEF]/95 p-6 text-center border border-black/40">
        <div className="mb-4 flex justify-center pt-8">
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

        <h3 className="font-lexend text-[16px] font-bold text-black mb-2 leading-tight">
          Conta excluída com sucesso!
        </h3>
      </div>
    </div>
  );
}

export default SuccessDeleteAccount;

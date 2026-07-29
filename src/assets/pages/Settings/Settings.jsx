import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import Header from "../../components/Header/Header";
import LogoutModal from "../../components/Modal/LogoutModal/LogoutModal";
import SuccessLogout from "../../components/Modal/SuccessLogout/SuccessLogout";
import DeleteAccountModal from "../../components/Modal/DeleteAccountModal/DeleteAccountModal";
import SuccessDeleteAccount from "../../components/Modal/SuccessDeleteAccount/SuccessDeleteAccount";

import profile from "../../img/Header/sooin-icon.png";

function Settings() {
  const navigate = useNavigate();

  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isDeleteAccountOpen, setIsDeleteAccountOpen] = useState(false);
  const [isSuccessDeleteOpen, setIsSuccessDeleteOpen] = useState(false);

  const options = [
    {
      title: "Minha conta",
      action: () => navigate("/profile"),
    },
    {
      title: "Histórico de compras",
      action: () => navigate("/orders"),
    },
    {
      title: "Política de privacidade",
      action: () => navigate("/privacy-policy"),
    },
    {
      title: "Termos de uso",
      action: () => navigate("/terms"),
    },
    {
      title: "Log out",
      action: () => setIsLogoutOpen(true),
    },
    {
      title: "Excluir conta",
      action: () => setIsDeleteAccountOpen(true),
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#F8F8F8] px-6 pt-6">
        <Header
          title="Configurações"
          image={profile}
          onProfile={() => navigate("/profile")}
        />

        <div className="mt-8 flex flex-col items-center gap-4">
          {options.map((item) => (
            <button
              key={item.title}
              onClick={item.action}
              className="flex h-14 w-[330px] items-center justify-between rounded-xl border border-black bg-[#F584BE] px-6 font-lexend text-[18px] font-semibold text-white transition hover:bg-[#DD62A1]"
            >
              <span>{item.title}</span>
              <ChevronRight size={22} strokeWidth={2} />
            </button>
          ))}
        </div>
      </div>

      <LogoutModal
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
        onConfirm={() => {
          setIsLogoutOpen(false);
          setIsSuccessOpen(true);

          setTimeout(() => {
            setIsSuccessOpen(false);
            navigate("/login");
          }, 1500);
        }}
      />

      <SuccessLogout isOpen={isSuccessOpen} />

      <DeleteAccountModal
        isOpen={isDeleteAccountOpen}
        onClose={() => setIsDeleteAccountOpen(false)}
        onConfirm={() => {
          setIsDeleteAccountOpen(false);
          setIsSuccessDeleteOpen(true);

          setTimeout(() => {
            setIsSuccessDeleteOpen(false);
            navigate("/login");
          }, 1500);
        }}
      />

      <SuccessDeleteAccount isOpen={isSuccessDeleteOpen} />
    </>
  );
}

export default Settings;

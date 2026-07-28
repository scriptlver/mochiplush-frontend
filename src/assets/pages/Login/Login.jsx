import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../img/MochiPlush/mp-logo.png";
import googleIcon from "../../img/Login/google-login.png";

import LoginSuccess from "../../components/Modal/LoginSuccess/LoginSuccess";

function Login() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    setShowModal(true);

    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return (
    <>
      <div className="min-h-screen bg-[#F584BE]">
        <div className="flex justify-center pt-10">
          <img
            src={logo}
            alt="MochiPlush"
            className="h-32 w-auto object-contain"
          />
        </div>

        <div className="-mt-2 min-h-[85vh] rounded-t-[40px] bg-[#F8F8F8] px-9 pt-10 pb-10">
          <h1 className="font-lexend text-[36px] font-bold text-[#1E1E1E]">
            Login
          </h1>

          <div className="mt-7">
            <label className="font-lexend text-[18px] text-[#1E1E1E]">
              Email
            </label>

            <input
              type="email"
              className="mt-3 h-14 w-full rounded-xl border border-[#A8A8A8] px-4 font-lexend outline-none focus:border-[#F584BE]"
            />
          </div>

          <div className="mt-8">
            <label className="font-lexend text-[18px] text-[#1E1E1E]">
              Senha
            </label>

            <input
              type="password"
              className="mt-3 h-14 w-full rounded-xl border border-[#A8A8A8] px-4 font-lexend outline-none focus:border-[#F584BE]"
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="mt-10 h-14 w-full rounded-xl border-1 border-black bg-[#F584BE] font-lexend text-xl font-semibold text-white transition hover:bg-[#DD62A1]"
          >
            Entrar
          </button>

          <div className="mt-8 flex justify-end">
            <button className="font-lexend text-[18px] font-medium text-black hover:underline">
              Esqueceu a senha?
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="font-lexend text-[17px] text-[#2B2B2B]">
              Ainda não possui uma conta?{" "}
              <Link
                to="/register"
                className="cursor-pointer font-semibold text-[#1E1E1E] hover:text-[#DD62A1]"
              >
                Criar conta
              </Link>
            </p>
          </div>

          <div className="my-8 flex items-center">
            <div className="h-px flex-1 bg-gray-300"></div>

            <span className="mx-5 font-lexend text-lg text-gray-400">Ou</span>

            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white py-3.5 transition-colors hover:bg-gray-50"
          >
            <img src={googleIcon} alt="Google" className="h-5 w-5" />
            <span className="font-manrope font-medium text-gray-700">
              Continuar com Google
            </span>
          </button>
        </div>
      </div>

      <LoginSuccess isOpen={showModal} />
    </>
  );
}

export default Login;

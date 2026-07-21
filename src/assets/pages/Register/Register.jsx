import { Link } from "react-router-dom";
import logo from "../../img/MochiPlush/mp-logo.png";

function Register() {
  return (
    <div className="min-h-screen bg-[#F584BE]">
      <div className="pl-4 px-2 pt-2">
        <img src={logo} alt="MochiPlush" className="w-44" />
      </div>

      <div className="-mt-2 min-h-[85vh] rounded-t-[40px] bg-[#F8F8F8] px-9 pt-10 pb-10">
        <h1 className="font-lexend text-[36px] font-bold text-[#1E1E1E]">
          Criar conta
        </h1>

        <div className="mt-7">
          <label className="font-lexend text-[18px] text-[#1E1E1E]">Nome</label>

          <input
            type="text"
            className="mt-3 h-14 w-full rounded-xl border border-[#A8A8A8] px-4 font-lexend outline-none focus:border-[#F584BE]"
          />
        </div>

        <div className="mt-6">
          <label className="font-lexend text-[18px] text-[#1E1E1E]">CPF</label>

          <input
            type="text"
            className="mt-3 h-14 w-full rounded-xl border border-[#A8A8A8] px-4 font-lexend outline-none focus:border-[#F584BE]"
          />
        </div>

        <div className="mt-6">
          <label className="font-lexend text-[18px] text-[#1E1E1E]">
            E-mail
          </label>

          <input
            type="email"
            className="mt-3 h-14 w-full rounded-xl border border-[#A8A8A8] px-4 font-lexend outline-none focus:border-[#F584BE]"
          />
        </div>

        <div className="mt-6">
          <label className="font-lexend text-[18px] text-[#1E1E1E]">
            Senha
          </label>

          <input
            type="password"
            className="mt-3 h-14 w-full rounded-xl border border-[#A8A8A8] px-4 font-lexend outline-none focus:border-[#F584BE]"
          />
        </div>

        <div className="mt-6">
          <label className="font-lexend text-[18px] text-[#1E1E1E]">
            Confirmar senha
          </label>

          <input
            type="password"
            className="mt-3 h-14 w-full rounded-xl border border-[#A8A8A8] px-4 font-lexend outline-none focus:border-[#F584BE]"
          />
        </div>

        <label className="mt-6 flex items-start gap-3">
          <input type="checkbox" className="mt-1 h-4 w-4 accent-[#F584BE]" />

          <span className="font-lexend text-[14px] text-[#2B2B2B] leading-5">
            Eu li e aceito os{" "}
            <Link to="/terms-of-use" className="font-semibold hover:underline">
              Termos de Uso
            </Link>{" "}
            e a{" "}
            <Link
              to="/politica-de-privacidade"
              className="font-semibold hover:underline"
            >
              Política de Privacidade
            </Link>
            .
          </span>
        </label>

        <button className="mt-8 h-14 w-full rounded-xl border-2 bg-[#F584BE] font-lexend text-xl font-semibold text-white transition hover:bg-[#DD62A1]">
          Criar conta
        </button>

        <div className="mt-8 text-center">
          <p className="font-lexend text-[17px] text-[#2B2B2B]">
            Já possui uma conta?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#1E1E1E] hover:text-[#DD62A1]"
            >
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

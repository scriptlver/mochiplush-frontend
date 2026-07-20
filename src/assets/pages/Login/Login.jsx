import logo from "../../img/MochiPlush/mp-logo.png";
import googleIcon from "../../img/Login/google-login.png";

function Login() {
  return (
    <div className="min-h-screen bg-[#F584BE]">
      <div className="pl-4 px-2 pt-2">
        <img src={logo} alt="MochiPlush" className="w-44" />
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

        <button className="mt-10 h-14 w-full rounded-xl border-2 bg-[#F584BE] font-lexend text-xl font-semibold text-white transition hover:bg-[#DD62A1]">
          Entrar
        </button>

        <div className="mt-8 flex justify-end">
          <button className="font-lexend text-[18px] text-black font-medium hover:underline">
            Esqueceu a senha?
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="font-lexend text-[17px] text-[#2B2B2B]">
            Ainda não possui uma conta?{" "}
            <span className="cursor-pointer font-semibold hover:underline text-[#1E1E1E]">
              Criar conta
            </span>
          </p>
        </div>

        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-gray-300"></div>

          <span className="mx-5 font-lexend text-lg text-gray-400">Ou</span>

          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-xl py-3.5 hover:bg-gray-50 transition-colors"
        >
          <img src={googleIcon} alt="Google" className="w-5 h-5" />
          <span className="font-manrope font-medium text-gray-700">
            Continuar com Google
          </span>
        </button>
      </div>
    </div>
  );
}

export default Login;

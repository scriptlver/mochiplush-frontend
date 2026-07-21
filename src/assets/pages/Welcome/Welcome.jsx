import { Link } from "react-router-dom";

import background from "../../img/MochiPlush/background-tasy.png";
import logo from "../../img/MochiPlush/mp-logo.png";

function Welcome() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src={background}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 flex h-full flex-col pt-6">
        <img src={logo} alt="MochiPlush" className="ml-8 w-32" />

        <h1 className="font-lemon mt-1 text-center text-[30px] leading-tight text-white">
          ENCONTRE SUA
          <br />
          NOVA PELÚCIA
          <br />
          FAVORITA!
        </h1>

        <div className="mt-4 flex justify-center">
          <Link
            to="/login"
            className="rounded-xl bg-[#F07AB7] px-5 py-2 text-base font-semibold text-white shadow-lg transition hover:opacity-90"
          >
            Clique aqui
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

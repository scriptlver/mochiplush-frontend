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

      <div className="relative z-10 h-full">
        <img src={logo} alt="MochiPlush" className="ml-8 mt-8 w-32" />

        <h1 className="font-lemon mt-10 text-center text-[38px] leading-tight text-white">
          ENCONTRE SUA
          <br />
          NOVA PELÚCIA
          <br />
          FAVORITA!
        </h1>

        <div className="mt-8 flex justify-center">
          <button className="rounded-xl bg-[#F07AB7] px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:opacity-90">
            Clique aqui
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

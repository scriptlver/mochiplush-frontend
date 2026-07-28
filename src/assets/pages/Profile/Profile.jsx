import Header from "../../components/Header/Header";

import profile from "../../img/Header/sooin-icon.png";

function Profile() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] px-6 pt-6">
      <Header title="Perfil" />

      <div className="mt-5 flex flex-col items-center">
        <img
          src={profile}
          alt="Kim Soo-in"
          className="h-44 w-44 rounded-full border-[3px] border-[#F584BE] object-cover"
        />

        <h2 className="mt-6 font-lexend text-[26px] font-bold text-black">
          Kim Soo-in
        </h2>

        <div className="mt-8 flex w-[330px] flex-col gap-4">
          <button className="h-14 rounded-xl border border-black bg-[#F584BE] font-lexend text-[18px] font-semibold text-white transition hover:bg-[#DD62A1]">
            Editar perfil
          </button>

          <button className="h-14 rounded-xl border border-black bg-[#F584BE] font-lexend text-[18px] font-semibold text-white transition hover:bg-[#DD62A1]">
            Favoritos
          </button>

          <button className="h-14 rounded-xl border border-black bg-[#F584BE] font-lexend text-[18px] font-semibold text-white transition hover:bg-[#DD62A1]">
            Meus pedidos
          </button>

          <button className="h-14 rounded-xl border border-black bg-[#F584BE] font-lexend text-[18px] font-semibold text-white transition hover:bg-[#DD62A1]">
            Configurações
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

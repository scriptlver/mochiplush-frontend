import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import EditProfileModal from "../../components/Modal/EditProfileModal/EditProfileModal";
import profile from "../../img/Header/sooin-icon.png";

import { Pencil } from "lucide-react";

function EditProfile() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
      navigate("/profile");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] px-6 pt-2 pb-10">
      <Header title="Editar perfil" />

      <div className="mt-5 flex flex-col items-center">
        <div className="relative">
          <img
            src={profile}
            alt="Kim Soo-in"
            className="h-44 w-44 rounded-full border-[3px] border-[#F584BE] object-cover"
          />

          <button
            type="button"
            className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white shadow"
          >
            <Pencil size={20} className="text-[#F584BE]" />
          </button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 flex w-full max-w-[340px] flex-col gap-6"
      >
        <div>
          <label className="mb-2 block font-lexend text-lg text-black">
            Nome
          </label>

          <input
            type="text"
            defaultValue="Kim Soo-in"
            className="h-14 w-full rounded-xl border border-gray-400 bg-white px-4 font-lexend text-lg outline-none focus:border-[#F584BE]"
          />
        </div>

        <div>
          <label className="mb-2 block font-lexend text-lg text-black">
            Email
          </label>

          <input
            type="email"
            defaultValue="sooinkim@meovv.com.br"
            className="h-14 w-full rounded-xl border border-gray-400 bg-white px-4 font-lexend text-lg outline-none focus:border-[#F584BE]"
          />
        </div>

        <div>
          <label className="mb-2 block font-lexend text-lg text-black">
            CPF
          </label>

          <input
            type="text"
            defaultValue="529.982.247-25"
            className="h-14 w-full rounded-xl border border-gray-400 bg-white px-4 font-lexend text-lg outline-none focus:border-[#F584BE]"
          />
        </div>

        <div>
          <label className="mb-2 block font-lexend text-lg text-black">
            Rua
          </label>

          <textarea
            rows={2}
            defaultValue="Rua dos Pinheiros, 1050 - Ap 42, Pinheiros"
            className="w-full rounded-xl border border-gray-400 bg-white p-4 font-lexend text-lg outline-none focus:border-[#F584BE]"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="mb-2 block font-lexend text-lg text-black">
              Cidade
            </label>

            <input
              type="text"
              defaultValue="São Paulo"
              className="h-14 w-full rounded-xl border border-gray-400 bg-white px-4 font-lexend text-lg outline-none focus:border-[#F584BE]"
            />
          </div>

          <div className="flex-1">
            <label className="mb-2 block font-lexend text-lg text-black">
              Estado
            </label>

            <select className="h-14 w-full rounded-xl border border-gray-400 bg-white px-4 font-lexend text-lg outline-none focus:border-[#F584BE]">
              <option value="SP">SP</option>
              <option value="RJ">RJ</option>
              <option value="MG">MG</option>
              <option value="PB">PB</option>
              <option value="PE">PE</option>
              <option value="CE">CE</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-2 block font-lexend text-lg text-black">
            Telefone
          </label>

          <input
            type="tel"
            defaultValue="11998765432"
            className="h-14 w-full rounded-xl border border-gray-400 bg-white px-4 font-lexend text-lg outline-none focus:border-[#F584BE]"
          />
        </div>

        <button
          type="submit"
          className="mt-4 h-14 w-full rounded-xl border border-black bg-[#F584BE] font-lexend text-xl font-semibold text-white transition hover:bg-[#DD62A1]"
        >
          Editar perfil
        </button>
      </form>

      <EditProfileModal isOpen={showModal} />
    </div>
  );
}

export default EditProfile;

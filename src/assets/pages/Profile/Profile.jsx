import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import ProductCard from "../../components/ProductCard/ProductCard";

import profile from "../../img/Header/sooin-icon.png";

import {
  featuredProducts,
  bt21Products,
} from "../../components/ProductsSection/ProductsSection";

function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("favorites");

  const favoriteProducts = [
    featuredProducts.find((p) => p.id === 4),
    featuredProducts.find((p) => p.id === 7),
    bt21Products.find((p) => p.id === 11),
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-[#F8F8F8] pb-24">
      <Header title="Perfil" onProfile={() => navigate("/profile")} />

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
          <button
            onClick={() => navigate("/edit-profile")}
            className="h-14 rounded-xl border border-black bg-[#F584BE] font-lexend text-[18px] font-semibold text-white transition hover:bg-[#DD62A1]"
          >
            Editar perfil
          </button>

          <button
            onClick={() => navigate("/favorites")}
            className="h-14 rounded-xl border border-black bg-[#F584BE] font-lexend text-[18px] font-semibold text-white transition hover:bg-[#DD62A1]"
          >
            Favoritos
          </button>

          <button
            onClick={() => navigate("/my-orders")}
            className="h-14 rounded-xl border border-black bg-[#F584BE] font-lexend text-[18px] font-semibold text-white transition hover:bg-[#DD62A1]"
          >
            Meus pedidos
          </button>

          <button
            onClick={() => navigate("/settings")}
            className="h-14 rounded-xl border border-black bg-[#F584BE] font-lexend text-[18px] font-semibold text-white transition hover:bg-[#DD62A1]"
          >
            Configurações
          </button>
        </div>
      </div>

      <div className="mt-10 border-t border-[#D9D9D9] pt-5">
        <div className="flex justify-around">
          <button
            onClick={() => setActiveTab("favorites")}
            className={`pb-2 font-lexend text-[20px] font-bold ${
              activeTab === "favorites"
                ? "border-b-2 border-[#F584BE] text-black"
                : "text-[#777777]"
            }`}
          >
            Favoritos
          </button>

          <button
            onClick={() => setActiveTab("orders")}
            className={`pb-2 font-lexend text-[20px] font-bold ${
              activeTab === "orders"
                ? "border-b-2 border-[#F584BE] text-black"
                : "text-[#777777]"
            }`}
          >
            Meus pedidos
          </button>
        </div>

        {activeTab === "favorites" ? (
          <div className="mt-6 px-4">
            <div className="grid grid-cols-2 gap-4">
              {favoriteProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-16 flex justify-center px-4">
            <p className="font-lexend text-[20px] font-medium text-[#777777]">
              Sem pedidos no momento!
            </p>
          </div>
        )}
      </div>

      <Menu />
    </div>
  );
}

export default Profile;

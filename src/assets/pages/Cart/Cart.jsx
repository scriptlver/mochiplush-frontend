import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AddCreditCard from "../../components/Modal/AddCreditCard/AddCreditCard";

import Header from "../../components/Header/Header";
import CartItem from "../../components/CartItem/CartItem";
import Menu from "../../components/Menu/Menu";

import profile from "../../img/Header/sooin-icon.png";
import imagemHelloKitty from "../../img/Home/hello-kitty.png";
import imagemTata from "../../img/Home/tata.png";
import imagemLaviJuan from "../../img/Home/lavi&juan.png";

function Cart() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showAddCreditCard, setShowAddCreditCard] = useState(false);
  useEffect(() => {
    if (location.state?.showAddCreditCard) {
      setShowAddCreditCard(true);

      setTimeout(() => {
        setShowAddCreditCard(false);
      }, 2000);

      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  return (
    <>
      <div className="min-h-screen bg-[#F8F8F8] px-6 pt-6 pb-22">
        <Header
          title="Carrinho"
          image={profile}
          onProfile={() => navigate("/profile")}
        />

        <div className="mt-6 flex flex-col gap-3">
          <CartItem
            imagem={imagemHelloKitty}
            titulo="Pelúcia 18Cm Da Hello Kitty Morango"
            preco="69.99"
            quantidade={1}
          />

          <div onClick={() => navigate("/product")} className="cursor-pointer">
            <CartItem
              imagem={imagemTata}
              titulo="Pelúcia Bt21 BTS TATA 25cm"
              preco="59.99"
              quantidade={1}
            />
          </div>

          <CartItem
            imagem={imagemLaviJuan}
            titulo="Pelúcia FAO Schwarz 9 Macacos Abraçados"
            preco="59.99"
            quantidade={1}
          />
        </div>

        <div className="ml-2 mt-8 space-y-3 font-lexend text-[16px]">
          <div className="flex justify-between text-black">
            <span className="font-bold">Subtotal</span>
            <span>R$ 189.97</span>
          </div>

          <div className="flex justify-between text-black">
            <span className="font-bold">Entrega</span>
            <span>R$ 7.99</span>
          </div>

          <div className="flex justify-between pt-2 text-[20px] text-black">
            <span className="font-bold">Total</span>
            <span className="font-bold text-[#F584BE]">R$ 197.96</span>
          </div>
        </div>

        <button
          onClick={() => navigate("/checkout")}
          className="mt-10 mx-auto block h-14 w-[375px] rounded-xl border border-black bg-[#F584BE] font-lexend text-xl font-semibold text-white transition hover:bg-[#DD62A1]"
        >
          Confirmar pedido
        </button>
      </div>

      <Menu />
      <AddCreditCard
        isOpen={showAddCreditCard}
        onClose={() => setShowAddCreditCard(false)}
      />
    </>
  );
}

export default Cart;

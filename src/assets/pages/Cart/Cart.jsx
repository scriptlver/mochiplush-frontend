import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import CartItem from "../../components/CartItem/CartItem";

import profile from "../../img/Header/sooin-icon.png";
import imagemHelloKitty from "../../img/Home/hello-kitty.png";
import imagemTata from "../../img/Home/tata.png";
import imagemLaviJuan from "../../img/Home/lavi&juan.png";

function Cart() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F8F8] px-6 pt-6">
      <Header title="Carrinho" image={profile} />

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

      <div className="mt-8 space-y-3 font-lexend text-[15px]">
        <div className="flex justify-between text-black">
          <span className="font-bold">Subtotal</span>
          <span>R$ 189.97</span>
        </div>

        <div className="flex justify-between text-black">
          <span className="font-bold">Entrega</span>
          <span>R$ 7.99</span>
        </div>

        <div className="flex justify-between pt-2 text-lg text-black">
          <span className="font-bold">Total</span>
          <span className="font-bold text-[#F584BE]">R$ 197.96</span>
        </div>
      </div>

      <button
        onClick={() => navigate("/checkout")}
        className="mt-10 h-14 w-full rounded-xl border border-black bg-[#F584BE] font-lexend text-xl font-semibold text-white transition hover:bg-[#DD62A1]"
      >
        Confirmar pedido
      </button>
    </div>
  );
}

export default Cart;

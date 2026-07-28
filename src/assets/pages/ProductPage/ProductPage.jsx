import ProductHeader from "../../components/ProductHeader/ProductHeader";
import { useNavigate } from "react-router-dom";
import tata from "../../img/Home/tata.png";

function ProductPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <div className="mx-auto max-w-md min-h-screen bg-white">
        <div className="relative h-[430px] flex items-center justify-center overflow-hidden">
          <ProductHeader />

          <img
            src={tata}
            alt="Pelúcia BT21 TATA"
            className="
      w-[390px]
      h-[390px]
      object-cover
      scale-125
    "
          />
        </div>

        <div className="px-6 pb-10">
          <h1 className="font-lexend text-[26px] font-bold leading-8 text-black">
            Pelúcia Bt21 BTS TATA 25cm
          </h1>

          <h2 className="mt-3 font-lemon text-[30px] text-[#D45998]">
            R$ 59.99
          </h2>

          <div className="mt-8">
            <h3 className="font-lexend text-[22px] font-bold">Descrição</h3>

            <p className="mt-3 font-lexend text-[15px] leading-7 text-[#666666]">
              A Pelúcia BT21 TATA 25cm é perfeita para fãs de BTS. Feita com
              material macio e enchimento de algodão PP, é ideal para
              colecionar, decorar ou presentear, trazendo todo o charme e a
              fofura do personagem TATA.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              onClick={() => navigate("/cart")}
              className="
    font-inter
    text-[16px]
    font-medium
    text-black
    underline-offset-4
    transition-all
    hover:text-[#F07AB7]
  "
            >
              Adicionar ao carrinho
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="
  h-[48px]
  w-[150px]
  rounded-xl
  border
  border-black
  bg-[#F07AB7]
  font-inter
  text-[18px]
  font-medium
  text-white
  shadow-sm
  transition-all
  hover:bg-[#e065a4]
  active:scale-95
"
            >
              Comprar
            </button>
          </div>

          <div className="mt-10">
            <h3 className="font-lexend text-[22px] font-bold">
              Calcular frete
            </h3>

            <p className="mt-2 font-inter text-[17px] text-[#666666]">
              Digite seu CEP
            </p>

            <div className="mt-4 flex gap-2">
              <input
                type="text"
                placeholder="00000-000"
                className="
                  h-[48px]
                  flex-1
                  rounded-xl
                  border
                  border-[#D9D9D9]
                  px-4
                  font-inter
                  outline-none
                  focus:border-[#F584BE]
                "
              />

              <button
                className="
  rounded-xl
  border
  border-black
  bg-[#F584BE]
  px-6
  font-inter
  font-semibold
  text-white
  transition
  hover:bg-[#eb6cac]
"
              >
                Calcular
              </button>
            </div>

            <div className="mt-6 flex justify-between text-[13px]">
              <button
                onClick={() => navigate("/terms-of-use")}
                className="
    font-inter
    font-semibold
    text-[#666666]
    transition-all
    hover:text-[#F07AB7]
  "
              >
                Regras e condições de frete
              </button>

              <button className="font-inter font-semibold text-[#F584BE] hover:underline">
                Não sei meu CEP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

import profile from "../../img/Header/sooin-icon.png";
import card from "../../img/Checkout/sooin-card.png";

function CheckoutCard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F8F8] px-6 pt-2 pb-22">
      <Header title="Checkout" image={profile} />

      <div className="pt-6">
        <div className="mx-auto w-full max-w-[340px]">
          <img src={card} alt="Cartão" className="mb-8 w-full" />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/cart", {
                state: {
                  showAddCreditCard: true,
                },
              });
            }}
            className="space-y-5"
          >
            <div>
              <label className="mb-2 block font-inter text-[16px] font-medium text-black">
                Número do cartão
              </label>

              <input
                type="text"
                placeholder="0000 0000 0000 0000"
                className="h-14 w-full rounded-xl border border-[#A3A3A3] bg-white px-4 font-inter text-[15px] placeholder:text-[#A3A3A3] outline-none transition focus:border-[#F584BE]"
              />
            </div>

            <div>
              <label className="mb-2 block font-inter text-[16px] font-medium text-black">
                Nome do cartão
              </label>

              <input
                type="text"
                placeholder="Nome impresso no cartão"
                className="h-14 w-full rounded-xl border border-[#A3A3A3] bg-white px-4 font-inter text-[15px] placeholder:text-[#A3A3A3] outline-none transition focus:border-[#F584BE]"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="mb-2 block font-inter text-[16px] font-medium text-black">
                  Validade
                </label>

                <input
                  type="text"
                  placeholder="MM/AA"
                  className="h-14 w-full rounded-xl border border-[#A3A3A3] bg-white px-4 font-inter text-[15px] placeholder:text-[#A3A3A3] outline-none transition focus:border-[#F584BE]"
                />
              </div>

              <div className="flex-1">
                <label className="mb-2 block font-inter text-[16px] font-medium text-black">
                  CVV
                </label>

                <input
                  type="password"
                  maxLength={3}
                  placeholder="123"
                  className="h-14 w-full rounded-xl border border-[#A3A3A3] bg-white px-4 font-inter text-[15px] placeholder:text-[#A3A3A3] outline-none transition focus:border-[#F584BE]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-inter text-[16px] font-medium text-black">
                CPF
              </label>

              <input
                type="text"
                placeholder="000.000.000-00"
                className="h-14 w-full rounded-xl border border-[#A3A3A3] bg-white px-4 font-inter text-[15px] placeholder:text-[#A3A3A3] outline-none transition focus:border-[#F584BE]"
              />
            </div>

            <button
              type="submit"
              className="mt-8 h-14 w-full rounded-xl bg-[#F584BE] border border-black font-lexend text-xl font-semibold text-white transition hover:bg-[#DD62A1]"
            >
              Adicionar cartão
            </button>
          </form>
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default CheckoutCard;

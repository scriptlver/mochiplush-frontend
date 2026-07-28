import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import AddressCard from "../../components/AddressCard/AddressCard";
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod";
import SuccessModal from "../../components/Modal/SuccessModal/SuccessModal";

import profile from "../../img/Header/sooin-icon.png";

function Checkout() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFinalizeOrder = () => {
    setIsModalOpen(true);

    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };

  return (
    <div className="relative min-h-screen bg-[#F8F8F8] px-6 pt-2 pb-8">
      <Header
        title="Checkout"
        image={profile}
        onProfile={() => navigate("/profile")}
      />

      <AddressCard />

      <div
        className="mt-6 cursor-pointer"
        onClick={() => navigate("/checkout-card")}
      >
        <PaymentMethod />
      </div>

      <div className="mt-8 px-2 space-y-3 font-lexend text-[15px]">
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
        onClick={handleFinalizeOrder}
        className="mt-10 h-14 w-full rounded-xl border border-black bg-[#F584BE] font-lexend text-xl font-semibold text-white transition hover:bg-[#DD62A1]"
      >
        Finalizar pedido
      </button>

      <SuccessModal isOpen={isModalOpen} />
    </div>
  );
}

export default Checkout;

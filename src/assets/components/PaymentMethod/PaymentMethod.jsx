import { useState } from "react";

import mastercard from "../../img/PaymentMethod/mastercard.png";
import visa from "../../img/PaymentMethod/visa.png";
import elo from "../../img/PaymentMethod/elo.png";
import pix from "../../img/PaymentMethod/pix.png";
import boleto from "../../img/PaymentMethod/boleto.png";
import gpay from "../../img/PaymentMethod/gpay.png";
import applepay from "../../img/PaymentMethod/applepay.png";

function PaymentMethod() {
  const [selected, setSelected] = useState("Visa");

  const methods = [
    {
      name: "Mastercard",
      image: mastercard,
    },
    {
      name: "Visa",
      image: visa,
    },
    {
      name: "Elo",
      image: elo,
    },
    {
      name: "Pix",
      image: pix,
    },
    {
      name: "Boleto",
      image: boleto,
    },
    {
      name: "Google Pay",
      image: gpay,
    },
    {
      name: "Apple Pay",
      image: applepay,
    },
  ];

  return (
    <div className="rounded-[20px] border-gray-100 bg-white p-4">
      <h2 className="mb-4 font-lexend text-[16px] font-semibold text-black">
        Métodos de pagamento
      </h2>

      <div className="space-y-5">
        {methods.map((method) => (
          <button
            key={method.name}
            onClick={() => setSelected(method.name)}
            className="flex w-full items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <img
                src={method.image}
                alt={method.name}
                className="h-7 w-auto object-contain"
              />

              <span className="font-lexend text-[16px] font-medium text-black">
                {method.name}
              </span>
            </div>

            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full border transition-colors ${
                selected === method.name
                  ? "border-[#2BA4E8]"
                  : "border-[#D0D0D0]"
              }`}
            >
              {selected === method.name && (
                <div className="h-3 w-3 rounded-full bg-[#2BA4E8]" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default PaymentMethod;
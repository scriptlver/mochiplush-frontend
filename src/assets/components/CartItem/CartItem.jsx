import React from "react";
import { Trash2, Plus, Minus } from "lucide-react";

function CartItem({ imagem, titulo, preco, quantidade = 1 }) {
  return (
    <div className="flex h-28 w-full rounded-2xl bg-white p-3">
      <img
        src={imagem}
        alt={titulo}
        className="h-24 w-24 rounded-xl object-cover"
      />

      <div className="ml-3 flex flex-1 flex-col justify-between self-stretch py-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 font-lexend text-sm leading-tight text-black">
            {titulo}
          </h3>

          <button
            className="p-1 text-[#D45998] transition-colors hover:text-[#F584BE]"
            aria-label="Remover item"
          >
            <Trash2 size={20} />
          </button>
        </div>

        <div className="mt-2 flex items-end justify-between">
          <span className="font-lemon text-sm text-[#F584BE]">R$ {preco}</span>

          <div className="flex items-center gap-2 rounded-full border border-gray-100 bg-[#F8F8F8] px-2 py-0.5">
            <button className="px-1 font-lexend text-xs text-gray-500 hover:text-black">
              <Minus size={12} />
            </button>

            <span className="min-w-[12px] text-center font-lexend text-xs text-black">
              {quantidade}
            </span>

            <button className="px-1 font-lexend text-xs text-gray-500 hover:text-black">
              <Plus size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

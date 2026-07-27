import { MapPin, Pencil } from "lucide-react";

function AddressCard() {
  return (
    <div className="w-full rounded-2xl border border-gray-100 bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin size={20} className="text-[#ED0006]" />
          <span className="font-lexend text-[16px] font-semibold text-black">
            Endereço
          </span>
        </div>
        <button className="mr-2 flex items-center gap-1 text-[14px] font-medium text-[#D45998] transition-all hover:text-[#F07AB7]">
          <Pencil size={14} />
          Edit
        </button>
      </div>

      <div className="mt-2 font-lexend text-[14px] leading-[20px] text-[#666666]">
        <p>Kim Soo-in ( +5511998765432 )</p>
        <p>Rua dos Pinheiros, 1050 - Ap 42</p>
        <p>PINHEIROS</p>
        <p>SÃO PAULO</p>
        <p>BRASIL, 05422-001</p>
      </div>
    </div>
  );
}

export default AddressCard;

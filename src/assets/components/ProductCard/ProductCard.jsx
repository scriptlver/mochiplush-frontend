import { Heart } from "lucide-react";

function ProductCard({ image, price, name, favorite = false }) {
  return (
    <div className="w-full flex flex-col">
      <div className="aspect-square w-full rounded-2xl flex items-center justify-center p-2">
        <img src={image} alt={name} className="h-full w-full object-contain" />
      </div>

      <div className="mt-2 w-full px-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-lemon text-[19px] leading-none text-[#D45998]">
            {price}
          </h3>

          <button className="shrink-0 p-1">
            <Heart
              size={16}
              strokeWidth={1.8}
              fill={favorite ? "#FF0000" : "none"}
              className={favorite ? "text-red-500" : "text-black"}
            />
          </button>
        </div>

        <p className="mt-2 font-lexend text-[14px] leading-snug text-black">
          {name}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;

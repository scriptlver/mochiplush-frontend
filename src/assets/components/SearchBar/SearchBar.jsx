import { Search, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SearchBar({ showCart = true }) {
  const navigate = useNavigate();
  return (
    <div className="mt-6 flex items-center gap-3">
      <div className="flex h-12 flex-1 items-center rounded-xl border border-gray-400 bg-white px-4">
        <input
          type="text"
          placeholder=""
          className="flex-1 bg-transparent outline-none"
        />

        <Search size={24} className="text-gray-500" />
      </div>

      {showCart && (
        <button
          onClick={() => navigate("/cart")}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm"
        >
          <ShoppingCart size={24} className="text-black" />
        </button>
      )}
    </div>
  );
}

export default SearchBar;

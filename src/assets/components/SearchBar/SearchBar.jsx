import { Search, ShoppingCart } from "lucide-react";

function SearchBar() {
  return (
    <div className="mt-6 flex items-center gap-3">
      <div className="flex h-12 flex-1 items-center rounded-xl bg-white px-4 border border-gray-400">
        <input
          type="text"
          placeholder=""
          className="flex-1 bg-transparent outline-none"
        />

        <Search size={24} className="text-gray-500" />
      </div>

      <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
        <ShoppingCart size={24} className="text-black" />
      </button>
    </div>
  );
}

export default SearchBar;

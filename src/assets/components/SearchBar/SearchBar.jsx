import { Search, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { allProducts } from "../ProductsSection/ProductsSection";

function SearchBar({ showCart = true }) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const results = allProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="mt-6 flex items-center gap-3">
      <div className="flex h-12 flex-1 items-center rounded-2xl border border-gray-400 bg-white px-4">
        <Search size={22} className=" mr-2 text-gray-500" />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent outline-none"
        />
      </div>

      {showCart && (
        <button
          onClick={() => navigate("/cart")}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm"
        >
          <ShoppingCart size={24} className="text-black" />
        </button>
      )}

      {search.length > 0 && (
        <div className="absolute top-14 left-0 z-50 w-full rounded-2xl bg-white p-3 shadow-lg">
          {results.length > 0 ? (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  if (product.id === 14) {
                    navigate("/product");
                  }
                }}
                className="flex cursor-pointer items-center gap-3 rounded-xl p-2 hover:bg-gray-100"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-12 w-12 rounded-lg object-cover"
                />

                <div>
                  <p className="font-lexend text-sm font-semibold">
                    {product.name}
                  </p>

                  <p className="text-sm text-gray-500">{product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="p-3 text-center text-gray-500">
              Produto não encontrado
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;

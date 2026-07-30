import { Search, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBar({ showCart = true, products = [], size = "normal" }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const results = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="relative flex mt-6 justify-center items-center gap-3">
      <div
        className={`flex w-[290px] items-center rounded-xl bg-white px-4 shadow-sm ${
          size === "large" ? "h-12 w-[365px]" : "h-12 w-[290px]"
        }`}
      >
        <Search size={20} className="mr-2 text-gray-500" />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar"
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
        <div className="absolute top-15 left-1/2 z-50 max-h-56 w-[88%] -translate-x-1/2 overflow-y-auto rounded-lg bg-white shadow-lg">
          <div className="rounded-t-lg bg-[#FF40A3] px-4 py-2">
            <p className="font-lexend text-sm font-semibold text-white">
              Pelúcias
            </p>
          </div>

          <div className="px-2 py-2">
            {results.length > 0 ? (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    if (product.link) {
                      navigate(product.link);
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
        </div>
      )}
    </div>
  );
}

export default SearchBar;

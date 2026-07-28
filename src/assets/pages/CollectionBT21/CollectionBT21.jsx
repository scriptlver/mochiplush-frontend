import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProductCard";

import { bt21Products } from "../../components/ProductsSection/ProductsSection";

import profile from "../../img/Header/sooin-icon.png";

function CollectionBT21() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F8F8] px-6 pt-2">
      <Header
        title="Coleção BT21"
        image={profile}
        onProfile={() => navigate("/profile")}
      />

      <p className="-mt-5 text-center font-lexend text-[14px] text-[#A8A8A8]">
        {bt21Products.length} produtos
      </p>

      <div className="mt-6">
        <SearchBar showCart={false} />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4">
        {bt21Products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onClick={() => {
              if (product.id === 14) {
                navigate("/product");
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default CollectionBT21;
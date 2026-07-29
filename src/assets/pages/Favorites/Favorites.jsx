import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProductCard";

import {
  featuredProducts,
  bt21Products,
} from "../../components/ProductsSection/ProductsSection";

import profile from "../../img/Header/sooin-icon.png";
import Menu from "../../components/Menu/Menu";

function Favorites() {
  const navigate = useNavigate();
  const favoriteProducts = [...featuredProducts, ...bt21Products].filter(
    (product) => product.favorite,
  );

  return (
    <div className="min-h-screen bg-[#F8F8F8] px-6 pt-2 pb-22">
      <Header
        title="Favoritos"
        image={profile}
        onProfile={() => navigate("/profile")}
      />

      <p className="-mt-5 text-center font-lexend text-[14px] text-[#A8A8A8]">
        {favoriteProducts.length} produtos
      </p>

      <div className="mt-6">
        <SearchBar showCart={false} />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4">
        {favoriteProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Menu />
    </div>
  );
}

export default Favorites;

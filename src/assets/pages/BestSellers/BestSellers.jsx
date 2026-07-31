import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import {
  featuredProducts,
  bt21Products,
} from "../../components/ProductsSection/ProductsSection";
import { newsProducts } from "../../components/ProductNews/ProductNews";
import Menu from "../../components/Menu/Menu";

import profile from "../../img/Header/sooin-icon.png";

function BestSellers() {
  const navigate = useNavigate();

  const allProducts = [...featuredProducts, ...bt21Products, ...newsProducts];

  const randomFeatured = [...featuredProducts]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  const randomBt21 = [...bt21Products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  const randomNews = [...newsProducts]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  const bestSellerProducts = [...randomFeatured, ...randomBt21, ...randomNews];

  return (
    <>
      <div className="min-h-screen bg-[#F8F8F8] px-6 pt-2 pb-22">
        <Header
          title="Mais vendidos"
          image={profile}
          onProfile={() => navigate("/profile")}
        />

        <p className="-mt-5 text-center font-lexend text-[14px] text-[#A8A8A8]">
          {bestSellerProducts.length} produtos
        </p>

        <div className="mt-6">
          <SearchBar
            showCart={false}
            products={bestSellerProducts}
            size="large"
          />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4">
          {bestSellerProducts.map((product) => (
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

      <Menu />
    </>
  );
}

export default BestSellers;

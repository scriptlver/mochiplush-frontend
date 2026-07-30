import { useNavigate } from "react-router-dom";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import ProductsSection, {
  allProducts,
} from "../../components/ProductsSection/ProductsSection";
import bannerHeader from "../../img/Home/header.png";
import Menu from "../../components/Menu/Menu";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderHome products={allProducts} />

      <div className="relative -mt-12 rounded-t-[32px] bg-[#F8F8F8] px-4 pt-6 pb-22">
        <div className="relative mb-8 overflow-hidden rounded-2xl">
          <img
            src={bannerHeader}
            alt="Banner"
            className="w-full object-cover"
          />

          <button
            onClick={() => navigate("/news")}
            className="absolute bottom-3 left-25 rounded-md bg-[#F07AB7] px-2.5 py-1 font-inter text-[8px] font-medium text-white shadow-sm transition-all hover:bg-[#e065a4] active:scale-95"
          >
            Saiba mais
          </button>
        </div>

        <ProductsSection />
      </div>

      <Menu />
    </>
  );
}

export default Home;

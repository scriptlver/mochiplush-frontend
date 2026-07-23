import HeaderHome from "../../components/HeaderHome/HeaderHome";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import bannerHeader from "../../img/Home/header.png";

function Home() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <HeaderHome />

      <div className="relative -mt-12 rounded-t-[32px] bg-[#F8F8F8] px-4 pt-6 pb-20">
        <div className="relative mb-8 overflow-hidden rounded-2xl">
          <img
            src={bannerHeader}
            alt="Banner"
            className="w-full object-cover"
          />

          <button className="absolute bottom-3 left-22 bg-[#F07AB7] hover:bg-[#e065a4] text-white font-inter font-medium text-[8px] px-2.5 py-1 rounded-md shadow-sm transition-all active:scale-95">
            Saiba mais
          </button>
        </div>

        <ProductsSection />
      </div>
    </div>
  );
}

export default Home;

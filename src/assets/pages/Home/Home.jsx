import HeaderHome from "../../components/HeaderHome/HeaderHome";
import bannerHeader from "../../img/Home/header.png";

function Home() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <HeaderHome />

      <div className="relative -mt-12 rounded-t-[32px] bg-[#F8F8F8] px-4 pt-6 pb-20">
        <div className="mb-8 overflow-hidden">
          <img
            src={bannerHeader}
            alt="Banner Promocional"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

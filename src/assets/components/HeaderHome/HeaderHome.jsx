import logo from "../../img/MochiPlush/mp-logo.png";
import SearchBar from "../SearchBar/SearchBar";
import CategoryList from "../CategoryList/CategoryList";

function HeaderHome() {
  return (
    <header className="relative bg-[#F584BE] px-6 pt-66 pb-8">
      <div className="flex justify-center">
        <img
          src={logo}
          alt="MochiPlush"
          className="absolute top-4 h-32 w-auto object-contain"
        />
      </div>

      <div className="-mt-38">
        <SearchBar />
      </div>
      <div className="mt-8">
        <CategoryList />
      </div>
    </header>
  );
}

export default HeaderHome;

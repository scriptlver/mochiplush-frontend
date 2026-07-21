import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Header({ title, image }) {
  const navigate = useNavigate();

  return (
    <header className="grid grid-cols-[40px_1fr_40px] items-center py-6">
      <div className="flex justify-start">
        <button
          onClick={() => navigate(-1)}
          className="p-1 hover:opacity-75 transition-opacity"
        >
          <ChevronLeft size={30} className="text-black" />
        </button>
      </div>

      <h1 className="text-center font-lexend text-[26px] font-bold text-black leading-tight">
        {title}
      </h1>

      <div className="flex justify-end">
        {image && (
          <img
            src={image}
            alt="Perfil"
            className="h-10 w-10 rounded-full object-cover"
          />
        )}
      </div>
    </header>
  );
}

export default Header;

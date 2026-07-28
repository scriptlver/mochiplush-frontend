import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Header({ title, image, onProfile }) {
  const navigate = useNavigate();

  return (
    <header className="grid grid-cols-[40px_1fr_40px] items-center py-6">
      <button
        onClick={() => navigate(-1)}
        className="p-1 transition-opacity hover:opacity-75"
      >
        <ChevronLeft size={28} className="text-black" />
      </button>

      <h1 className="text-center font-lexend text-[26px] font-bold leading-tight text-black">
        {title}
      </h1>

      <div className="flex justify-end">
        {image && (
          <button
            onClick={onProfile}
            className="transition-opacity hover:opacity-75"
          >
            <img
              src={image}
              alt="Perfil"
              className="h-10 w-10 rounded-full object-cover"
            />
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Header({ title, image }) {
  const navigate = useNavigate();

  return (
    <header className="relative flex items-center justify-center py-6">
  <button
    onClick={() => navigate(-1)}
    className="absolute left-1"
  >
    <ChevronLeft size={30} className="text-black" />
  </button>

  <h1 className="font-lexend text-[28px] font-bold text-black">
    {title}
  </h1>

  {image && (
    <img
      src={image}
      alt="Perfil"
      className="absolute right-4 h-14 w-14 rounded-full object-cover"
    />
  )}
</header>
  );
}

export default Header;

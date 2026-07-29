import { House, Heart, ShoppingBasket, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { icon: House, path: "/home" },
    { icon: Heart, path: "/favorites" },
    { icon: ShoppingBasket, path: "/cart" },
    { icon: User, path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 mx-auto flex h-16 max-w-md items-center justify-around bg-[#262626]">
      {items.map(({ icon: Icon, path }) => (
        <button
          key={path}
          onClick={() => navigate(path)}
          className="transition hover:scale-110"
        >
          <Icon
            size={36}
            strokeWidth={1.5}
            className={
              location.pathname === path ? "text-[#F584BE]" : "text-white"
            }
          />
        </button>
      ))}
    </nav>
  );
}

export default Menu;

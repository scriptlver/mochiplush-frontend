import { Flame, Heart, Gift, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

import CategoryButton from "../CategoryButton/CategoryButton";

function CategoryList() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between px-2">
      <CategoryButton icon={Flame} title="Mais vendidos" />

      <div onClick={() => navigate("/favorites")} className="cursor-pointer">
        <CategoryButton icon={Heart} title="Favoritos" />
      </div>

      <CategoryButton icon={Gift} title="Kits" />

      <CategoryButton icon={Sparkles} title="Novidades" />
    </div>
  );
}

export default CategoryList;

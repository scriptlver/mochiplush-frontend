import { Flame, Heart, Gift, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

import CategoryButton from "../CategoryButton/CategoryButton";

function CategoryList() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between px-2">
      <div onClick={() => navigate("/news")} className="cursor-pointer">
        <CategoryButton icon={Flame} title="Novidades" />
      </div>

      <div onClick={() => navigate("/favorites")} className="cursor-pointer">
        <CategoryButton icon={Heart} title="Favoritos" />
      </div>

      <CategoryButton icon={Gift} title="Mais vendidos" />

      <CategoryButton icon={Sparkles} title="Coleção BT21" />
    </div>
  );
}

export default CategoryList;
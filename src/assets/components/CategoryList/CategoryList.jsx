import { Flame, Heart, Gift, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

import CategoryButton from "../CategoryButton/CategoryButton";

function CategoryList() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center gap-6">
      <div onClick={() => navigate("/news")} className="cursor-pointer">
        <CategoryButton icon={Flame} title="Novidades" />
      </div>

      <div onClick={() => navigate("/favorites")} className="cursor-pointer">
        <CategoryButton icon={Heart} title="Favoritos" />
      </div>

      <div onClick={() => navigate("/best-sellers")} className="cursor-pointer">
        <CategoryButton icon={Gift} title="Mais vendidos" />
      </div>

      <div onClick={() => navigate("/bt21")} className="cursor-pointer">
        <CategoryButton icon={Sparkles} title="Coleção BT21" />
      </div>
    </div>
  );
}

export default CategoryList;

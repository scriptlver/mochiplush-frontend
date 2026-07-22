import { Flame, Heart, Gift, Sparkles } from "lucide-react";

import CategoryButton from "../CategoryButton/CategoryButton";

function CategoryList() {
  return (
    <div className="flex justify-between px-2">
      <CategoryButton icon={Flame} title="Mais vendidos" />

      <CategoryButton icon={Heart} title="Favoritos" />

      <CategoryButton icon={Gift} title="Kits" />

      <CategoryButton icon={Sparkles} title="Novidades" />
    </div>
  );
}

export default CategoryList;

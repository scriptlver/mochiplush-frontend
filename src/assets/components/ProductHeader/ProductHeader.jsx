import { ChevronLeft, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProductHeader() {
  const navigate = useNavigate();

  return (
    <div className="absolute top-10 left-0 w-full flex items-center justify-between px-5 z-20">
      <button onClick={() => navigate(-1)}>
        <ChevronLeft size={32} />
      </button>

      <button>
        <Heart size={32} />
      </button>
    </div>
  );
}

export default ProductHeader;

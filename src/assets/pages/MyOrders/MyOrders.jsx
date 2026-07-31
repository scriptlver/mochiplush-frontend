import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

import profile from "../../img/Header/sooin-icon.png";

function MyOrders() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F8F8] px-6 pt-2 pb-22">
      <Header
        title="Meus pedidos"
        image={profile}
        onProfile={() => navigate("/profile")}
      />

      <div className="flex h-[65vh] items-center justify-center px-6">
        <p className="text-center font-lexend text-[22px] font-medium text-[#777777]">
          Sem pedidos no momento!
        </p>
      </div>

      <Menu />
    </div>
  );
}

export default MyOrders;

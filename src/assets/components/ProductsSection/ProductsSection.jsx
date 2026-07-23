import ProductCard from "../ProductCard/ProductCard";

import bob from "../../img/Home/bob.png";
import tito from "../../img/Home/tito.png";
import sansao from "../../img/Home/sansao.png";
import garfield from "../../img/Home/garfield.png";

import koya from "../../img/Home/koya.png";
import rj from "../../img/Home/rj.png";
import shooky from "../../img/Home/shooky.png";
import mang from "../../img/Home/mang.png";
import chimmy from "../../img/Home/chimmy.png";
import tata from "../../img/Home/tata.png";
import cooky from "../../img/Home/cooky.png";

const featuredProducts = [
  {
    id: 1,
    image: bob,
    price: "R$ 199,99",
    name: "Pelúcia Fuggler Bob Esponja 23cm",
  },
  {
    id: 2,
    image: tito,
    price: "R$ 79,99",
    name: "Squishmallows - Pelúcia 30cm Do Tito, O Tucano",
  },
  {
    id: 3,
    image: sansao,
    price: "R$ 89,99",
    name: "Pelúcia Sansão Coelho 35 Cm",
  },
  {
    id: 4,
    image: garfield,
    price: "R$ 79,99",
    name: "Pelúcia - Garfield Bebê",
  },
];

const bt21Products = [
  {
    id: 5,
    image: koya,
    price: "R$ 59,99",
    name: "Pelúcia Bt21 BTS Koya 25cm",
  },
  {
    id: 6,
    image: rj,
    price: "R$ 59,99",
    name: "Pelúcia Bt21 BTS RJ 25cm",
  },
  {
    id: 7,
    image: shooky,
    price: "R$ 59,99",
    name: "Pelúcia Bt21 BTS SHOOKY 25cm",
  },
  {
    id: 8,
    image: mang,
    price: "R$ 59,99",
    name: "Pelúcia Bt21 BTS MANG 25cm",
  },
  {
    id: 9,
    image: chimmy,
    price: "R$ 59,99",
    name: "Pelúcia Bt21 BTS CHIMMY 25cm",
  },
  {
    id: 9,
    image: tata,
    price: "R$ 59,99",
    name: "Pelúcia Bt21 BTS TATA 25cm",
  },
  {
    id: 9,
    image: cooky,
    price: "R$ 59,99",
    name: "Pelúcia Bt21 BTS COOKY 25cm",
  },
];

function ProductsSection() {
  return (
    <>
      <section className="mt-12 w-full px-4">
        <h2 className="mb-4 pl-2 font-lexend text-[20px] font-bold text-black">
          Produtos em destaque
        </h2>

        <div className="grid w-full grid-cols-2 gap-x-2 gap-y-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      <section className="mt-12 w-full px-4">
        <h2 className="mb-4 pl-2 font-lexend text-[20px] font-bold text-black">
          Coleção BT21
        </h2>

        <div className="grid w-full grid-cols-2 gap-x-2 gap-y-4">
          {bt21Products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductsSection;

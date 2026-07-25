import { useNavigate } from "react-router-dom";

import ProductCard from "../ProductCard/ProductCard";

import bob from "../../img/Home/bob.png";
import tito from "../../img/Home/tito.png";
import sansao from "../../img/Home/sansao.png";
import garfield from "../../img/Home/garfield.png";

import hellokitty from "../../img/Home/hello-kitty.png";
import lavijuan from "../../img/Home/lavi&juan.png";
import pikachu from "../../img/Home/pikachu.png";
import stitch from "../../img/Home/stitch.png";

import koya from "../../img/Home/koya.png";
import rj from "../../img/Home/rj.png";
import shooky from "../../img/Home/shooky.png";
import mang from "../../img/Home/mang.png";

import headerBT21 from "../../img/Home/headerBT21.png";

export const featuredProducts = [
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
    image: hellokitty,
    price: "R$ 69,99",
    name: "Pelúcia 18Cm Da Hello Kitty Morango",
    favorite: true,
  },
  {
    id: 5,
    image: pikachu,
    price: "R$ 109,99",
    name: "Pokémon Pelúcia do Pikachu com Som",
  },
  {
    id: 6,
    image: stitch,
    price: "R$ 119,99",
    name: "Pelúcia 17cm Stitch Com Cheiro E Som",
  },
  {
    id: 7,
    image: lavijuan,
    price: "R$ 59,99",
    name: "Pelúcia FAO Schwarz 9 Macacos Abraçados",
    favorite: true,
  },
  {
    id: 8,
    image: garfield,
    price: "R$ 79,99",
    name: "Pelúcia - Garfield Bebê",
  },
];

export const bt21Products = [
  {
    id: 9,
    image: koya,
    price: "R$ 59,99",
    name: "Pelúcia Bt21 BTS Koya 25cm",
  },
  {
    id: 10,
    image: rj,
    price: "R$ 59,99",
    name: "Pelúcia Bt21 BTS RJ 25cm",
  },
  {
    id: 11,
    image: shooky,
    price: "R$ 59,99",
    name: "Pelúcia Bt21 BTS SHOOKY 25cm",
    favorite: true,
  },
  {
    id: 12,
    image: mang,
    price: "R$ 59,99",
    name: "Pelúcia Bt21 BTS MANG 25cm",
  },
];

function ProductsSection() {
  const navigate = useNavigate();

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

        <p
          onClick={() => navigate("/news")}
          className="mt-5 mr-2 cursor-pointer text-right font-inter text-[18px] font-medium text-black transition-colors hover:text-[#F584BE]"
        >
          Ver mais
        </p>
      </section>

      <div className="mt-10 px-4">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={headerBT21}
            alt="Banner BT21"
            className="w-full object-cover"
          />

          <button
            className="
              absolute bottom-3 left-20
              rounded-md
              bg-[#477CB3]
              px-2.5 py-1
              font-inter
              text-[8px]
              font-medium
              text-white
              shadow-sm
              transition-all
              hover:bg-[#3096DF]
              active:scale-95
            "
          >
            Saiba mais
          </button>
        </div>
      </div>

      <section className="mt-8 w-full px-4">
        <h2 className="mb-4 pl-2 font-lexend text-[20px] font-bold text-black">
          Coleção BT21
        </h2>

        <div className="grid w-full grid-cols-2 gap-x-2 gap-y-4">
          {bt21Products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <p
          onClick={() => navigate("/novidades")}
          className="mt-5 mr-2 cursor-pointer text-right font-inter text-[18px] font-medium text-black transition-colors hover:text-[#F584BE]"
        >
          Ver mais
        </p>
      </section>
    </>
  );
}

export default ProductsSection;
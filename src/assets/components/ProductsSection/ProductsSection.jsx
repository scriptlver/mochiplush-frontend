import ProductCard from "../ProductCard/ProductCard";

import bob from "../../img/Home/bob.png";
import tito from "../../img/Home/tito.png";
import sansao from "../../img/Home/sansao.png";
import garfield from "../../img/Home/garfield.png";

const products = [
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

function ProductsSection() {
  return (
    <>
      <section className="mt-12 w-full px-4">
        <h2 className="mb-4 pl-2 font-lexend text-[20px] font-bold text-black">
          Produtos em destaque
        </h2>

        <div className="grid w-full grid-cols-2 gap-x-2 gap-y-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      <section className="mt-12 w-full px-4">
        <h2 className="mb-4 pl-2 font-lexend text-[20px] font-bold text-black">
          Coleção BT21
        </h2>

        <div className="grid w-full grid-cols-2 gap-x-2 gap-y-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductsSection;

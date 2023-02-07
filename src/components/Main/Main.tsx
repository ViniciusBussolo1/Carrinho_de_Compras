import { useState } from "react";

import { Products } from "../../data/produtos";

import { FaArrowRight, FaTimes } from "react-icons/fa";

import Quantity from "../Quantity/Quantity";
import "./styles.scss";

export default function Main() {
  const [quantity, setQuantity] = useState(0);

  function handleQuantity(numberQuantity: any) {
    setQuantity(numberQuantity);
  }

  return (
    <main>
      <h1>Seu Carrinho</h1>
      <div className="container_main">
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Products.map((product, index) => (
              <Quantity product={product} key={index} event={handleQuantity} />
            ))}
          </tbody>
        </table>
        <aside>
          <h2>Resumo da compra</h2>
          <div className="info">
            <div className="div_subTotal">
              <span>Sub-total</span>
              <span>R$ 318</span>
            </div>

            <div className="div_Frete">
              <span>Frete</span>
              <span>Gratuito</span>
            </div>

            <div>
              <button className="button_cupom">
                Adicionar cupom de desconto
                <FaArrowRight size={12} />
              </button>
            </div>
          </div>
          <div className="div_total">
            <span>Total</span>
            <span>R$ 319</span>
          </div>
          <button className="button_compra">Finalizar Compra</button>
        </aside>
      </div>
    </main>
  );
}

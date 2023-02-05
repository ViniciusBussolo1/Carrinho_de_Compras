import { Products } from "../../data/produtos";

import { FaArrowRight } from "react-icons/fa";

import X from "../../assets/icon_X.svg";

import "./styles.scss";

export default function Main() {
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
              <tr key={index}>
                <td>
                  <div className="div_product">
                    <img className="img" src={product.img} alt="" />
                    <div>
                      <span className="product_name">{product.name}</span>
                      <span className="product_color">{product.color}</span>
                    </div>
                  </div>
                </td>
                <td className="td_price">R$ {product.price}</td>
                <td className="product_quantity">
                  <button className="button_fewer">-</button>
                  <span>2</span>
                  <button className="button_more">+</button>
                </td>
                <td className="td_total">R$ 240</td>
                <td className="td_X">
                  <button className="button_X">
                    <img src={X} alt="" />
                  </button>
                </td>
              </tr>
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

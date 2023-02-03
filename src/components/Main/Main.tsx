import { Products } from "../../data/produtos";

import X from "../../assets/icon_X.svg";
import Minus from "../../assets/icon_Minus.svg";
import Plus from "../../assets/icon_Plus.svg";

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
          <h1>sadds</h1>
        </aside>
      </div>
    </main>
  );
}

import { useEffect, useState } from "react";

import { api } from "../../Api";

import { FaArrowRight } from "react-icons/fa";

import "./styles.scss";
import ItemsTable from "../ItemsTable/ItemsTable";

export interface productsProps {
  _id?: string;
  name: string;
  image: string;
  color: string;
  price: string;
  quantity: number;
}

export default function Main() {
  const [products, setProducts] = useState<productsProps[]>([]);

  async function fetchData() {
    let response = await api.get("/item");

    setProducts(response.data);
  }

  async function handleQuantity(item: productsProps, value: string) {
    let newQuantity = item.quantity;

    if (value === "add") {
      newQuantity += 1;
    } else if (value == "remove") {
      if (newQuantity === 1) {
        return;
      }
      newQuantity -= 1;
    }

    const newData = { ...item, quantity: newQuantity };
    delete newData._id;

    let response = await api.put(`/item/${item._id}`, newData);

    fetchData();
  }

  function handleTotal() {
    let total = 0;

    for (let item of products) {
      let price = parseInt(item.price);
      total += price * item.quantity;
    }

    return total;
  }

  const getTotal = handleTotal();

  useEffect(() => {
    fetchData();
  }, []);

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
            {products.map((item, index) => (
              <ItemsTable
                item={item}
                key={index}
                handleQuantity={handleQuantity}
              />
            ))}
          </tbody>
        </table>
        <aside>
          <h2>Resumo da compra</h2>
          <div className="info">
            <div className="div_subTotal">
              <span>Sub-total</span>
              <span>R$ {getTotal}</span>
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
            <span>R$ {getTotal}</span>
          </div>
          <button className="button_compra">Finalizar Compra</button>
        </aside>
      </div>
    </main>
  );
}

import { useState } from "react";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";

interface quantityProps {
  event: (quantity: number) => void;
  product: {
    name: string;
    color: string;
    img: string;
    price: string;
  };
}
export default function Quantity(props: quantityProps) {
  const [numberQuantity, setQuantity] = useState(0);

  function handleReduceQuantity() {
    if (numberQuantity <= 0) {
      return;
    } else {
      setQuantity(numberQuantity - 1);
      props.event(numberQuantity);
    }
  }

  function handleAddQuantity() {
    setQuantity(numberQuantity + 1);
    props.event(numberQuantity);
  }

  return (
    <tr>
      <td>
        <div className="div_product">
          <img className="img" src={props.product.img} alt="" />
          <div>
            <span className="product_name">{props.product.name}</span>
            <span className="product_color">{props.product.color}</span>
          </div>
        </div>
      </td>
      <td className="td_price">{props.product.price}</td>
      <td className="product_quantity">
        <button onClick={handleReduceQuantity} className="button_fewer">
          <FaMinus size={12} />
        </button>
        <span>{numberQuantity}</span>
        <button onClick={handleAddQuantity} className="button_more">
          <FaPlus size={12} />
        </button>
      </td>
      <td className="td_total">
        {numberQuantity === 0
          ? "R$ 0"
          : `R$ ${parseInt(props.product.price) * numberQuantity}`}
      </td>
      <td className="td_X">
        <button className="button_X">
          <FaTimes size={16} />
        </button>
      </td>
    </tr>
  );
}

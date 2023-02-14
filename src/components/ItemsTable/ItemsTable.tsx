import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";

import { productsProps } from "../Main/Main";

interface itemsTableProps {
  item: {
    _id?: string;
    name: string;
    image: string;
    color: string;
    price: string;
    quantity: number;
  };
  handleQuantity: (item: productsProps, value: string) => void;
}

export default function ItemsTable(props: itemsTableProps) {
  return (
    <tr>
      <td>
        <div className="div_product">
          <img src={props.item.image} alt="" className="img" />
          <div>
            <span className="product_name">{props.item.name}</span>
            <span className="product_color">{props.item.color}</span>
          </div>
        </div>
      </td>
      <td className="td_price">R$ {props.item.price}</td>
      <td className="product_quantity">
        <button
          className="button_fewer"
          onClick={() => props.handleQuantity(props.item, "remove")}
        >
          <FaMinus size={12} />
        </button>
        <span>{props.item.quantity}</span>
        <button
          className="button_more"
          onClick={() => props.handleQuantity(props.item, "add")}
        >
          <FaPlus size={12} />
        </button>
      </td>
      <td className="td_total">
        R$ {parseInt(props.item.price) * props.item.quantity}
      </td>
      <td className="td_X">
        <button className="button_X">
          <FaTimes size={16} />
        </button>
      </td>
    </tr>
  );
}

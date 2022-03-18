import React, { useContext } from "react";
import { ShopContext } from "../../Context/context";

const BasketListItem = (props) => {
  const { id, name, price, quantity } =
    props;

  const { incrementQuantity,decrementQuantity,removeFromBasket } = useContext(ShopContext);


  return (
    <li className="collection-item ">
      {name} x {quantity} = {price * quantity}
      <span className="secondary-content">
        <a
          className="waves-effect waves-light btn btnq"
          onClick={() => incrementQuantity(id)}
        >
          <i className="material-icons left">exposure_plus_1</i>add
        </a>
        <a
          className="waves-effect waves-light btn btnq"
          onClick={() => decrementQuantity(id)}
          style={{ margin: " 0px 10px " }}
        >
          <i className="material-icons left">exposure_minus_1</i>
          remove
        </a>
        <a
          className="waves-effect waves-light btn btnq"
          onClick={() => removeFromBasket(id)}
        >
          <i className="material-icons basket-delete">delete_forever</i>
        </a>
      </span>
    </li>
  );
};

export default BasketListItem;

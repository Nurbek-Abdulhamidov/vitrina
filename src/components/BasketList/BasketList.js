import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../Context/context";
import BasketListItem from "../BasketListItem/BasketListItem";

const BasketList = () => {
  const { order = [], handleBasketShow = Function.prototype } =
    useContext(ShopContext);
  const totalPirce = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <div className="bsk">
      <ul className="collection basket-list">
        <li className="collection-item active">Basket</li>
        {order.length ? (
          order.map((item) => {
            return <BasketListItem key={item.id} {...item} />;
          })
        ) : (
          <li className="collection-item">Basket is empty</li>
        )}
        <li className="collection-item active">
          Total cost: {totalPirce}
          <b> $</b>
        </li>
        <span
          className="material-icons basket-close"
          onClick={handleBasketShow}
        >
          close
        </span>
      </ul>
    </div>
  );
};

export default BasketList;

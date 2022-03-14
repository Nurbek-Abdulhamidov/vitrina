import React from "react";
import BasketListItem from "../BasketListItem/BasketListItem";

const BasketList = (props) => {
  const { order, decrementQuantity, incrementQuantity } = props;
  const totalPirce = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <div className="bsk">
      <ul className="collection basket-list">
        <li className="collection-item active">Basket</li>
        {order.length ? (
          order.map((item) => {
            return (
              <BasketListItem
                key={item.id}
                {...item}
                removeFromBasket={props.removeFromBasket}
                decrementQuantity={decrementQuantity}
                incrementQuantity={incrementQuantity}
              />
            );
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
          onClick={props.handleBasketShow}
        >
          close
        </span>
      </ul>
    </div>
  );
};

export default BasketList;

import React, { useContext } from "react";
import { ShopContext } from "../../Context/context";

const GoodItem = (props) => {
  const { addBasket } = useContext(ShopContext);
  const { id, name, description, price, full_background } = props;
  return (
    <div className="card" key={id}>
      <div className="card-image">
        <img src={full_background} alt="name" />
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn " onClick={() => addBasket({ id, name, price })}>
          Buy
        </button>
        <span className="tight">{price}$ </span>
      </div>
    </div>
  );
};

export default GoodItem;

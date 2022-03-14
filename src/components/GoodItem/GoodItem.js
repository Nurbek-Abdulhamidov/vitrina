import React from "react";

const GoodItem = (props) => {
  const { id, name, description, price, full_background, addBasket } = props;
  return (
    <div className="card" key={id}>
      <div className="card-image">
        <img src={full_background} alt="name" />
        {/* <span className="card-title">{name}</span> */}
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn " onClick={() => addBasket({id, name, price})}>
          Buy
        </button>
        <span className="tight">{price}$ </span>
      </div>
    </div>
  );
};

export default GoodItem;

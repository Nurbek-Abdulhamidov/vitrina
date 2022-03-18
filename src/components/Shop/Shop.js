import React, { useEffect, useContext } from "react";
import { ShopContext } from "../../Context/context";
import { API_KEY, API_URL } from "../../config/config";
import Loader from "../../Shared/Loader";
import BasketList from "../BasketList/BasketList";
import Cart from "../Cart/Cart";
import GoodList from "../GoodLst/GoodList";

const Shop = () => {
  const { goods, setGoods, loading, order, isBasketShow } =
    useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      });
  }, []);

  return (
    <div className="container content">
      <Cart quantity={order.length} />
      {loading ? <Loader /> : <GoodList />}
      {isBasketShow && <BasketList />}
    </div>
  );
};

export default Shop;

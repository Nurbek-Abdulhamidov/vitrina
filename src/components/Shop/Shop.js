import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { API_KEY, API_URL } from "../../config/config";
import Loader from "../../Shared/Loader";
import BasketList from "../BasketList/BasketList";
import Cart from "../Cart/Cart";
import GoodList from "../GoodLst/GoodList";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  const addBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return item;
        }
      });
      setOrder(newOrder);
    }
    toast.success("Goods added to basket succefully");
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((item) => item.id !== itemId);
    setOrder(newOrder);
    toast.error("Goods deleted from bascket")
  };

  const incrementQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };
  const decrementQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? <Loader /> : <GoodList goods={goods} addBasket={addBasket} />}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      )}
    </div>
  );
};

export default Shop;

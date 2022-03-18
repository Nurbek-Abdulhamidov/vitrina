import GoodItem from "../GoodItem/GoodItem";
import { useContext } from "react";
import { ShopContext } from "../../Context/context";
const GoodList = () => {
  const { goods = [] } = useContext(ShopContext);

  

  if (!goods.length) {
    return <h3>Notihing here</h3>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default GoodList;

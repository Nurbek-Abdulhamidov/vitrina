import GoodItem from "../GoodItem/GoodItem";

const GoodList = (props) => {
  const { goods = [],addBasket } = props;

  if (!goods.length) {
    return <h3>Notihing here</h3>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
          <GoodItem key={item.id} {...item} addBasket={addBasket} />
          ))}
    </div>
  );
};

export default GoodList;

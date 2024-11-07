import { useOutletContext } from "react-router-dom";
import BasketItem from "../components/BasketItem";
import styles from "../styles/BasketContent.module.css";

function BasketContent() {
  const { basket } = useOutletContext();
  console.log(basket);
  return (
    <div className={styles.container}>
      {basket.length === 0 ? (
        <h1>Nothing to see here!</h1>
      ) : (
        <ul>
          {basket.map((item) => {
            return <BasketItem key={item.id} item={item} />;
          })}
        </ul>
      )}
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default BasketContent;

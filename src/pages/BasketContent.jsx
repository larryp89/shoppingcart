import { useOutletContext } from "react-router-dom";
import BasketItem from "../components/BasketItem";
import styles from "../styles/BasketContent.module.css";

function BasketContent() {
  const {
    basket,
    handleQuantityChange,
    totalPrice,
    deleteItem,
    confirmPurchase,
  } = useOutletContext();

  return (
    <div className={styles.container}>
      {basket.length === 0 ? (
        <h1>Nothing to see here!</h1>
      ) : (
        <>
          <ul>
            {basket.map((item) => (
              <BasketItem
                key={item.id}
                item={item}
                handleQuantityChange={handleQuantityChange}
                deleteItem={deleteItem}
              />
            ))}
          </ul>
          <div className={styles.buyDiv}>
            <button className={styles.checkoutButton} onClick={confirmPurchase}>
              Purchase!
            </button>
            <div className={styles.totalPrice}>
              Basket Total: <span>£{totalPrice}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BasketContent;

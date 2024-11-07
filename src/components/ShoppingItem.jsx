import styles from "../styles/ShoppingItem.module.css";
import BuyButton from "./BuyButton";

function ShoppingItem({ item, handleClick }) {
  return (
    <>
      <div className={styles.shoppingItem}>
        <h3>{item.title}</h3>
        <img className={styles.itemImage} src={item.image} alt={item.title} />
        <BuyButton handleClick={() => handleClick(item)} />
      </div>
    </>
  );
}

export default ShoppingItem;

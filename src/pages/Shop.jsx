import ShoppingItem from "../components/ShoppingItem";
import { useOutletContext } from "react-router-dom";
import styles from "../styles/Shop.module.css";

function Shop() {
  const { shoppingData, addItem } = useOutletContext();

  return (
    <>
      <div className="container">
        <h1>Browse our unique items</h1>
      </div>
      <div className={styles.container}>
        {shoppingData.map(
          (item) =>
            (item.category === "men's clothing" ||
              item.category === "women's clothing") && (
              <ShoppingItem key={item.id} item={item} handleClick={addItem} />
            )
        )}
      </div>
    </>
  );
}
export default Shop;

import ShoppingItem from "../components/ShoppingItem";
import { useOutletContext } from "react-router-dom";
import styles from "../styles/Shop.module.css";

function Shop() {
  const shoppingData = useOutletContext();

  return (
    <>
      <div className="container">
        <h1>Hello Shop</h1>
      </div>
      <div className={styles.container}>
        {shoppingData.map(
          (item) =>
            (item.category === "men's clothing" ||
              item.category === "women's clothing") && (
              <ShoppingItem key={item.id} item={item} />
            )
        )}
      </div>
    </>
  );
}
export default Shop;

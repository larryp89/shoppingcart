import styles from "../styles/BasketItem.module.css";

function BasketItem({ item, handleQuantityChange, deleteItem }) {
  return (
    <div className={styles.itemCard}>
      <div className={styles.details}>
        <img src={item.image} alt={item.title} />
        <div>
          <h3>{item.title}</h3>
          <h4>£{parseFloat(item.price).toFixed(2)}</h4>
          <div className={styles.quantity}>
            <h5>QTY: {item.quantity}</h5>
            <input
              type="number"
              value={item.quantity}
              min="1"
              id={item.id}
              onChange={handleQuantityChange}
            />
            <button onClick={() => deleteItem(item)}>X</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;

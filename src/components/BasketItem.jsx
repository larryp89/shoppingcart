import styles from "../styles/BasketItem.module.css";

function BasketItem({ item }) {
  return (
    <div className={styles.itemCard}>
      <div className={styles.details}>
        <img src={item.image} alt={item.title} />
        <div>
          <h3>{item.title}</h3>
          <h4>£{item.price}</h4>
          <div className={styles.quantity}>
            <h5>QTY: {item.quantity}</h5>
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={() => console.log(item)}
            />
            <button>X</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;

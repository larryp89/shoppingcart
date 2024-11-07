import styles from "../styles/BuyButton.module.css";
function BuyButton({ handleClick }) {
  return (
    <button className={styles.button} onClick={handleClick}>
      Add to basket
    </button>
  );
}

export default BuyButton;

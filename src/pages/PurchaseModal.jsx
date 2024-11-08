import React from "react";
import styles from "../styles/PurchaseModal.module.css"; // Import the CSS for styling

function PurchaseModal({ isPurchaseModalOpen }) {
  if (!isPurchaseModalOpen) return null; // Don't render the modal if it's not open

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h1>Thanks for your purchase!</h1>
        <h2>
          We'll check all the details, and it'll be on its way in no time!
        </h2>
      </div>
    </div>
  );
}

export default PurchaseModal;

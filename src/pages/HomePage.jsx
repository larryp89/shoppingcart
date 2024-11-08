import styles from "../styles/HomePage.module.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.bannerMessage}>
          <h1>Welcome to Stoned Penguin!</h1>
          <p>Fashion for Hipster Penguins.</p>
          <Link to="/shop">
            <button className={styles.shopNowButton}>Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

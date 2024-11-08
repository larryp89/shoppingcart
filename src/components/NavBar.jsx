import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";
import BasketIcon from "./BasketIcon";

function NavBar({ totalItems }) {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navDetails}>
          <h2 className={styles.logo}>Stoned Penguin</h2>
          <div className={styles.container}>
            {/* Note must use /home for it to be an absolute path as just "home" would be a relative one */}
            <Link className={styles.button} to="home">
              Home
            </Link>
            <Link className={styles.button} to="shop">
              Shop
            </Link>
            <Link className={styles.button} to="about">
              About us
            </Link>
            <BasketIcon totalItems={totalItems} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

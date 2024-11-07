import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
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
        </div>
      </nav>
    </>
  );
}

export default NavBar;

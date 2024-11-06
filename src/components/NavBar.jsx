import styles from "../styles/NavBar.module.css";

function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
        <h2 className={styles.logo}>Stoned Penguin</h2>
        <div className={styles.container}>
          <a className={styles.button} href="home">
            Home
          </a>
          <a className={styles.button} href="shop">
            Shop
          </a>
          <a className={styles.button} href="about">
            About us
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

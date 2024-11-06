import NavBar from "../components/NavBar";
import styles from "../styles/HomePage.module.css";

function HomePage() {
  return (
    <>
      <NavBar />
      <div className={styles.banner}></div>
    </>
  );
}

export default HomePage;

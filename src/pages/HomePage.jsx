import NavBar from "../components/NavBar";
import styles from "../styles/HomePage.module.css";

function HomePage() {
  return (
    <>
      <div className="container">
        <NavBar />
        <h2>HOME</h2>
        <div className={styles.banner}></div>
      </div>
    </>
  );
}

export default HomePage;

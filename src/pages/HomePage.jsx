import NavBar from "../components/NavBar";
import styles from "../styles/HomePage.module.css";

function HomePage() {
  return (
    <>
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.bannerMessage}>
            <h3>Ditch convention. Embrace individuality</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

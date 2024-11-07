import "./styles/App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import getShoppingData from "./api";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [shoppingData, setShoppingData] = useState(null);
  useEffect(() => {
    const loadShoppingData = async () => {
      const data = await getShoppingData();
      setShoppingData(data);
    };
    loadShoppingData();
  }, []);

  return (
    <>
      <NavBar />
      {/* Need to use "context" to pass props */}
      <Outlet context={shoppingData} />
    </>
  );
}

export default App;

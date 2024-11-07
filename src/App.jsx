import "./styles/App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import getShoppingData from "./api";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [shoppingData, setShoppingData] = useState([]); // Set to blank array as map will throw error if no array to iterate over
  const [basket, setBasket] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const addItem = (item) => {
    setBasket([...basket, item]);
  };

  useEffect(() => {
    const loadShoppingData = async () => {
      const data = await getShoppingData();
      setShoppingData(data);
    };
    loadShoppingData();
  }, []);

  // Update Total items when the length of the basket array changes
  useEffect(() => {
    setTotalItems(basket.length);
  }, [basket]);

  return (
    <>
      <NavBar totalItems={totalItems}/>
      {/* Need to use "context" to pass props */}
      <Outlet context={{ shoppingData, addItem }} />
    </>
  );
}

export default App;

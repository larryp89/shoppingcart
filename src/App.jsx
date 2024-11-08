import "./styles/App.css";
import NavBar from "./components/NavBar";
import { Navigate, Outlet } from "react-router-dom";
import getShoppingData from "./api";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PurchaseModal from "./pages/PurchaseModal";

function App() {
  const [shoppingData, setShoppingData] = useState([]); // Set to blank array as map will throw error if no array to iterate over
  const [basket, setBasket] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(null);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const navigate = useNavigate();

  const addItem = (item) => {
    // Check if the item is already in the basket
    const found = basket.find((basketItem) => basketItem.id === item.id);

    // If the item is already in the basket
    if (found) {
      // Create a new object with the same properties as 'item',
      // but increment its quantity by 1 based on the existing quantity
      const updatedItemQuantity = { ...item, quantity: found.quantity + 1 };

      // Create a new array by mapping through the existing basket
      const newArray = basket.map((basketItem) =>
        // If the basket item matches the current item, replace it with the updated one
        basketItem.id === item.id ? updatedItemQuantity : basketItem
      );

      // Update the basket state with the new array
      setBasket(newArray);
    } else {
      // If the item is not in the basket, set its quantity to 1
      const updatedItem = { ...item, quantity: 1 };
      setBasket([...basket, updatedItem]); // Add the new item to the basket
    }
  };

  const deleteItem = (item) => {
    setBasket((currBasket) =>
      currBasket.filter((basketItem) => basketItem.id !== item.id)
    );
  };

  const confirmPurchase = () => {
    setIsPurchaseModalOpen(true);
  };

  const closePurchaseModal = () => {
    setIsPurchaseModalOpen(false);
  };

  const resetBasket = () => {
    closePurchaseModal();
    setBasket([]);
    navigate("/home");
  };

  // Load API data
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

  const handleQuantityChange = (event) => {
    const inputValue = parseInt(event.target.value) || 1; // Default to 1 if input is invalid
    const inputID = parseInt(event.target.id);

    // Update the state based on the input
    setBasket((currBasket) =>
      currBasket.map((basketItem) =>
        basketItem.id === inputID
          ? { ...basketItem, quantity: inputValue }
          : basketItem
      )
    );
  };

  useEffect(() => {
    let totalAmount = 0;
    basket.forEach(
      (item) =>
        (totalAmount += parseFloat(item.quantity) * parseFloat(item.price))
    );
    setTotalPrice(totalAmount.toFixed(2));
  }, [basket]);

  return (
    <>
      <NavBar totalItems={totalItems} />
      {/* Need to use "context" to pass props */}
      <Outlet
        context={{
          shoppingData,
          addItem,
          totalItems,
          basket,
          handleQuantityChange,
          totalPrice,
          deleteItem,
          confirmPurchase,
        }}
      />
      <PurchaseModal
        isPurchaseModalOpen={isPurchaseModalOpen}
        resetBasket={resetBasket}
      />
    </>
  );
}

export default App;

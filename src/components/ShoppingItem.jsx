import { useOutletContext } from "react-router-dom";

function ShoppingItem() {
  const shoppingData = useOutletContext();

  return (
    <>
      <h1>Shopping Item</h1>
      {/* Wrap the returned elements in a parent element */}
      {shoppingData.map((item) => {
        return (
          <div key={item.id}>
            {/* Add a wrapper for multiple elements */}
            <h2>Item {item.id}</h2>
            <li>{item.name}</li>
          </div>
        );
      })}
    </>
  );
}

export default ShoppingItem;

const getShoppingData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  // This returns the resolved promise, but it is wrapped in a promise as async functions always return promises
  return data;
};

export default getShoppingData;

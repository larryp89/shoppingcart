import App from "./App";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import BasketContent from "./pages/BasketContent.jsx";

// Default route will be redirected to /home for better clarity.
const routes = [
  {
    path: "/",
    element: <App />, // Main container for all child routes (includes NavBar)
    errorElement: <ErrorPage />, // Fallback for any invalid route
    children: [
      {
        path: "/",
        element: <HomePage />, // Renders HomePage when user visits root '/'
      },
      { path: "home", element: <HomePage /> }, // Can access /home as well
      { path: "about", element: <AboutUs /> },
      { path: "shop", element: <Shop /> },
      { path: "basket", element: <BasketContent /> },
    ],
  },
];

export default routes;

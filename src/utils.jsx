import App from "./App";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
];

export default routes;

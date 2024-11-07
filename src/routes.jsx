import App from "./App";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      { path: "about", element: <AboutUs /> },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
];

export default routes;

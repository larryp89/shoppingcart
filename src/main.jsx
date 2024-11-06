import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./utils";
import "./index.css";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Sets up basic React Router's context across the app, configures route definitions, and renders correct components */}
    <RouterProvider router={router} />
  </StrictMode>
);

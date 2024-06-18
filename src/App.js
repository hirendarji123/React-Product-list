import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ProductDetail from "./Components/ProductDetail.jsx";
import ProductListHomePage from "./Components/HomePage.jsx";
import NavBar from "./Components/Navbar.jsx";
import ComboOffer from "./Components/ComboOffer.jsx";
function App() {
  // Routing
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <ProductListHomePage />
        </>
      ),
    },
    {
      path: "/productDetails",
      element: (
        <>
          <NavBar />
          <ProductDetail />
        </>
      ),
    },
    {
      path: "/comboOffer",
      element: (
        <>
          <NavBar />
          <ComboOffer />
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>
          <NavBar />
          <ProductListHomePage />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

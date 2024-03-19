import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WishlistContext from "./context/WishlistContext.jsx";
import CartContext from "./context/CartContext.jsx";
import CompareProvider from "./context/CompareProvider.jsx";

import {
  Home,
  AddProduct,
  ProductDetails,
  Login,
  About,
  Shop,
  WishList,
  ShoppingCart,
  Compare,
  Checkout,
} from "./page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/wishList",
        element: <WishList />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
      {
        path: "/compare",
        element: <Compare />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CompareProvider>
    <CartContext>
      <WishlistContext>
        <RouterProvider router={router} />
      </WishlistContext>
    </CartContext>
  </CompareProvider>
);

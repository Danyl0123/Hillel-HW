import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./pages/Login/Login";
import ProductsTable from "./pages/ProductsTable/ProductsTable";
import ProductsPreview from "./pages/ProductsPreview/ProductsPreview";
import AppRouter from "./routers";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <Login />
      <ProductsTable />
      <ProductsPreview /> */}
    <AppRouter />
  </React.StrictMode>
);

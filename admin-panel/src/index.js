import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./pages/Login/Login";
import ProductsTable from "./pages/ProductsTable/ProductsTable";
import ProductsPreview from "./pages/ProductsPreview/ProductsPreview";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://666aa31b7013419182d0336a.mockapi.io/products"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching the products:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container">
      {/* <Login /> */}
      <ProductsTable products={products} />
      {/* <ProductsPreview products={products} /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <div className="container">
      <Login />
      <ProductsTable products={products} />
      <ProductsPreview products={products} />
    </div> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

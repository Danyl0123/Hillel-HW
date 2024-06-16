import React, { useState, useEffect } from "react";
import "./ProductsTable.css";
import Header from "./components/Header/Header";
import Table from "../../components/Table/Table";

function ProductTable() {
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
      <Header />
      <h1 className="productTable__title">Products</h1>
      <Table products={products} />
    </div>
  );
}

export default ProductTable;

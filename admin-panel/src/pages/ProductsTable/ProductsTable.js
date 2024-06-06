import React from "react";
import "./ProductsTable.css";
import Header from "./components/Header/Header";
import Table from "../../components/Table/Table";

function ProductTable({ products }) {
  return (
    <div className="container">
      <Header />
      <h1 className="productTable__title">Products</h1>
      <Table products={products} />
    </div>
  );
}
export default ProductTable;

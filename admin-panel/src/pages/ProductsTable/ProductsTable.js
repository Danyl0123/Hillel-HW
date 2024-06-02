import React from "react";
import "./ProductsTable.css";
import Header from "./components/Header/Header";
import Table from "../../components/Table/Table";

function ProductTable() {
  return (
    <div className="container">
      <Header />
      <h1 className="productTable__title">Products</h1>
      <Table />
    </div>
  );
}
export default ProductTable;

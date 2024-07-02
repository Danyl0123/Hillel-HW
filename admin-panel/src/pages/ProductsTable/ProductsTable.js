import React, { useState, useEffect } from "react";
import "./ProductsTable.css";
import Header from "./components/Header/Header";
import Table from "../../components/Table/Table";
import { API_URL } from "../../assets/constants";

function ProductTable() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState({});
  const handleShowDeleteModal = (item) => {
    setShow(true);
    setItem(item);
  };
  const handleClose = () => {
    setShow(false);
    setItem({});
  };

  const handleDeleteItem = async (id) => {
    try {
      await fetch(`${API_URL}/products/${id}`, {
        method: `DELETE`,
      });
      setProducts(products.filter((product) => product.id !== id));
      setIsLoaded(false);
      setItem({});
      setShow(false);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}/products`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching the products:", error);
    }
  };
  useEffect(() => {
    if (!isLoaded) {
      fetchData();
      setIsLoaded(true);
    }
  }, [isLoaded]);
  return (
    <div className="container">
      <Header />
      <h1 className="productTable__title">Products</h1>
      <Table
        products={products}
        item={item}
        show={show}
        handleShowDeleteModal={handleShowDeleteModal}
        handleClose={handleClose}
        handleDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default ProductTable;

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
  const [editId, setEditId] = useState(null);
  const [showAddEditModal, setShowAddEditModal] = useState(false);

  const handleCloseAddEditModal = () => {
    setShowAddEditModal(false);
    setEditId(null);
  };

  const handleShowAddEditModal = () => setShowAddEditModal(true);

  const editItem = (id) => {
    setShowAddEditModal(true);
    setEditId(id);
  };

  const editProduct = async (id, value) => {
    try {
      await fetch(`${API_URL}/products/${id}`, {
        method: `PUT`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      setEditId(null);
      setShowAddEditModal(false);
      setIsLoaded(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowDeleteModal = (item) => {
    setShow(true);
    setItem(item);
  };

  const handleClose = () => {
    setShow(false);
    setItem({});
  };

  const handleAddProduct = async (data) => {
    try {
      await fetch(`${API_URL}/products`, {
        method: `POST`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setIsLoaded(false);
      setShowAddEditModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await fetch(`${API_URL}/products/${id}`, {
        method: `DELETE`,
      });
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
      <Header handleShowAddEditModal={handleShowAddEditModal} />
      <h1 className="productTable__title">Products</h1>
      <Table
        products={products}
        item={item}
        show={show}
        handleShowDeleteModal={handleShowDeleteModal}
        handleClose={handleClose}
        handleDeleteItem={handleDeleteItem}
        showAddEditModal={showAddEditModal}
        handleCloseAddEditModal={handleCloseAddEditModal}
        editItem={editItem}
        editId={editId}
        handleAddProduct={handleAddProduct}
        editProduct={editProduct}
      />
    </div>
  );
}

export default ProductTable;

import React, { useEffect, useState } from "react";
import "./ProductsPreview.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import Logo from "../../assets/productTableLogo.svg";
import { API_URL } from "../../assets/constants";

function ProductsPreview() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/products`);
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
      <img src={Logo} alt="logo" />
      <div className="card__row">
        {products.map((e) => (
          <ProductCard key={e.id} product={e} productId={e.id} />
        ))}
      </div>
    </div>
  );
}
export default ProductsPreview;

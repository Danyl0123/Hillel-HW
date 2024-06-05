import React from "react";
import "./ProductsPreview.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import Logo from "../../assets/productTableLogo.svg";

function ProductsPreview({ products }) {
  return (
    <>
      <img src={Logo} alt="logo" />
      <div className="card__row">
        {products.map((e) => (
          <ProductCard key={e.id} product={e} />
        ))}
      </div>
    </>
  );
}
export default ProductsPreview;

import React from "react";
import "./ProductCard.css";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, productId }) {
  const navigate = useNavigate();
  const readyToDelivery = product.quantity > 0;
  const deliveryText = readyToDelivery
    ? "Готовий до відправки"
    : "Відсутній на складі";
  return (
    <div
      className="card"
      onClick={() => navigate(`/products-preview/:${productId}`)}
    >
      <img className="card__img" src={product.src} alt="item" />
      <p className="card__name">{product.name}</p>
      <div className="card__numbers-row">
        <span className="card__price">{product.price}₴</span>
        <span className="card__quantity">Кількість:{product.quantity}</span>
      </div>
      <div
        className={
          readyToDelivery ? "card__delivery green" : "card__delivery red"
        }
      >
        <BsCart4 />
        {deliveryText}
      </div>
    </div>
  );
}
export default ProductCard;

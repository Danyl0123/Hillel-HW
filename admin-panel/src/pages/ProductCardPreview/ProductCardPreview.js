import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../assets/constants";
import Logo from "../../assets/productTableLogo.svg";
import { FaSpinner } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiSealCheckLight } from "react-icons/pi";
import "./ProductCardPreview.css";

const ProductCardPreview = () => {
  const { productId } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = "#ffffff";
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/products/${productId}`);
        const data = await response.json();
        setProductInfo(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  if (isLoading) {
    return (
      <>
        <img src={Logo} alt="logo" />
        <div className="spinner-container">
          <FaSpinner className="table-spinner" />
        </div>
      </>
    );
  }
  const isInStockText =
    productInfo.quantity > 0 ? (
      <>
        <PiSealCheckLight className="instock-svg" />Є в нявності
      </>
    ) : (
      "Відсутній на складі"
    );
  return (
    <div className="preview-card">
      <div className="header">
        <img src={Logo} alt="logo" />
      </div>
      <div className="container">
        <div className="product-card">
          <div className="product-card__title-block">
            <FaArrowLeftLong
              className="product-card__icon"
              onClick={() => navigate(`/products-preview`)}
            />
            <span className="product-card__name">{productInfo.name}</span>
          </div>
          <div className="product-card__main-descr">
            <img
              className="product-card__img"
              alt="product img"
              src={productInfo.src}
            />
            <div className="product-card__text-block">
              <span
                className={
                  productInfo.quantity > 0 ? "text instock" : "text not-instock"
                }
              >
                {isInStockText}
              </span>
              <div className="product-card__price card__price">
                {productInfo.price}₴
              </div>
              <p className="product-card_quant">
                Кількість: {productInfo.quantity}
              </p>
            </div>
          </div>
          <div className="detail-descr">
            <p className="descr description__bold">Опис</p>
            <div className="advantage-block">
              <p className="advantage-descr">
                <span className="description__bold">
                  {productInfo.firstAdvantage}
                </span>

                {productInfo.firstAdvantageDescription}
              </p>
            </div>
            <div className="advantage-block">
              <p className="advantage-descr">
                <span className="description__bold">
                  {productInfo.secondAdvantage}
                </span>

                {productInfo.secondAdvantageDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCardPreview;

import { useParams } from "react-router-dom";

const ProductCardPreview = () => {
  const { productId } = useParams();
  return <div className="container">Chosen product is: {productId} </div>;
};
export default ProductCardPreview;

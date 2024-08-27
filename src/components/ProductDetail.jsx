import { useLocation, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container">
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock} units</p>
      <p>Discount: {product.discountPercentage}%</p>
      <p>Rating: {product.rating}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductDetail;

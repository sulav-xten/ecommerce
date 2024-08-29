import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { renderStars } from "./ProductList";
import ShimmerProductDetail from "./ShimmerProductDetail";
// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";

export const formatDate = (timestamp) => {
  const date = new Date(timestamp);

  // Formatting options
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
    // timeZoneName: "short"
  };

  return date.toLocaleDateString("en-US", options);
};

const ReviewSection = ({ reviews, ratingCounts }) => (
  <div
    className="container mx-auto mb-5 p-4 rounded"
    style={{ textAlign: "justify" }}
  >
    <h4 className="mb-4">Customer Reviews</h4>
    {reviews && reviews.length > 0 ? (
      <div className="row mb-4">
        {/*Average Rating */}
        <div className="col-12 col-md-6 mb-4">
          <h5>
            Average Rating:{" "}
            {renderStars(
              (
                reviews.reduce((acc, review) => acc + review.rating, 0) /
                reviews.length
              ).toFixed(1)
            )}
          </h5>
          <p>
            {(
              reviews.reduce((acc, review) => acc + review.rating, 0) /
              reviews.length
            ).toFixed(1)}{" "}
            ({reviews.length} reviews)
          </p>
          {Object.keys(ratingCounts).map((rating) => (
            <p key={rating}>
              {renderStars(rating)} {ratingCounts[rating]}{" "}
              {ratingCounts[rating] === 1
                ? "review"
                : ratingCounts[rating] === 0
                ? "review"
                : "reviews"}
            </p>
          ))}
        </div>
        {/*Write your review */}
        <div className="col-12 col-md-6 mb-4">
          {/* <form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form> */}
        </div>
      </div>
    ) : (
      ""
    )}
    {reviews && reviews.length > 0 ? (
      reviews.map((review, index) => (
        <div
          className="row mb-4 p-3 bg-white shadow-sm rounded"
          key={review.id || index}
        >
          <div className="col-3 col-md-2 text-center">
            <img
              src={`https://via.placeholder.com/80x80?text=${review.reviewerName
                .split(" ")[0]
                .charAt(0)}`}
              className="rounded-circle img-fluid"
              alt={`${review.reviewerName}'s avatar`}
            />
          </div>
          <div className="col-9 col-md-7">
            <h5 className="mb-1 font-weight-bold">{review.reviewerName}</h5>
            <p className="mb-2 text-muted">
              {review.comment}
              <br />
              {formatDate(review.date)}
            </p>
          </div>
          <div className="col-9 col-md-3 text-center text-md-right mt-0 mt-md-0">
            {renderStars(review.rating)}
          </div>
        </div>
      ))
    ) : (
      <p className="text-center text-muted">
        No reviews yet. Be the first to review this product!
      </p>
    )}
  </div>
);

const WarrantyInfoSection = ({ warrantyInformation }) => (
  <div className="container mx-auto mb-4" style={{ textAlign: "justify" }}>
    <h4>Warranty Information</h4>
    {warrantyInformation ? (
      <p>Warranty Information: {warrantyInformation}</p>
    ) : (
      <p>No warranty information available.</p>
    )}
  </div>
);

const ShippingInfoSection = ({ shippingInformation }) => (
  <div className="container mx-auto mb-4" style={{ textAlign: "justify" }}>
    <h4>Shipping Information</h4>
    {shippingInformation ? (
      <p>Shipping Information: {shippingInformation}</p>
    ) : (
      <p>No shipping information available.</p>
    )}
  </div>
);

const SellerProfileSection = () => (
  <div style={{ textAlign: "justify" }}>
    <h4>Seller Profile</h4>
    <p>Seller information is not available at the moment.</p>
  </div>
);

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("review");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setProduct(location.state?.product);
      setLoading(false); // Set loading to false once data is fetched
    }, 2000); // Simulate a 2-second loading time
  }, [location.state?.product]);

  if (loading) {
    return <ShimmerProductDetail />; // Display shimmer while loading
  }

  if (!product) {
    return <ErrorPage />;
  }

  const handleIncrement = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSelectTab = (tab) => {
    setActiveTab(tab);
  };

  // Calculate frequency of each rating
  const ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  product.reviews.forEach((review) => {
    if (ratingCounts.hasOwnProperty(review.rating)) {
      ratingCounts[review.rating] += 1;
    }
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 mb-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid"
            style={{
              maxWidth: "100%",
              backgroundSize: "cover",
              minHeight: "100%"
            }}
          />
        </div>
        <div className="col-12 col-md-6 mb-4" style={{ textAlign: "justify" }}>
          <h1 className="h4 h-md1 " style={{ paddingTop: "1em" }}>
            {product.title}
          </h1>
          <p>
            {renderStars(product.rating)}&nbsp;
            <FontAwesomeIcon
              icon={faBasketShopping}
              style={{ Size: "20", color: "#5a5a5a" }}
            />
            &nbsp;
            <span className="small">
              {product.minimumOrderQuantity} Orders&nbsp;
            </span>
            {
              <span
                className="small"
                style={{
                  color: product.stock > 0 ? "green" : "#c1292e",
                  padding: "5px",
                  borderRadius: "5px"
                }}
              >
                Stock: {product.stock} units
              </span>
            }
          </p>
          <p>
            <s>$ {product.price}</s>&nbsp;
            <span
              className="small"
              style={{
                backgroundColor: "#87c6eb",
                color: "white",
                padding: "5px",
                borderRadius: "5px"
              }}
            >
              -{product.discountPercentage} %
            </span>
            <br />
            Discounted Price: ${" "}
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}
          </p>
          <p className="text-muted mb-2">{product.description}</p>
          <p className="text-muted mb-0 pb-0">
            Brand: {product.brand ? product.brand : "No Brand"}
          </p>
          <hr className="mt-0" />
          <p style={{ marginBottom: "0px" }}>Quantity</p>
          <div className="d-flex align-items-center mb-2">
            <button
              className="btn btn-outline-secondary"
              onClick={handleDecrement}
              style={{ borderRadius: "0px" }}
            >
              -
            </button>
            <input
              type="number"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={(e) =>
                setQuantity(
                  Math.max(1, Math.min(product.stock, e.target.value))
                )
              }
              className="form-control text-center"
              style={{
                width: "60px",
                borderRadius: "0px",
                borderColor: "black"
              }}
            />
            <button
              className="btn btn-outline-secondary"
              onClick={handleIncrement}
              style={{ borderRadius: "0px" }}
            >
              +
            </button>
          </div>
          <p style={{ marginBottom: "0px" }}>
            Total Price: <br />{" "}
            {quantity *
              (
                product.price -
                (product.price * product.discountPercentage) / 100
              ).toFixed(2)}
          </p>
          <div className="d-flex align-items-between mb-2">
            <button className="btn btn-primary ml-0 mr-2 mt-2 mb-2">
              Buy Now
            </button>
            <button className="btn btn-secondary m-2">Add to Cart</button>
          </div>
        </div>
      </div>
      <Nav
        justify
        variant="tabs"
        defaultActiveKey="review"
        onSelect={(selectedKey) => handleSelectTab(selectedKey)}
      >
        <Nav.Item>
          <Nav.Link eventKey="review">Review</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="warranty">Warranty Info</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="shipping">Shipping Info</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="seller" disabled>
            Seller Profile
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="mt-3">
        {activeTab === "review" && (
          <ReviewSection
            reviews={product.reviews}
            ratingCounts={ratingCounts}
          />
        )}
        {activeTab === "warranty" && (
          <WarrantyInfoSection
            warrantyInformation={product.warrantyInformation}
          />
        )}
        {activeTab === "shipping" && (
          <ShippingInfoSection
            shippingInformation={product.shippingInformation}
          />
        )}
        {activeTab === "seller" && <SellerProfileSection />}
      </div>
    </div>
  );
};

export default ProductDetail;

import { useNavigate } from "react-router-dom";
import { Button, Card, CardGroup } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as farStar
} from "@fortawesome/free-solid-svg-icons";
import ShimmerProductList from "./ShimmerProductList.jsx";

export const fetchProducts = async () => {
  const { data } = await axios.get("https://dummyjson.com/products");
  return data.products;
};

// Function to render star icons based on rating
export const renderStars = (rating) => {
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 !== 0; // Determine if there's a half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Number of empty stars

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} color="gold" />
      ))}
      {hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} color="gold" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FontAwesomeIcon
          key={i + fullStars + 1}
          icon={farStar}
          color="#e6e6e6"
        />
      ))}
    </>
  );
};

const ProductList = () => {
  const navigate = useNavigate();

  const handleCardClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  /*React Query */
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
  });

  if (isLoading)
    return (
      // <div className="loading-container">
      //   <l-dot-pulse size="43" speed="1.3" color="black"></l-dot-pulse>
      // </div>
      <ShimmerProductList />
    );
  if (error)
    return <div className="error-container">Error: {error.message}</div>;

  // Initialize an empty object to hold the grouped products
  const groupedByCategory = {};

  // Loop through each product in the data array
  data.forEach((product) => {
    // Check if the category already exists in groupedByCategory
    if (!groupedByCategory[product.category]) {
      // If it doesn't exist, create a new array for that category
      groupedByCategory[product.category] = [];
    }

    // Add the product to the appropriate category array
    groupedByCategory[product.category].push(product);
  });

  return (
    <>
      {/*List of Categories */}
      <div className="container mx-auto mb-4">
        <h3 className="my-4">Categories</h3>
        <CardGroup>
          {Object.keys(groupedByCategory).map((category) => (
            <div className="col pb-3" key={category}>
              <Card
                className="me-3" // Add margin-end to space out cards
                style={{ width: "18rem", cursor: "pointer" }}
                onClick={() => navigate(`/category/${category}`)}
              >
                {/* <Card.Img variant="top" src={category.thumbnail} /> */}
                <Card.Body>
                  <Card.Title style={{ height: "1rem" }}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </CardGroup>
      </div>
      {/*List of Products based on Categories */}
      <div className="container mx-auto mb-4">
        {Object.keys(groupedByCategory).map((category) => (
          <div key={category}>
            <div className="d-flex justify-content-between align-items-center my-4">
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <Button
                variant="link"
                onClick={() => navigate(`/category/${category}`)}
              >
                View All
              </Button>
            </div>
            <div className="overflow-auto">
              <div className="d-flex flex-nowrap">
                {groupedByCategory[category]
                  .slice(0, 4) // Limit to 4 products
                  .map((product) => (
                    <div className="col pb-3" key={product.id}>
                      <Card
                        className="me-3" // Add margin-end to space out cards
                        style={{ width: "18rem", cursor: "pointer" }}
                        key={product.id}
                        onClick={() => handleCardClick(product)}
                      >
                        <Card.Img variant="top" src={product.thumbnail} />
                        <Card.Body>
                          <Card.Title style={{ height: "3rem" }}>
                            {product.title}
                          </Card.Title>
                          <Card.Text>
                            {renderStars(product.rating)}&nbsp;
                            {
                              <span
                                className="small"
                                style={{
                                  backgroundColor:
                                    product.availabilityStatus == "In Stock"
                                      ? "green"
                                      : "#c1292e",
                                  color: "white",
                                  padding: "5px",
                                  borderRadius: "5px"
                                }}
                              >
                                {product.availabilityStatus}
                              </span>
                            }
                          </Card.Text>
                          <Card.Text></Card.Text>
                          <s>$ {product.price}</s>
                          &nbsp;
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
                          <Card.Text>
                            ${" "}
                            {(
                              product.price -
                              (product.price * product.discountPercentage) / 100
                            ).toFixed(2)}
                          </Card.Text>
                          <Button variant="primary">Add to Cart</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;

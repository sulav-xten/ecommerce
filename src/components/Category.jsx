import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import { fetchProducts, renderStars } from "./ProductList";

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const categoryString = category ? String(category) : "Unknown";

  useEffect(() => {
    const getProducts = async () => {
      try {
        const allProducts = await fetchProducts(); // Fetch all products

        // Filter products based on the category string
        const filteredProducts = allProducts.filter(
          (product) => String(product.category) === categoryString
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, [categoryString]);

  const navigate = useNavigate();

  const handleCardClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="container mx-auto mb-4">
      <h3 className="my-4">
        {categoryString?.charAt(0).toUpperCase() + categoryString?.slice(1)}
      </h3>
      <CardGroup>
        {products.map((product) => (
          <div className="col pb-3" key={product.id}>
            <Card
              style={{ width: "18rem", cursor: "pointer" }}
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
      </CardGroup>
    </div>
  );
};

export default Category;

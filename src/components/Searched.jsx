import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import { fetchProducts, renderStars } from "./ProductList";
import Form from "react-bootstrap/Form";

function Searched() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("bestMatch");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products and filter them based on the search query
    const getProducts = async () => {
      const allProducts = await fetchProducts();

      // Filter products by matching the query with title, tags, category or brand.
      const filteredProducts = allProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.tags.some((tag) =>
            tag.toLowerCase().includes(query.toLowerCase())
          ) ||
          product.category.toLowerCase().includes(query.toLowerCase()) ||
          (product.brand &&
            product.brand.toLowerCase().includes(query.toLowerCase()))
      );

      setProducts(filteredProducts);
    };

    getProducts();
  }, [query]);

  // Function to handle sorting
  const sortProducts = (products, option) => {
    switch (option) {
      case "priceLowToHigh":
        return [...products].sort((a, b) => a.price - b.price);
      case "priceHighToLow":
        return [...products].sort((a, b) => b.price - a.price);
      case "ascending":
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      case "descending":
        return [...products].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return products; // for Best Match
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleCardClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  // Get the sorted products based on the selected sort option
  const sortedProducts = sortProducts(products, sortOption);

  // You can use the `query` to fetch search results and display them here
  return (
    <div className="container mx-auto mb-4">
      <div className="row mb-4">
        <div className="col-12 col-md-6">
          <h3 className="my-4">Search Results for: {query}</h3>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column flex-md-row align-items-md-center mt-4 mt-md-0">
          <span
            className="mb-2 mb-md-0 me-md-2 text-nowrap"
            style={{ textAlign: "justify" }}
          >
            Sort By:
          </span>
          <Form.Select
            aria-label="Best Match"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="bestMatch">Best Match</option>
            <option value="priceLowToHigh">Price low to high</option>
            <option value="priceHighToLow">Price high to low</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </Form.Select>
        </div>
      </div>
      <CardGroup>
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
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
          ))
        ) : (
          <p>No products found matching your search criteria.</p>
        )}
      </CardGroup>
    </div>
  );
}

export default Searched;

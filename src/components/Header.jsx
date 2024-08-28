import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from "axios";
// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const categories = response.data.products.map(
          (product) => product.category
        );
        // Remove duplicates
        const uniqueCategories = [...new Set(categories)];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-grow-1">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {categories.map((category, index) => (
                <NavDropdown.Item key={index} href={`/category/${category}`}>
                  {category}
                </NavDropdown.Item>
              ))}
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button variant="link" className="p-0 me-3">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ Size: "20", color: "#5a5a5a" }}
              />
            </Button>
            <Form className="d-flex">
              <Button
                variant="link"
                onClick={toggleSearch}
                className="p-0 me-3"
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ Size: "20", color: "#5a5a5a" }}
                />
              </Button>
              {showSearch && (
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              )}
            </Form>
            <Nav.Link href="#home">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

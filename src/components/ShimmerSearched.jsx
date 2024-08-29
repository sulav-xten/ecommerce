import React from "react";
import {
  ShimmerThumbnail,
  ShimmerTitle,
  ShimmerText
} from "react-shimmer-effects";
import { Card, CardGroup } from "react-bootstrap";

const ShimmerSearched = () => {
  // Array to create multiple shimmer cards
  const shimmerItems = new Array(4).fill(0); // Adjust the number based on your needs
  return (
    <div className="container mx-auto mb-4">
      <div className="row mb-4">
        <div className="col-12 col-md-6">
          <h3 className="my-4">
            <ShimmerTitle line={1} gap={10} variant="primary" />
          </h3>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column flex-md-row align-items-md-center mt-4 mt-md-0">
          <span
            className="mb-2 mb-md-0 me-md-2 text-nowrap"
            style={{ textAlign: "justify" }}
          >
            <ShimmerTitle line={1} gap={10} variant="primary" />
          </span>
        </div>
      </div>
      <CardGroup>
        {shimmerItems.map((_, index) => (
          <div className="col pb-3" key={index}>
            <Card className="me-3" style={{ width: "18rem" }}>
              <ShimmerThumbnail height={200} rounded />
              <Card.Body>
                <ShimmerTitle line={1} gap={10} />
                <ShimmerText line={2} gap={10} />
              </Card.Body>
            </Card>
          </div>
        ))}
      </CardGroup>
    </div>
  );
};

export default ShimmerSearched;

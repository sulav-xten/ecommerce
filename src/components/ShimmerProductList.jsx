import React from "react";
import {
  ShimmerThumbnail,
  ShimmerTitle,
  ShimmerText,
  ShimmerButton
} from "react-shimmer-effects";
import { Card, CardGroup } from "react-bootstrap";

const ShimmerProductList = () => {
  // Array to create multiple shimmer cards
  const shimmerItems = new Array(4).fill(0); // Adjust the number based on your needs

  return (
    <div className="container mx-auto mb-4">
      {/* Shimmer for Categories */}
      <h3 className="my-4">
        <ShimmerTitle line={1} gap={10} variant="primary" />
      </h3>
      <CardGroup>
        {shimmerItems.map((_, index) => (
          <div className="col pb-3" key={index}>
            <Card className="me-3" style={{ width: "18rem" }}>
              {/* <ShimmerThumbnail height={200} rounded /> */}
              <Card.Body>
                <ShimmerTitle line={1} gap={10} />
                {/* <ShimmerText line={2} gap={10} /> */}
              </Card.Body>
            </Card>
          </div>
        ))}
      </CardGroup>

      {/* Shimmer for Product List */}
      {shimmerItems.map((_, index) => (
        <div className="container mx-auto mb-4" key={index}>
          <div className="d-flex justify-content-between align-items-center my-4">
            <h3>
              <ShimmerTitle line={1} gap={10} />
            </h3>
            <ShimmerButton />
          </div>
          <div className="overflow-auto">
            <div className="d-flex flex-nowrap">
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerProductList;

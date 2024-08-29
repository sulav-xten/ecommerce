import React from "react";
import {
  ShimmerText,
  ShimmerThumbnail,
  ShimmerTitle,
  ShimmerBadge,
  ShimmerButton
} from "react-shimmer-effects";

const ShimmerProductDetail = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Image Shimmer */}
        <div className="col-12 col-md-6 mb-4">
          <ShimmerThumbnail height={400} width="100%" />
        </div>

        {/* Product Details Shimmer */}
        <div className="col-12 col-md-6 mb-4">
          <ShimmerTitle line={1} gap={10} variant="secondary" />
          <ShimmerBadge height={30} width={150} />
          <div className="mt-2">
            <ShimmerText line={3} gap={10} />
          </div>
          <ShimmerText line={2} gap={10} />
          <ShimmerBadge height={30} width={100} />
          <hr className="mt-2" />
          <ShimmerText line={1} gap={10} width={60} />
          <div className="d-flex align-items-center mt-2 mb-2">
            <ShimmerButton height={50} width={50} />
            <ShimmerText line={1} width={60} />
            <ShimmerButton height={50} width={50} />
          </div>
          <ShimmerText line={1} gap={10} />
          <div className="d-flex align-items-between mt-2 mb-2">
            <ShimmerButton height={50} width={120} />
            <ShimmerButton height={50} width={120} />
          </div>
        </div>
      </div>

      {/* Tab Navigation Shimmer */}
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-around mb-4">
            <ShimmerButton height={30} width={100} />
            <ShimmerButton height={30} width={100} />
            <ShimmerButton height={30} width={100} />
            <ShimmerButton height={30} width={100} />
          </div>
        </div>
      </div>

      {/* Content Section Shimmer */}
      <div className="mt-3">
        <ShimmerText line={4} gap={20} />
        <ShimmerText line={4} gap={20} />
      </div>
    </div>
  );
};

export default ShimmerProductDetail;

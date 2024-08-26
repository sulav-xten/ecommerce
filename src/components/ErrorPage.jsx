import React from "react";

import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center error-page">
        <div className="mx-auto">
          <h1 className="display-1 fw-bold text-danger">404</h1>
          <h2 className="mb-4">Oops! Page Not Found</h2>
          <p className="lead mb-5">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="btn btn-primary btn-lg">
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;

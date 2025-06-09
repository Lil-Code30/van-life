import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1>
        404 <br /> Page Not Found
      </h1>
      <h3>Sorry, the page you were looking for was not found.</h3>
      <Link to="/" className="link-button">
        Return to Home
      </Link>
    </div>
  );
}

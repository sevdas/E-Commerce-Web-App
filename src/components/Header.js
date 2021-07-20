import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Header() {
  const { id } = useParams();
  return (
    <>
      <Link to="/">
        <h1>Pic Some</h1>
      </Link>
      <Link to="/card">
        <i className="ri-shopping-cart-line"></i>
      </Link>
    </>
  );
}

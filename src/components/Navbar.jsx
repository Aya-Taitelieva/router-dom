import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname == "/about") {
    return <h1>Navbar</h1>;
  }
  return (
    <div
      style={{
        height: "50px",
        width: "100%",
        backgroundColor: "#aaa234",
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        alignItems: "center",
      }}>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About us</Link> */}

      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About us</NavLink>

      {/* -1 переход на предыдущую страницу */}
      {/* <button
        onClick={() => {
          navigate(-1);
        }}>
        Back
      </button>

      <button
        onClick={() => {
          navigate("/");
        }}>
        Home
      </button>
      <button
        onClick={() => {
          navigate("/about");
        }}>
        About us
      </button> */}
    </div>
  );
};

export default Navbar;

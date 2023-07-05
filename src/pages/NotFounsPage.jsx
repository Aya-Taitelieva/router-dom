import React from "react";
import { useNavigate } from "react-router-dom";

const NotFounsPage = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 1000);
  return <div style={{ color: "red", fontSize: "30px" }}>NotFounsPage</div>;
};

export default NotFounsPage;

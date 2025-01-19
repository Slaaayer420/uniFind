import React from "react";
import { useNavigate } from "react-router";
import "./index.css";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="index-container">
      <h1>Welcome to Uni-Find</h1>
      <button onClick={() => navigate("/program")} className="start-button">
        Start University Search
      </button>
    </div>
  );
};

export default Index;

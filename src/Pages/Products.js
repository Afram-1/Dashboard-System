import React from "react";
import Sidebar from "../Components/Sidebar";
import UseDashbourd from "../Hooks/UseDashbourd";

const Products = () => {
  const { loading, error } = UseDashbourd();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <Sidebar />
      <h1>This Page Products</h1>
    </div>
  );
};

export default Products;

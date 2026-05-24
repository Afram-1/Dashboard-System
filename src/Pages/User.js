import React from "react";
import UseDashbourd from "../Hooks/UseDashbourd";
import Sidebar from "../Components/Sidebar";

const User = () => {
  const { loading, error } = UseDashbourd();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Sidebar />
      <h1>Hello User Page</h1>
    </>
  );
};

export default User;

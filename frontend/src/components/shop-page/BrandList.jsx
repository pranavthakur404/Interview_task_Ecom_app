import React from "react";

const BrandList = ({ brand, count }) => {
  return (
    <p
      style={{
        cursor: "pointer",
      }}
    >
      {brand} ({count})
    </p>
  );
};

export default BrandList;

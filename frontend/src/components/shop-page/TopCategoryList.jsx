import React from "react";

const TopCategoryList = ({ category, count }) => {
  return (
    <p
      style={{
        cursor: "pointer",
      }}
    >
      {category} ({count})
    </p>
  );
};

export default TopCategoryList;

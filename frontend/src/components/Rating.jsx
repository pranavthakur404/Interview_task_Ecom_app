import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ num }) => {
  const active = {
    color: "#ffde00",
  };
  let starArray = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= num) {
      starArray.push(<FaStar key={i} style={active} />);
    } else {
      starArray.push(<FaStar key={i} />);
    }
  }
  return starArray;
};

export default Rating;

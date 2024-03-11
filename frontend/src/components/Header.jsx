import React from "react";
import TopNav from "../components/TopNav";
import MiddleNav from "./MiddleNav";
import BottomNav from "./BottomNav";

const Header = () => {
  return (
    <header>
      <TopNav />
      <MiddleNav />
      <BottomNav />
    </header>
  );
};

export default Header;

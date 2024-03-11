import { useState } from "react";
import styles from "../components_css/MobileNavigation.module.css";
import MobileNavItems from "./MobileNavItems";

const MobileNavigation = () => {
  const [navData, setNavData] = useState([
    {
      id: 1,
      title: "Home",
      children: ["Home 1", "Home 2"],
      show: false,
    },
    {
      id: 2,
      title: "About",
      children: [],
      show: false,
    },
    {
      id: 3,
      title: "Pages",
      children: ["Home 1", "Home 2"],
      show: false,
    },
    {
      id: 4,
      title: "Shop",
      children: [],
      show: false,
    },
    {
      id: 5,
      title: "Blog",
      children: [],
      show: false,
    },
    {
      id: 6,
      title: "Contact",
      children: [],
      show: false,
    },
  ]);

  const updateShow = (id) => {
    setNavData((prevData) => {
      return prevData.map((data) => {
        if (data.id == id) {
          return { ...data, show: !data.show };
        } else {
          return { ...data, show: false };
        }
      });
    });
  };

  return (
    <nav className={styles.nav}>
      {navData.map((data) => {
        return (
          <MobileNavItems key={data.id} {...data} updateShow={updateShow} />
        );
      })}
    </nav>
  );
};

export default MobileNavigation;

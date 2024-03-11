import styles from "../components_css/MobileNavItems.module.css";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const MobileNavItems = ({ id, title, children, show, updateShow }) => {
  const handleClick = () => {
    updateShow(id);
  };

  return (
    <ul className={styles.nav}>
      <li>
        <Link>{title}</Link>
        <span className={styles.showIcon} onClick={handleClick}>
          {show ? <FaMinus /> : <FaPlus />}
        </span>
        <span className={styles.overlay}></span>
        {show && (
          <ul>
            {children &&
              children.map((data) => {
                return (
                  <li>
                    <Link>{data}</Link>
                  </li>
                );
              })}
          </ul>
        )}
      </li>
    </ul>
  );
};

export default MobileNavItems;

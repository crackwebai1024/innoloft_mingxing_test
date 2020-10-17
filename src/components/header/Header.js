import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  let icons = ["fa-globe", "fa-envelope", "fa-bell"];
  let content = ["EN", "", ""];
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerleft}>
        <label className={styles.logo}>
          ENER<span style={{ color: "rgb(128, 115, 0)" }}>G</span>IE
        </label>
        <div className={styles.brand}>LOFT</div>
      </div>
      <ul className={styles.icons}>
        {icons.map((item, key) => (
          <li>
            <i className={`fa ${item}`}>
              <div className={styles.online + content[key]}></div>
            </i>
            {content[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;

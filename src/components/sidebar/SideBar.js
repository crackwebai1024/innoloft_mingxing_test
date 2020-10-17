import React from "react";
import { data } from "./sidebardata";
import styles from "./SideBar.module.css";

const SideBar = (props) => {
  return (
    <div>
      {data.map((item, key) => (
        <div className={styles.item}>
          <i className={item.icon}></i>
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default SideBar;

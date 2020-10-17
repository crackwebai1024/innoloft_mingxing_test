import React from "react";
import FormTab from "../forms/FormTab";
import SideBar from "../sidebar/SideBar";
import styles from "./Content.module.css";

const Content = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className="col-3">
        <SideBar />
      </div>
      <div className="col-7">
        <FormTab />
      </div>
    </div>
  );
};

export default Content;

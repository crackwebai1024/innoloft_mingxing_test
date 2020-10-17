import React, { useState } from "react";
import AddForm from "./AddForm";
import styles from "./FormTab.module.css";
import MainForm from "./MainForm";

function FormTab(props) {
  const [active, setActive] = useState(1);
  return (
    <div className={styles.wrapper}>
      <div className={styles.tab}>
        <div
          onClick={() => setActive(1)}
          className={active === 1 ? styles.active : styles.leftinactive}
        >
          Main Information
        </div>
        <div
          onClick={() => setActive(2)}
          className={active === 2 ? styles.active : styles.rightinactive}
        >
          Additional Information
        </div>
      </div>
      <div className={styles.forms}>
        {active === 1 && <MainForm />}
        {active === 2 && <AddForm />}
      </div>
    </div>
  );
}

export default FormTab;

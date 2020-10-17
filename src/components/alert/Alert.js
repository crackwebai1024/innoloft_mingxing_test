import React from "react";
import styles from "./Alert.module.css";

function Alert(props) {
  let status = props.status;
  let classnm;
  if (status) {
    classnm = styles.wrapper + " " + styles.succ;
  } else {
    classnm = styles.wrapper + " " + styles.fail;
  }
  return <div className={classnm}>{props.content}</div>;
}

export default Alert;

import React from "react";
import styles from "./LoadingSpinner.module.css";

export const LoadingSpinner = () => {
  return (
    <div className={styles["spinner-container"]}>
      <div className={styles["loading-spinner"]}></div>
      <p className={styles.text}>Loading . . .</p>
    </div>
  );
}
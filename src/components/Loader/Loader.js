import React from "react";
import styles from "./index.module.sass";

export const Loader = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.loader} ba b--black`}></div>
    </div>
  );
};

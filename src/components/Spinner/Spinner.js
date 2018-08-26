import React from "react";
import { Spring } from "react-spring";
import styles from "./Spinner.scss";

const Spinner = props => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {animation => (
        <div style={animation} className={styles.container}>
          <h1>Looking for weather in {props.city}</h1>
          <div className={styles["cssload-loader-inner"]}>
            <div className={styles["cssload-cssload-loader-line-wrap-wrap"]}>
              <div className={styles["cssload-loader-line-wrap"]} />
            </div>
            <div className={styles["cssload-cssload-loader-line-wrap-wrap"]}>
              <div className={styles["cssload-loader-line-wrap"]} />
            </div>
            <div className={styles["cssload-cssload-loader-line-wrap-wrap"]}>
              <div className={styles["cssload-loader-line-wrap"]} />
            </div>
            <div className={styles["cssload-cssload-loader-line-wrap-wrap"]}>
              <div className={styles["cssload-loader-line-wrap"]} />
            </div>
            <div className={styles["cssload-cssload-loader-line-wrap-wrap"]}>
              <div className={styles["cssload-loader-line-wrap"]} />
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default Spinner;

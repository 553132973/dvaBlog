import React from "react";
import { connect } from "dva";
import styles from "./IndexPage.css";

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>编辑器</h1>
      <div className={styles.welcome} />
    </div>
  );
}

IndexPage.propTypes = {};

export default IndexPage;

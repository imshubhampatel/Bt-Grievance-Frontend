import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/Images/BT LOGO.jpg";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navigation}>
          <div className={`${styles.left} ${styles.half}`}>
            <div className={`${styles.image} ${styles.logo}`}>
              <img src={logo} alt="collge logo" />
            </div>
          </div>
          <div className={`${styles.right} ${styles.half}`}></div>
        </div>
      </div>
    </>
  );
}
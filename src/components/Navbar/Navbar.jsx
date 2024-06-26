import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/Images/BT LOGO.jpg";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={`${styles.left} ${styles.half}`}>
          <img src={logo} alt="collge logo" />
        </div>
        <div className={`${styles.right} ${styles.half}`}>
          <div className={`${styles.text_college} ${styles.text}`}>
            <a rel="noreferrer" href="https://btirt.ac.in">
              <span>
                Babulal Tarabai Institute of Research and Technology, Sironja
                Sagar (M.P.)
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

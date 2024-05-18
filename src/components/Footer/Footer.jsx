import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className={`${styles.box} ${styles.box1}`}>
        <a target="_blank"  rel="noreferrer" href="https://btirt.ac.in/about-btirt/">
          <p>About BTIRT</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://btirt.ac.in/about-btirt/vision-mission/"
        >
          <p>Vision & Mission</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://btirt.ac.in/about-btirt/chairman-message/"
        >
          <p>Chairman Message</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://btirt.ac.in/about-btirt/secretary-message/"
        >
          <p>Secretary Message</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://btirt.ac.in/about-btirt/principal-message/"
        >
          <p>Principal Message</p>
        </a>
      </div>
      <div className={`${styles.box} ${styles.box2}`}>
        <a
        rel="noreferrer"
          href="https://btirt.ac.in/bachelor-of-engineering-be/"
          target="_blank"
        >
          <p>Bachelor of Engineering (BE)</p>
        </a>
        <a href="https://btirt.ac.in/masters-in-technology/" target="_blank" rel="noreferrer">
          <p>Masters in Technology</p>
        </a>
        <a
          href="https://btirt.ac.in/master-of-business-administration/"
          target="_blank"
          rel="noreferrer"
        >
          <p>Master of Business Administration</p>
        </a>
        <a  rel="noreferrer" href="https://btirt.ac.in/polytechnic-diploma/" target="_blank">
          <p>Polytechnic (Diploma)</p>
        </a>
      </div>
      <div className={`${styles.box} ${styles.box3}`}>
        <p>BTIRT is committed to become one of the </p>
        <p>best education centers of</p>
        <p>Bundelkhand, where not only youth of </p>
        <p>Bundelkhand will be shaped</p>
        <p>for future of country, it will also be </p>
        <p>the center of attraction for the</p>
        <p>youth from rest of India.</p>
      </div>
    </div>
  );
}

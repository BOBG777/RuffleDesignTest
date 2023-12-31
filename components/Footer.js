import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import logo from "../public/assets/Logo.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <p>
            INSTAGRAM <span className={styles.arrowSmall}>→</span>
          </p>
          <p>
            LINKEDIN <span className={styles.arrowSmall}>→</span>
          </p>
          <p>
            1% FOR THE PLANET <span className={styles.arrowSmall}>→</span>
          </p>
        </div>
        <div className={styles.right}>
          <p>Drop us a line</p>
          <span className={styles.arrow}>→</span>
        </div>
      </div>
      <div className={styles.logoContainer}>
        <Image src={logo} width={80} height={80} alt="Logo" />
      </div>
    </footer>
  );
}

export default Footer; // 确保你导出了 Footer 组件

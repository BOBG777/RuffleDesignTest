// components/HamburgerMenu.js

import React, { useState } from "react";
import Modal from "react-modal";
import Image from 'next/image'; // 导入 Image 组件
import styles from "./HamburgerMenu.module.css"; // 引入样式文件
import logo from '../public/assets/Logo.svg'; // 导入 Logo

Modal.setAppElement("#__next"); // 设置模态的根元素，通常是 Next.js 的默认元素

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.headerContainer}>
      <Image
        src={logo}
        alt="Logo"
        width={80}
        height={80}
        className={styles.logo}
      />

      <button
        className={`${styles.button} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`${styles.line} ${styles.line1}`}></div>
        <div className={`${styles.line} ${styles.line2}`}></div>
        <div className={`${styles.line} ${styles.line3}`}></div>
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className={styles.modalContent}
      >
        <ul>
          <li>Services</li>
          <li>Training</li>
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div>
          <p>WORK WITH US</p>
          <p>WHAT OUR CLIENTS SAY</p>
        </div>
      </Modal>
    </div>
  );
}

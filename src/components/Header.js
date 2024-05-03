import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.left}>
        로고
      </Link>
      <div className={styles.right}>
        <Link to="/calendar" className={styles.rightlist}>
          캘린더
        </Link>
        <Link to="/contents" className={styles.rightlist}>
          콘텐츠
        </Link>
        <Link to="/consulting" className={styles.rightlist}>
          컨설팅
        </Link>
        <Link to="/my-page" className={styles.rightlist}>
          마이페이지
        </Link>
      </div>
    </div>
  );
};

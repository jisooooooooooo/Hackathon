import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>로고</div>
      <div className={styles.right}>
        <div className={styles.rightlist}>오늘의 식습관</div>
        <div className={styles.rightlist}>캘린더</div>
        <div className={styles.rightlist}>콘텐츠</div>
        <div className={styles.rightlist}>컨설팅</div>
        <div className={styles.rightlist}>마이페이지</div>
      </div>
    </div>
  );
};

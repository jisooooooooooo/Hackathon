import React from "react";
import styles from "./Header.module.css";


export const Header = () => {
  return (
    <div className={styles.container}>
      <div>오늘의 식습관</div>
      <div>캘린더</div>
      <div>콘텐츠</div>
      <div>컨설팅</div>
      <div>마이페이지</div>
    </div>
  );
};

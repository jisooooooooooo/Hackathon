import React from "react";
import styles from "../Styles/ContentPage.module.css";

const ContentsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>최근 본 아티클</div>
      <div className={styles.scrollContainer}>
        {[...Array(10)].map((_, index) => (
          <div key={index} className={styles.box}>
            <div className={styles.boximg}></div>
            <div className={styles.boxcontent}>
              <div className={styles.boxcontenttitle}>아티클 제목</div>
              <div className={styles.boxcontenttitle2}>아티클 내용</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentsPage;

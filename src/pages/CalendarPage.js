import React, { useState } from "react";
import Calendar from "react-calendar";
import styles from "../Styles/CalendarPage.module.css";
import IMG from "../assets/smile.png";
import GRP from "../assets/graph.png";
const CalendarPage = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className={styles.totalbox}>
      <div className={styles.container}>
        <div className={styles.titlebox}>
          <div className={styles.date}>2024년 5월</div>
          <div className={styles.arrows}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_15_14856"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_15_14856)">
                <path
                  d="M10 22L0 12L10 2L11.775 3.775L3.55 12L11.775 20.225L10 22Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_15_14857"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_15_14857)">
                <path
                  d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2L18.025 12L8.025 22Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className={styles.week}>
          <div>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div>토</div>
          <div>일</div>
        </div>
        <div className={styles.centered}>
          <Calendar
            onChange={onChange}
            value={value}
            className={styles.calendar}
            tileClassName={styles.tile}
            formatShortWeekday={() => ""}
            showNavigation={false}
          />
        </div>

        <div className={styles.bottombox}>
          <img src={IMG} className={styles.smile} />
          <div className={styles.bottomtext}>
            이번달은 <div className={styles.gren}>건강하게 먹었어요</div>
          </div>
        </div>
      </div>
      <img src={GRP} className={styles.gra} />
    </div>
  );
};

export default CalendarPage;

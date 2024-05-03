import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Header.module.css";
export const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

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

        <Link
          to="consulting"
          className={`${styles.rightlist} ${styles.dropdown}`}
          onClick={toggleDropdown}
        >
          컨설팅
          {dropdownOpen && (
            <div className={styles.dropdownContent}>
              <Link to="/nutritionist" className={styles.dropdownItem}>
                영양사 고르기
              </Link>
              <Link to="/chatbot" className={styles.dropdownItem}>
                상담채팅
              </Link>
            </div>
          )}
        </Link>

        <Link to="/my-page" className={styles.rightlist}>
          마이페이지
        </Link>
      </div>
    </div>
  );
};

import React from "react";
import "../Styles/NutriPage.css";
const Nutritionist = ({ id, name, numConsult, experience }) => {
  return (
    <div className="profile">
      <div className="nutritionist-name">{name}</div>
      <div className="profile_text">상담 횟수 : {numConsult}</div>
      <div className="profile_text">경력 : {experience}년</div>
      <button className="profile_button">상담 신청하기</button>
    </div>
  );
};

export default Nutritionist;

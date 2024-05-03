import React from "react";
import "../Styles/NutriPage.css";
const Nutritionist = ({ id, name, numConsult, experience }) => {
  return (
    <div>
      <div>{name}</div>
      <div>상담 횟수 : {numConsult}</div>
      <div>경력 : {experience}</div>
      <button>상담 신청하기</button>
    </div>
  );
};

export default Nutritionist;

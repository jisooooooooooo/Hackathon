import React from "react";
import "../Styles/NutriPage.css";
import u1 from "../assets/Ellipse 7.png";
import u2 from "../assets/Ellipse 8.png";
import u3 from "../assets/Ellipse 9.png";
import u4 from "../assets/Ellipse 10.png";
import u5 from "../assets/Ellipse 13.png";
import u6 from "../assets/Frame 20.png";
const Nutritionist = ({ id, name, numConsult, experience }) => {
  let imageSource;
  if (id === 1) {
    imageSource = u1;
  } else if (id === 2) {
    imageSource = u2;
  } else if (id === 3) {
    imageSource = u3;
  } else if (id === 4) {
    imageSource = u4;
  } else if (id === 5) {
    imageSource = u5;
  } else if (id === 6) {
    imageSource = u6;
  }
  return (
    <div className="profile">
      <img src={imageSource} alt={`Nutritionist ${id}`} />
      <div className="nutritionist-name">{name}</div>
      <div className="profile_text">상담 횟수 : {numConsult}</div>
      <div className="profile_text">경력 : {experience}년</div>
      <button className="profile_button">상담 신청하기</button>
    </div>
  );
};

export default Nutritionist;

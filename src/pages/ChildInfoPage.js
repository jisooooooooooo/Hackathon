import React from "react";
import "../Styles/ChildInfoPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import IMGG from "../assets/main.png";
function Info() {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [pastDisease, setPastDisease] = useState("");
  const [extra, setExtra] = useState("");
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([name, birthday, gender, height, weight, pastDisease, extra, info]);
  };
  const handleGenderClick = (selectedGender) => {
    setGender(selectedGender);
  };

  return (
    <div className="info">
      <div className="title">아이의 정보를 입력해주세요</div>
      <div className="info_div">
        <h4 className="info_title">이름</h4>
        <input
          type={"text"}
          placeholder="이름 입력"
          className="info_input"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
        <h4 className="info_title">생년월일</h4>
        <input type={"date"} className="info_input"></input>
        <h4 className="info_title">성별</h4>
        <div className="info_gender">
          <button
            className={
              gender === "male" ? "info_gender_item active" : "info_gender_item"
            }
            onClick={() => handleGenderClick("male")}
          >
            남
          </button>
          <button
            className={
              gender === "female"
                ? "info_gender_item active"
                : "info_gender_item"
            }
            onClick={() => handleGenderClick("female")}
          >
            여
          </button>
        </div>

        <h4 className="info_title">키(cm)</h4>
        <input
          placeholder="키 입력"
          type="number"
          value={height}
          className="info_input"
          onChange={(event) => setHeight(event.target.value)}
        ></input>
        <h4 className="info_title">몸무게(kg)</h4>
        <input
          type={"number"}
          placeholder="몸무게 입력"
          className="info_input"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        ></input>
        <h4 className="info_title">과거병력</h4>
        <input
          type={"text"}
          placeholder="과거병력 입력"
          className="info_input"
          value={pastDisease}
          onChange={(event) => setPastDisease(event.target.value)}
        ></input>
        <h4 className="info_title">기타 입력 (예: 식습관)</h4>
        <input
          type={"text"}
          placeholder="기타 입력"
          className="info_input"
          value={extra}
          onChange={(event) => setExtra(event.target.value)}
        ></input>
        <Link to="/main" className="submit_button" onClick={addInfo}>
          제출
        </Link>
      </div>
      <img src={IMGG} className="backimg" />
    </div>
  );
}

export default Info;

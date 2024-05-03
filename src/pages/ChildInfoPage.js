import React from "react";
import "../Styles/ChildInfoPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div className="info">
      <h2>아이정보를 입력해주세요</h2>
      <div className="info_div">
        <h4 className="info_title">이름</h4>
        <input
          type={"text"}
          placeholder="이름 입력"
          className="info_input"
          onChange={(event) => setName(event.target.value)}
        ></input>
        <h4 className="info_title">생년월일</h4>
        <input type={"date"} className="info_input"></input>
        <h4 className="info_title">성별</h4>
        <div className="info_gender">
          <button
            className="info_gender_item"
            onChange={(event) => setGender(event.target.value)}
          >
            남
          </button>
          <button
            className="info_gender_item"
            onChange={(event) => setGender(event.target.value)}
          >
            여
          </button>
        </div>

        <h4 className="info_title">키(cm)</h4>
        <input
          placeholder="키 입력"
          type={"number"}
          value="키 입력"
          className="info_input"
          onChange={(event) => setHeight(event.target.value)}
        ></input>
        <h4 className="info_title">몸무게(kg)</h4>
        <input
          type={"number"}
          placeholder="몸무게 입력"
          className="info_input"
          onChange={(event) => setWeight(event.target.value)}
        ></input>
        <h4 className="info_title">과거병력</h4>
        <input
          type={"text"}
          placeholder="과거병력 입력"
          className="info_input"
          onChange={(event) => setPastDisease(event.target.value)}
        ></input>
        <h4 className="info_title">기타 입력 (예: 식습관)</h4>
        <input
          type={"text"}
          placeholder="기타 입력"
          className="info_input"
          onChange={(event) => setExtra(event.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default Info;

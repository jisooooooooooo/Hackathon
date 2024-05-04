import React from "react";
import childPic from "../assets/child.png";
import "../Styles/MyPage.css";
function myPage() {
  return (
    <>
      <div>우리아이 성장 한 눈에 보기</div>
      <div className="title">
        <div className="info">
          <div className="co_title">우리 아이 정보</div>
          <div className="more">
            <div>박서준 (남)</div>
            <div>2020.05.04</div>
            <div>107cm/19kg</div>
            <div>장염, 아토피</div>
          </div>
        </div>
        <div className="second_info">
          <div className="muruk">사랑하는 서준이가 무럭무럭 자라고 있어요!</div>
          <div className="badge">
            뱃지
            <div>똑똑맘</div>
            <div>열정맘</div>
          </div>
          <div className="height">키</div>
          <div className="weight">몸무게</div>
        </div>
      </div>
    </>
  );
}

export default myPage;

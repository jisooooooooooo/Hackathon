import React from "react";
import "../Styles/MyPage.css";
import myPage from "../assets/myPage.png";

function MyPage() {
  return (
    <>
      <img src={myPage} alt="myPage" className="myPage" />
    </>
  );
}

export default MyPage;

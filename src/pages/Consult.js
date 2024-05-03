// ConsultingPage.js
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Consult.css"

const ConsultingPage = () => {
  return (
    <div>
      <Link to={"/nutritionist"}>영양사 고르기</Link>
      <Link to={"/chatbot"}>상담채팅</Link>
    </div>
  );
};
export default ConsultingPage;

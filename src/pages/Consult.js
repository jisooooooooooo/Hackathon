// ConsultingPage.js
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Consult.css";
import Nutritionist from "../components/nutritionist";
const ConsultingPage = () => {
  return (
    <div className="header_h">
      <Link to={"/nutritionist"} className="header">
        영양사 고르기
      </Link>
      <Link to={"/chatbot"} className="header">
        상담채팅
      </Link>
    </div>
  );
};
export default ConsultingPage;

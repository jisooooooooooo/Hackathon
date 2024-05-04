import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import { Header } from "./components/Header";
import "./reset.css";
// import Chatbot from "./components/chatbot";
import CalendarPage from "./pages/CalendarPage";
import ContentsPage from "./pages/ContentPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import NutritionistPage from "./pages/NutritionistPage";
import Chatbot from "./components/chatbot";
import Feedback from "./pages/FeedbackPage";
import ChildInfo from "./pages/ChildInfoPage";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ChildInfo />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/contents" element={<ContentsPage />} />
        <Route path="/consulting" element={<NutritionistPage />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/nutritionist" element={<NutritionistPage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

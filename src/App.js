import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import { Header } from "./components/Header";
import "./reset.css";
// import Chatbot from "./components/chatbot";
import CalendarPage from "./pages/CalendarPage";
import ConsultingPage from "./pages/Consult";
import ContentsPage from "./pages/ContentPage";
import TodayFood from "./pages/TodayFood";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import NutritionistPage from "./pages/NutritionistPage";
import Chatbot from "./components/chatbot";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/today-food" element={<TodayFood />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/contents" element={<ContentsPage />} />
        <Route path="/consulting" element={<ConsultingPage />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/nutritionist" element={<NutritionistPage />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

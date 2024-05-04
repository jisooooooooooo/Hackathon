import React from "react";
import ChatBot from "react-simple-chatbot";
import "../Styles/Chatbot.css";
function Chatbot() {
  const steps = [
    {
      id: "1",
      message: "안녕하세요!",
      trigger: "id",
    },
    {
      id: "id",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message:
        "어머님 안녕하세요, 영양사 000입니다. 지난주 식단을 보니 밀가루 식품을 평소보다 많이 섭취하셨던데, 아토피가 심할 때는 밀가루 섭취도 줄이시거나 최대한 자제하시는 것이 좋습니다. 쌀도 백미로 드시는 것이 권장됩니다. 간식도 지난주 목요일날 주신 새우깡 보다는 가공되지 않은 신선한 과일이나 견과류등을 주시는 것이 좋겠습니다.",
      trigger: "4",
    },
    {
      id: "4",
      user: true,
      end: true,
    },
  ];

  return (
    <div>
      <div className="title">영양사님께 물어보세요</div>
      <ChatBot
        className="chatbot"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          lineHeight: "1.5",
        }}
        contentStyle={{ overflow: "hidden" }}
        bubbleStyle={{ backgroundColor: "#FF9200", color: "#fff" }}
        userDelay={1000}
        hideHeader={true}
        steps={steps}
      />
    </div>
  );
}

export default Chatbot;

import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import "../Styles/Chatbot.css";
function Chatbot() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  // const [gender, setGender] = useState('');
  const [completed, setCompleted] = useState(false);

  const steps = [
    {
      id: "1",
      message: "안녕! 이름이 뭐야?",
      trigger: name ? "2" : "getName",
      end: completed,
    },
    {
      id: "getName",
      user: true,
      trigger: "2",
      validator: (value) => {
        if (!value || value.trim() === "") {
          return "이름을 입력해주세요.";
        }
        return true;
      },
      onEnter: (value) => {
        if (!name) {
          setName(value);
        }
      },
    },
    {
      id: "2",
      message: `안녕 ${name}! 나이는 몇 살이니?`,
      trigger: "getAge",
      end: completed,
    },
    {
      id: "getAge",
      user: true,
      trigger: "3",
      validator: (value) => {
        if (isNaN(value)) {
          return "숫자를 입력해주세요.";
        }
        return true;
      },
      onEnter: (value) => {
        setAge(value);
      },
    },
    {
      id: "3",
      message: `성별이 뭐야?`,
      trigger: "getGender",
      end: completed,
    },
    {
      id: "getGender",
      options: [
        { value: "남자", label: "남자", trigger: "4" },
        { value: "여자", label: "여자", trigger: "4" },
      ],
    },
    {
      id: "4",
      message: `안녕 ${name}! ${age}살이군요!`,
      end: true,
      onTrigger: () => setCompleted(true),
    },
  ];

  return (
    <div>
      <ChatBot
        className="chatbot"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
        }}
        contentStyle={{ overflow: "hidden" }}
        bubbleStyle={{ backgroundColor: "#007bff", color: "#fff" }}
        userDelay={3000}
        hideHeader={true}
        steps={steps}
      />
    </div>
  );
}

export default Chatbot;

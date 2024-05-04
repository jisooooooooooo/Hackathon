import React from "react";
import nutriData from "../nutritionistData.json";
import Nutritionist from "../components/nutritionist";
import "../Styles/NutriPage.css";

function nutri() {
  return (
    <div>
      <div className="nutri_title">원하는 영양사님을 구독해 보세요</div>
      <div className="container">
        <div className="grid-container">
          {nutriData.nutritList.map((value) => (
            <div key={value.id} className="nutritionist-item">
              <Nutritionist
                id={value.id}
                name={value.name}
                numConsult={value.numConsult}
                experience={value.experience}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default nutri;

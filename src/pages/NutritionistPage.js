import React from "react";
import nutriData from "../nutritionistData.json";
import Nutritionist from "../components/nutritionist";
import "../Styles/NutriPage.css";

function nutri() {
  return (
    <>
      <h1 className="title">원하는 영양사님께 물어보세요</h1>
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
    </>
  );
}

export default nutri;

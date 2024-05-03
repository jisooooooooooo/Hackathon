import React from "react";
import nutriData from "../nutritionistData.json";
import Nutritionist from "../components/nutritionist";
import "../Styles/NutriPage.css";
function nutri() {
  return (
    <>
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
    </>
  );
}

export default nutri;

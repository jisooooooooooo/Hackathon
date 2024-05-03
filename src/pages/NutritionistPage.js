import React from "react";
import nutriData from "../nutritionistData.json";
import Nutritionist from "../components/nutritionist";

function nutri() {
  return (
    <div>
      {nutriData.nutritList.map((value) => (
        <Nutritionist
          key={value.id}
          id={value.id}
          name={value.name}
          numConsult={value.numConsult}
          experience={value.experience}
        />
      ))}
    </div>
  );
}
export default nutri;

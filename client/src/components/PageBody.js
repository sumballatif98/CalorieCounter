import React, { useState, useEffect } from "react";
import { CaloriesIntakeDetails, FoodAndExerciseDetails } from ".";
import { getFood } from "./utils";

export function PageBody({ date }) {
  const [foodDetails, setFoodDetails] = useState({});

  useEffect(() => {
    const food = getFood(new Date(date).toDateString());
    food.then((data) => {
      setFoodDetails(data);
    });
  }, [date]);

  return (
    <div className="col-12">
      <div>
        <CaloriesIntakeDetails
          date={date}
          foodDetails={foodDetails}
          setFoodDetails={setFoodDetails}
        />
        <div className=" mt-3">
          <FoodAndExerciseDetails foodDetails={foodDetails} text={"food"} />
        </div>
        <div className=" mt-3">
          <FoodAndExerciseDetails foodDetails={foodDetails} text={"exercise"} />
        </div>
      </div>
    </div>
  );
}

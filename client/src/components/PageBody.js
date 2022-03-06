import React, { useState, useEffect } from "react";
import { CaloriesIntakeDetails, FoodDetails } from ".";
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
          <FoodDetails foodDetails={foodDetails} />
        </div>
      </div>
    </div>
  );
}

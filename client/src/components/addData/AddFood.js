import React, { useState, useEffect } from "react";
import { saveFood } from "../utils";

export function AddFood({ setConsumedCalories, setRemainingCalories }) {
  const [foodTitle, setFoodTitle] = useState("");
  const [calories, setCalories] = useState("");

  function isEmpty(value) {
    return value === "" ? true : false;
  }

  function handleSave() {
    if (!isEmpty(foodTitle) && !isEmpty(calories)) {
      const response = saveFood(foodTitle, calories);
      // console.log(response);
      response
        .then((data) => {
          setConsumedCalories(data.calories.consumed);
          setRemainingCalories(data.calories.target - data.calories.consumed);
          setFoodTitle("");
          setCalories("");
        })
        .catch(console.error());
    } else {
      alert("Food and calories must be filled");
    }
  }
  return (
    <div className=" bg-white p-2 rounded-3">
      <div className=" d-flex gap-3 ">
        <TextField label={"Title"} value={foodTitle} setValue={setFoodTitle} />
        <TextField label={"Calories"} value={calories} setValue={setCalories} />
      </div>
      <button
        type="button"
        className="btn btn-success mt-3"
        onClick={() => {
          handleSave();
        }}
      >
        Save
      </button>
    </div>
  );
}

function TextField({ label, value, setValue }) {
  return (
    <div>
      <label htmlFor="food" className="form-label">
        {label}
      </label>
      <input
        type="text"
        id="food"
        value={value}
        className="form-control"
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}

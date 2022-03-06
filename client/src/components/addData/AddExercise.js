import React, { useState, useEffect } from "react";
import { saveExercise } from "../utils";
import { SaveData } from "./SaveData";

export function AddExercise({ setFoodDetails, date, setFormToShow }) {
  const [exercise, setExercise] = useState("");
  const [calories, setCalories] = useState("");

  function isEmpty(value) {
    return value === "" ? true : false;
  }

  function handleSave() {
    if (!isEmpty(exercise) && !isEmpty(calories)) {
      const response = saveExercise(
        exercise,
        calories,
        new Date(date).toDateString()
      );
      response
        .then((data) => {
          setFoodDetails(data);
          setExercise("");
          setCalories("");
        })
        .catch(console.error());
    } else {
      alert("Exercise and calories must be filled");
    }
  }
  return (
    <div className=" bg-white p-2 rounded-3">
      <div className=" d-flex gap-3 ">
        <TextField
          label={"Exercise Name"}
          value={exercise}
          setValue={setExercise}
        />
        <TextField
          label={"Calories Burnt"}
          value={calories}
          setValue={setCalories}
        />
      </div>
      <SaveData handleSave={handleSave} setFormToShow={setFormToShow} />
    </div>
  );
}

function TextField({ label, value, setValue }) {
  return (
    <div>
      <label htmlFor="exercise" className="form-label">
        {label}
      </label>
      <input
        type="text"
        id="exercise"
        value={value}
        className="form-control"
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}

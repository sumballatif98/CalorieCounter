import React, { useState, useEffect } from "react";
import { saveExercise } from "../utils";

export function AddExercise({ setConsumedCalories, setRemainingCalories }) {
  const [exercise, setExercise] = useState("");
  const [calories, setCalories] = useState("");

  function isEmpty(value) {
    return value === "" ? true : false;
  }

  function handleSave() {
    if (!isEmpty(exercise) && !isEmpty(calories)) {
      const response = saveExercise(exercise, calories);
      response
        .then((data) => {
          setConsumedCalories(data.calories.consumed);
          setRemainingCalories(data.calories.target - data.calories.consumed);
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
        <TextField label={"Title"} value={exercise} setValue={setExercise} />
        <TextField
          label={"Calories burnt"}
          value={calories}
          setValue={setCalories}
        />
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

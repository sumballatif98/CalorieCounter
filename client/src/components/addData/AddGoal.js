import React, { useState } from "react";
import { addGoal } from "../utils";

export function AddGoal({ setRemainingCalories }) {
  const [goal, setGoal] = useState("");

  function isEmpty(value) {
    return value === "" ? true : false;
  }

  function handleSave() {
    if (!isEmpty(goal)) {
      const response = addGoal(goal);
      // console.log(response);
      response
        .then((data) => {
          console.log(data);
          setRemainingCalories(data.calories.target - data.calories.consumed);
          setGoal("");
        })
        .catch(console.error());
    } else {
      alert("Goal must be filled");
    }
  }
  return (
    <div className="bg-white p-2 rounded-3">
      <label htmlFor="food" className="form-label">
        Add Goal
      </label>
      <input
        type="text"
        id="food"
        value={goal}
        className="form-control"
        onChange={(event) => {
          setGoal(event.target.value);
        }}
      />
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

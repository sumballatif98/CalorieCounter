import React, { useState } from "react";
import { addGoal } from "../utils";
import { SaveData } from "./SaveData";

export function AddGoal({ setFoodDetails, date, setFormToShow }) {
  const [goal, setGoal] = useState("");

  function isEmpty(value) {
    return value === "" ? true : false;
  }

  function handleSave() {
    if (!isEmpty(goal)) {
      console.log(new Date(date).toDateString());
      const response = addGoal(goal, new Date(date).toDateString());
      response
        .then((data) => {
          setFoodDetails(data);
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
      <SaveData handleSave={handleSave} setFormToShow={setFormToShow} />
    </div>
  );
}

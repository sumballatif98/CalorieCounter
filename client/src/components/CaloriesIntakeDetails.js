import React, { useEffect, useState } from "react";
import { MdOutlineInfo } from "react-icons/md";
import { AddExercise, AddGoal, AddFood } from "./addData";
import styles from "./caloriesIntakeDetails.module.css";

export function CaloriesIntakeDetails({ date, foodDetails, setFoodDetails }) {
  const [consumedCalories, setConsumedCalories] = useState(0);
  const [remainingCalories, setRemainingCalories] = useState(0);
  const [formToShow, setFormToShow] = useState(null);
  const [progressBarWidth, setProgressBarWidth] = useState("0%");

  const forms = {
    food: (
      <AddFood
        setFoodDetails={setFoodDetails}
        date={date}
        setFormToShow={setFormToShow}
      />
    ),
    exercise: (
      <AddExercise
        setFoodDetails={setFoodDetails}
        date={date}
        setFormToShow={setFormToShow}
      />
    ),
    goal: (
      <AddGoal
        setFoodDetails={setFoodDetails}
        date={date}
        setFormToShow={setFormToShow}
      />
    ),
  };

  useEffect(() => {
    const calories = foodDetails?.calories;
    const width = (calories?.consumed / calories?.target) * 100;
    setProgressBarWidth(width ? width + "%" : "0%");
    setConsumedCalories(foodDetails?.calories?.consumed);
    setRemainingCalories(
      foodDetails?.calories?.target - foodDetails?.calories?.consumed
    );
  }, [foodDetails]);

  return (
    <div>
      <div className={`row gx-0 py-4 ${styles.background}`}>
        <div className=" col-9">
          <div className="  p-4 ">
            <div className=" d-flex align-items-end gap-3">
              <p className={`fs-1 fw-bold ${styles.textColor}`}>
                {consumedCalories ? consumedCalories : 0}
              </p>
              <p className="text-uppercase fw-bold pb-2">Calories consumed</p>
            </div>
            <div className="progress ">
              <div
                style={{ width: progressBarWidth }}
                className={`progress-bar  ${styles.backgroundColor}`}
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="d-flex gap-2 mt-5 align-items-start">
              <AddDataButton id="food" setFormToShow={setFormToShow} />
              <AddDataButton id="exercise" setFormToShow={setFormToShow} />
              <AddDataButton id="goal" setFormToShow={setFormToShow} />
            </div>
            <div className="mt-3">{forms[formToShow]}</div>
          </div>
        </div>

        <div className=" col-3 px-lg-5 px-1">
          <CaloriesLeft remainingCalories={remainingCalories} />
        </div>
      </div>
    </div>
  );
}

function CaloriesLeft({ remainingCalories }) {
  return (
    <div
      className="d-flex align-items-center justify-content-center h-100 w-100 rounded-circle"
      style={{ background: "#edf3f2" }}
    >
      <div className=" d-flex flex-column align-items-center justify-content-center rounded-circle">
        <div className=" fs-1 fw-bold ">
          {remainingCalories ? remainingCalories : 0}
        </div>
        <div className=" fs-6 fw-bold  text-uppercase">Calories</div>
        <div className=" fs-6 fw-bold  text-uppercase">left</div>
      </div>
    </div>
  );
}

function AddDataButton({ id, setFormToShow }) {
  const buttons = {
    food: "Add Food",
    exercise: "Add Exerise",
    goal: "Add Goal",
  };
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => {
        setFormToShow(id);
      }}
    >
      {buttons[id]}
    </button>
  );
}

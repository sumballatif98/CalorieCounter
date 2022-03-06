import React, { useEffect, useState } from "react";
import { MdOutlineInfo } from "react-icons/md";
import { AddExercise, AddGoal, AddFood } from "./addData";
import styles from "./caloriesIntakeDetails.module.css";
import { getFood } from "./utils";

export function CaloriesIntakeDetails() {
  const [consumendCaories, setConsumedCalories] = useState(0);
  const [remainingCalories, setRemainingCalories] = useState(0);
  const [formToDisplay, setFormToDisplay] = useState(null);
  const [progressBarWidth, setProgressBarWidth] = useState("");
  const forms = {
    food: (
      <AddFood
        setConsumedCalories={setConsumedCalories}
        setRemainingCalories={setRemainingCalories}
      />
    ),
    exercise: (
      <AddExercise
        setConsumedCalories={setConsumedCalories}
        setRemainingCalories={setRemainingCalories}
      />
    ),
    goal: <AddGoal setRemainingCalories={setRemainingCalories} />,
  };

  useEffect(() => {
    const foodDetails = getFood();
    foodDetails.then((data) => {
      setConsumedCalories(data.calories.consumed);
      setRemainingCalories(
        data.calories.target ? data.calories.target - data.calories.consumed : 0
      );
    });
  }, []);

  useEffect(() => {
    const targetCalories = remainingCalories + consumendCaories;
    const width = (consumendCaories / targetCalories) * 100;
    setProgressBarWidth(width + "%");
  }, [consumendCaories, remainingCalories]);

  return (
    <div className="row gx-0 ">
      <div className=" col-8">
        <div className="  p-4 ">
          <div className=" d-flex align-items-end gap-3">
            <p className={`fs-1 fw-bold ${styles.textColor}`}>
              {consumendCaories}
            </p>
            <p className="text-uppercase fw-bold pb-2">
              Calories consumed today
            </p>
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
          {/* <div style={{ color: "gray" }} className="mt-1">
            Budget: 1,600
          </div> */}
          <div className="d-flex gap-2 mt-5 align-items-start">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setFormToDisplay("food");
              }}
            >
              Add Food
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setFormToDisplay("exercise");
              }}
            >
              Add Exercise
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setFormToDisplay("goal");
              }}
            >
              Add Goal
            </button>
          </div>
          <div className="mt-5">{forms[formToDisplay]}</div>
        </div>
      </div>

      <div className=" col-4 px-5 position-relative">
        <CaloriesLeft remainingCalories={remainingCalories} />
        <div
          className={`position-absolute top-0 end-0 pe-2 ${styles.iconColor} `}
        >
          <MdOutlineInfo />
        </div>
      </div>
    </div>
  );
}

function CaloriesLeft({ remainingCalories }) {
  return (
    <div className="d-flex align-items-center justify-content-center h-100 mx-lg-5">
      <div className=" d-flex flex-column align-items-center justify-content-center rounded-circle bg-white h-75 w-75 ">
        <div className=" fs-1 fw-bold ">{remainingCalories}</div>
        <div className=" fs-6 fw-bold  text-uppercase">Calories</div>
        <div className=" fs-6 fw-bold  text-uppercase">left</div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./dailyNutrition.module.css";
import { MdOutlineInfo } from "react-icons/md";

export function DailyNutrition() {
  const dailyNutrition = [
    {
      name: "Calories",
      consumed: 328,
      max: 1200,
      unit: "cal",
    },
    {
      name: "Fat",
      consumed: 88,
      max: 96,
      unit: "g",
    },
    {
      name: "Saturated Fat",
      consumed: 1,
      max: 24,
      unit: "g",
    },
    {
      name: "Cholesterol",
      consumed: 32,
      max: 300,
      unit: "mg",
    },
    {
      name: "Sodium",
      consumed: 679,
      max: 2400,
      unit: "mg",
    },
    {
      name: "Carbohydrates",
      consumed: 24,
      max: 162,
      unit: "g",
    },
    {
      name: "Fiber",
      consumed: 4,
      max: 30,
      unit: "g",
    },
    {
      name: "Protein",
      consumed: 70,
      max: 162,
      unit: "g",
    },
  ];
  return (
    <div>
      <div className="d-flex">
        <div
          className={` py-2 px-3 text-light  fw-bold h-auto ${styles.colorGreen}`}
        >
          DAILY NUTRITION
        </div>
        <div
          className={` pe-2 d-flex align-items-center justify-content-end flex-grow-1  ${styles.iconColor} ${styles.colorGray}`}
        >
          <MdOutlineInfo />
        </div>
      </div>

      {dailyNutrition.map((nutrition, index) => {
        return <NutritionProgress nutrition={nutrition} key={index} />;
      })}

      <div className={`mt-5 d-flex`}>
        <div
          className={` py-2 px-3 text-light  fw-bold h-auto ${styles.colorGreen}`}
        >
          EATING GUIDELINES
        </div>
        <div className={` flex-grow-1  ${styles.colorGray}`}></div>
      </div>
      <div className="py-2 ">
        To meet your daily calorie goal, follow these food serving
        recommendations. eat extra fruits and vegetables, if you'd like.
      </div>
    </div>
  );
}

function NutritionProgress({ nutrition }) {
  const consumedPercentage = (nutrition.consumed / nutrition.max) * 100;
  const width = consumedPercentage + "%";
  return (
    <div>
      <div className=" pt-2 ">
        <div className=" d-flex justify-content-between ">
          <b>{nutrition.name}</b>
          <div className=" text-black-50">
            {nutrition.consumed}
            {nutrition.unit}/{nutrition.max}
            {nutrition.unit}
          </div>
        </div>
      </div>
      <div className="progress w-100">
        <div
          className={` ${
            consumedPercentage <= 60 ? styles.colorGreen : styles.colorOrange
          }`}
          style={{ width: width }}
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

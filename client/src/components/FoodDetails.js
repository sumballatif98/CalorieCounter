import React from "react";
import styles from "./dailyNutrition.module.css";
import { GoPlus } from "react-icons/go";

export function FoodDetails() {
  return (
    <div>
      <div
        className={`d-flex gx-0 justify-content-between mt-2 p-2 ${styles.colorGreen}`}
      >
        <div className="fw-bold text-white">FOOD</div>
        <div className=" d-flex text-white align-items-center gap-2">
          <div className="">Show Nutrient Details</div>
          <GoPlus />
        </div>
      </div>
      <div className={`d-flex justify-content-between p-2 ${styles.colorGray}`}>
        <div className="fw-bold">BREAKFAST</div>
        <div className="fw-bold text-black-50 pe-2">Calories</div>
      </div>
      <div>
        <BreakfastDetails />
      </div>
    </div>
  );
}
function BreakfastDetails() {
  return (
    <div>
      <div className="border-bottom">
        <div className="mt-2 fw-bold">
          Sausage,Pepper,Olive and Onion Sandwich
        </div>
        <div className=" ">1 serving(s)</div>
        <div className="d-flex mb-2 justify-content-between">
          <div className="d-flex ">
            <div className="m-2 pe-3 border-end">View</div>
            <div className="m-2 pe-3 border-end">Edit</div>
            <div className="m-2 pe-3 border-end">Copy</div>
            <div className="m-2 ">delete</div>
          </div>
          <div className="p-2 fw-bold fs-5 text-end">350</div>
        </div>
      </div>
      <div className="d-flex mt-2 justify-content-between">
        <AddFood />
        <div className={`p-2 fw-bold fs-5 text-end ${styles.textColorGreen}`}>
          350
        </div>
      </div>
      <div>
        <div className={`fw-bold p-2 ${styles.colorGray}`}>AM SNACK</div>
        <div className="d-flex mt-2 justify-content-between">
          <AddFood />
        </div>
      </div>
    </div>
  );
}

function AddFood() {
  return (
    <div className="d-flex m-2">
      <div className="d-flex ps-2 fw-bold align-items-center gap-1 text-info">
        Add Food
        <GoPlus />
      </div>
      <div className="d-flex ps-2 fw-bold align-items-center gap-1 text-info">
        Quick Log
        <GoPlus />
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import styles from "./dailyNutrition.module.css";
import { GoPlus } from "react-icons/go";
import { getFood } from "./utils";

export function FoodDetails() {
  return (
    <div>
      <div
        className={`d-flex gx-0 justify-content-between mt-2 p-2 ${styles.colorGreen}`}
      >
        <div className="fw-bold text-white">FOOD</div>
        {/* <div className=" d-flex text-white align-items-center gap-2">
          <div className="">Show Nutrient Details</div>
          <GoPlus />
        </div> */}
      </div>
      {/* <div className={`d-flex justify-content-between p-2 ${styles.colorGray}`}>
        <div className="fw-bold">BREAKFAST</div>
        <div className="fw-bold text-black-50 pe-2">Calories</div>
      </div> */}
      <div>
        <BreakfastDetails />
      </div>
    </div>
  );
}
function BreakfastDetails() {
  const [food, setFood] = useState([]);
  useEffect(() => {
    const response = getFood();
    response.then((data) => {
      setFood(
        data.food.map((foodItem) => {
          return foodItem.name;
        })
      );
    });
  }, []);

  return (
    <div>
      <div className="border-bottom ">
        <div className=" d-flex gap-2">
          {food.map((item, index) => {
            return (
              <div className="my-2 py-3 ps-1 fw-bold" key={index}>
                <button
                  type="button"
                  class="btn"
                  style={{ backgroundColor: "lightgray" }}
                >
                  {item}
                </button>
              </div>
            );
          })}
        </div>

        {/* <div className=" ">1 serving(s)</div> */}
        {/* <div className="d-flex mb-2 justify-content-between">
          <div className="d-flex ">
            <div className="m-2 pe-3 border-end">View</div>
            <div className="m-2 pe-3 border-end">Edit</div>
            <div className="m-2 pe-3 border-end">Copy</div>
            <div className="m-2 ">delete</div>
          </div>
          <div className="p-2 fw-bold fs-5 text-end">350</div>
        </div> */}
      </div>
      {/* <div className="d-flex mt-2 justify-content-between">
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
      </div> */}
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

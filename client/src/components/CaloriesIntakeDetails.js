import React from "react";

export function CaloriesIntakeDetails() {
  return (
    <div className="row ">
      <div className=" col-8">
        <div className="  p-4 ">
          <div className=" d-flex align-items-end gap-3">
            <p className="fs-1 fw-bold " style={{ color: "yellowgreen" }}>
              950
            </p>
            <p className="text-uppercase fw-bold pb-2">
              Calories consumed today
            </p>
          </div>
          <div className="progress ">
            <div
              className=" progress-bar"
              role="progressbar"
              style={{ width: "70%", backgroundColor: "yellowgreen" }}
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div style={{ color: "gray" }} className="mt-1">
            Budget: 1,600
          </div>
          <div class="d-flex gap-2 mt-3">
            <button type="button" class="btn btn-primary">
              Add Food
            </button>
            <button type="button" class="btn btn-primary">
              Add Exercise
            </button>
          </div>
        </div>
      </div>

      <div className=" col-4 px-5">
        <CaloriesLeft />
      </div>
    </div>
  );
}

function CaloriesLeft() {
  return (
    <div className="d-flex align-items-center h-100 mx-2">
      <div className=" d-flex flex-column align-items-center justify-content-center rounded-circle bg-white h-75 w-75 ">
        <div className=" fs-1 fw-bold ">650</div>
        <div className=" fs-6 fw-bold  text-uppercase">Calories</div>
        <div className=" fs-6 fw-bold  text-uppercase">left</div>
      </div>
    </div>
  );
}

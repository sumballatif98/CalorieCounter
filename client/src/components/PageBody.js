import React, { useState } from "react";
import { CaloriesIntakeDetails, DailyNutrition, FoodDetails } from ".";

export function PageBody() {
  return (
    <div className="d-flex px-4 gap-5 justify-content-center align-items-start ">
      <div className="col-12">
        <div
          style={{
            background:
              "linear-gradient(130deg, #D8E7E5 4%, #F0F8F7 7%, #F0F8F7 60%, #CCD9D7, #F0F8F7)",
          }}
        >
          <CaloriesIntakeDetails />
        </div>
        <div className=" mt-3">
          <FoodDetails />
        </div>
      </div>

      {/* <div className=" col-4 ">
        <DailyNutrition />
      </div> */}
    </div>
  );
}

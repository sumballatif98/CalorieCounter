import React from "react";
import { CaloriesIntakeDetails, DailyNutrition } from ".";

export function PageBody() {
  return (
    <div className="d-flex px-4 gap-5 justify-content-center align-items-start ">
      <div
        className=" col-8 "
        style={{
          background:
            // "linear-gradient(145deg, #CCD9D7, #F0F8F7 10%, #CCD9D7 90%, #F0F8F7)",
            "linear-gradient(130deg, #D8E7E5 4%, #F0F8F7 7%, #F0F8F7 60%, #CCD9D7, #F0F8F7)",
        }}
      >
        <CaloriesIntakeDetails />
      </div>
      <div className=" col-4 ">
        <DailyNutrition />
      </div>
    </div>
  );
}

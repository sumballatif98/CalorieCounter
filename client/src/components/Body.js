import React from "react";
import { CaloriesIntakeDetails } from ".";

export function Body() {
  return (
    <div>
      <div
        className=" col-8 "
        style={{
          background:
            // "linear-gradient(145deg, #CCD9D7, #F0F8F7 10%, #CCD9D7 90%, #F0F8F7)",
            "linear-gradient(30deg, #D8E7E5 4%, #F0F8F7 7%, #F0F8F7 60%, #CCD9D7, #F0F8F7)",
        }}
      >
        <CaloriesIntakeDetails />
      </div>
    </div>
  );
}

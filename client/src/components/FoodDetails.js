import React, { useEffect } from "react";
import styles from "./foodDetails.module.css";

export function FoodDetails({ foodDetails }) {
  return (
    <div>
      <div
        className={`d-flex gx-0 justify-content-between mt-2 p-2 ${styles.colorGreen}`}
      >
        <div className="fw-bold text-white">FOOD</div>
      </div>
      <div>
        <div className="border-bottom ">
          <div className=" d-flex gap-2">
            {foodDetails?.food?.map((item, index) => {
              return (
                <div className="my-2 py-3 ps-1 fw-bold" key={index}>
                  <button type="button" className={`btn ${styles.colorGrey}`}>
                    {item.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

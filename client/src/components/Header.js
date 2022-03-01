import React from "react";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";

export function Header() {
  return (
    <div className=" ">
      <div className="fs-2 bd-highlight border-bottom">
        <b>Calorie Counter</b>
      </div>
      <div className="d-flex p-2 border-bottom justify-content-center flex-row bd-highlight mb-3">
        <div className="px-2 border border-dark rounded-circle ">
          <div className=" mt-1 mx-1 rounded-circle">
            <BsCalendar3 />
          </div>
        </div>
        <div className="p-2 bd-highlight">
          <MdOutlineArrowBackIosNew />
        </div>
        <div className="p-2 bd-highlight">
          <b>Today</b>
        </div>
        <div className="p-2 bd-highlight">
          <MdOutlineArrowForwardIos />
        </div>
      </div>
    </div>
  );
}

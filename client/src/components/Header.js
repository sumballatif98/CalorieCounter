import React, { useState } from "react";
import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";

export function Header() {
  const [startDate, setStartDate] = useState(new Date());
  const calendar = (
    <div>
      <Calendar />
    </div>
  );
  const datePicker = (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
  return (
    <div className=" ">
      <div className="fs-2 bd-highlight border-bottom">
        <b>Calorie Counter</b>
      </div>
      <div className="d-flex p-2 border-bottom justify-content-center flex-row bd-highlight mb-3">
        <div className="">
          <button
            type="button"
            class="btn mx-1 rounded-circle  border border-dark"
            data-container="body"
            data-toggle="popover"
            data-placement="bottom"
            data-content="abc"
            // onClick={() => {
            //   console.log("buttun clicked");
            // }}
          >
            {/* <div className=" pb-1">
              <BsCalendar3 />
            </div> */}
            {datePicker}
          </button>
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

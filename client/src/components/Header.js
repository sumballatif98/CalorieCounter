import React, { useCallback } from "react";

export function Header({ date, setDate }) {
  const handleDateChange = useCallback((value) => {
    setDate(value);
  }, []);

  const datePicker = (
    <div>
      <input
        type={"date"}
        value={date}
        onChange={(event) => {
          handleDateChange(event.target.value);
        }}
      ></input>
    </div>
  );

  return (
    <div className=" ">
      <div className="fs-2 bd-highlight border-bottom">
        <b>Calorie Counter</b>
      </div>
      <div className="d-flex p-2 border-bottom justify-content-center flex-row bd-highlight mb-3">
        {datePicker}
      </div>
    </div>
  );
}

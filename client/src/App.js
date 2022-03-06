import "./App.css";
import React, { useState } from "react";
import { PageBody, Header } from "./components";

function App() {
  const [date, setDate] = useState(() => {
    return getDate();
  });
  return (
    <div className=" m-3">
      <Header date={date} setDate={setDate} />
      <PageBody date={date} />
    </div>
  );
}

function getDate() {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month =
    newDate.getMonth() > 9
      ? newDate.getMonth() + 1
      : "0" + (newDate.getMonth() + 1);
  const day =
    newDate.getDate() > 9 ? newDate.getDate() : "0" + newDate.getDate();

  const initialDate = year + "-" + month + "-" + day;
  return initialDate;
}

export default App;

import React from "react";

export function SaveData({ handleSave, setFormToShow }) {
  return (
    <div className=" d-flex gap-2">
      <button
        type="button"
        className="btn btn-secondary mt-3"
        onClick={() => {
          setFormToShow(null);
        }}
      >
        Close
      </button>
      <button
        type="button"
        className="btn btn-success mt-3"
        onClick={() => {
          handleSave();
        }}
      >
        Save
      </button>
    </div>
  );
}

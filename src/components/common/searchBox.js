import React from "react";

export default function SearchBox(props) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        name="table_search"
        className="form-control"
        placeholder="Search by name or description"
      />
    </div>
  );
}

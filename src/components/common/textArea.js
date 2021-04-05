import React from "react";

export default function TextArea(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <textarea
        name={props.name}
        id={props.name}
        value={props.value}
        onChange={props.onChange}
        className={`form-control ${props.error && "is-invalid"}`}
        rows={props.rows}
      ></textarea>
      {props.error && (
        <span className="error invalid-feedback">{props.error}</span>
      )}
    </div>
  );
}
